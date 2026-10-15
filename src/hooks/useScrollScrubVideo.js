import { useEffect, useRef, useState } from 'react'

/* ===========================================================================
 * Scroll-driven video scrubbing engine
 * ---------------------------------------------------------------------------
 * The hero video is never played. It stays paused for its whole life and we
 * only move its `currentTime`, so the scroll position *is* the playhead.
 *
 * How the loop works (and why it is built this way):
 *
 *   scroll event  ->  read target progress            (passive listener, no seeks)
 *   requestAnimationFrame  ->  ease current towards target
 *   guarded write  ->  video.currentTime = current * duration
 *
 *  - The scroll listener never touches the video. It only records the target
 *    progress and restarts the animation frame loop, so scrolling costs almost
 *    nothing even during fast flicks.
 *  - Smoothing (an exponential ease that is frame-rate independent) removes the
 *    stair-stepping you get from writing `currentTime` straight from raw scroll
 *    events, without introducing a visible lag: with SMOOTHING = 20 the playhead
 *    covers ~95% of the distance to a new scroll position in ~0.15s.
 *  - `currentTime` is written only when the frame that would be shown differs
 *    from the frame already rendered by at least half a video frame (the clip is
 *    24fps = 0.0417s per frame, so half a frame is 1/48s). Seeks inside the same
 *    frame are invisible, so skipping them removes the "seek flood" - the main
 *    source of stutter when scrubbing a video - while never skipping a frame.
 *  - The loop stops as soon as the playhead settles on the target and restarts
 *    on the next scroll. No idle rAF loop, no per-frame React state.
 *
 * ENCODING NOTE (this matters as much as the JavaScript)
 *   The supplied master had exactly ONE keyframe for the whole 9s clip, so every
 *   seek forced the browser to decode from frame 0 - unusable for scrubbing.
 *   `public/hero/hero-desktop.mp4` / `hero-mobile.mp4` are re-encodes made for
 *   random access: H.264 High, yuv420p, 24fps, a keyframe every 8 frames (~3/s,
 *   so at most 7 frames are ever decoded to reach any frame), no B-frames,
 *   `-movflags +faststart` so the index is at the front of the file and seeking
 *   works before the file has finished downloading, no audio track, and a
 *   resolution/bitrate that stays light (~4.6MB desktop / ~1.4MB mobile).
 *
 *   If the clip is ever replaced, re-encode it the same way, e.g.
 *     ffmpeg -i master.mp4 -an -c:v libx264 -preset medium -crf 25 \
 *       -g 8 -keyint_min 8 -sc_threshold 0 -bf 0 -pix_fmt yuv420p \
 *       -movflags +faststart hero-desktop.mp4
 *   Preferred characteristics: MP4/H.264 (hardware-decoded, so far smoother to
 *   scrub than software-decoded VP9/AV1 on phones), frequent keyframes
 *   (<= ~0.5s apart), no B-frames, faststart, modest resolution and bitrate.
 * ========================================================================= */

// Exponential smoothing rate (per second). Higher = tighter coupling to scroll.
const SMOOTHING = 20

// Smallest playhead change worth writing to `currentTime` (seconds): half a
// frame of the 24fps clip, i.e. the threshold below which a seek is invisible.
const MIN_SEEK_DELTA = 1 / 48

// Progress distance at which we consider the playhead settled on its target.
const SETTLE_EPSILON = 0.0005

// Hero copy holds through the start of the pin, then drifts away over this
// fraction of the scroll so the video stays the hero.
const COPY_FADE_END = 0.45
const HINT_FADE_END = 0.12

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)

/**
 * @param {object}   options
 * @param {object}   options.containerRef  tall section that defines the scroll range
 * @param {object}   options.videoRef      the paused <video> being scrubbed
 * @param {object}   [options.copyRef]     hero copy wrapper (fade/drift)
 * @param {object}   [options.hintRef]     scroll hint (fades out immediately)
 * @param {boolean}  options.active        false = no pinning/scrubbing (reduced motion, fallback)
 */
export function useScrollScrubVideo({ containerRef, videoRef, copyRef, hintRef, active }) {
  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const rafRef = useRef(0)
  const lastSeekRef = useRef(-1)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!active || !container || !video) return

    const readTarget = () => {
      const rect = container.getBoundingClientRect()
      // Scrollable distance inside the pinned section (section height - viewport).
      const distance = rect.height - window.innerHeight
      targetRef.current = distance > 0 ? clamp01(-rect.top / distance) : 0
    }

    const seek = (progress, force) => {
      const duration = video.duration
      if (!duration || !Number.isFinite(duration)) return
      // progress 1 maps exactly onto the final frame.
      const time = progress >= 1 ? duration : progress * duration
      const previous = lastSeekRef.current
      if (force || previous < 0 || Math.abs(time - previous) >= MIN_SEEK_DELTA) {
        lastSeekRef.current = time
        video.currentTime = time
      }
    }

    // Direct DOM writes, never React state: this runs on every animation frame
    // while the user scrolls and must not re-render the tree.
    const applyCopy = (progress) => {
      const copy = copyRef?.current
      if (copy) {
        const t = clamp01(progress / COPY_FADE_END)
        const eased = t * t * (3 - 2 * t) // smoothstep
        const opacity = 1 - eased
        copy.style.opacity = opacity.toFixed(3)
        copy.style.transform = `translate3d(0, ${(-eased * 34).toFixed(2)}px, 0)`
        // Retired copy must not swallow clicks aimed at the video behind it.
        copy.style.pointerEvents = opacity < 0.05 ? 'none' : ''
      }

      const hint = hintRef?.current
      if (hint) {
        hint.style.opacity = (1 - clamp01(progress / HINT_FADE_END)).toFixed(3)
      }
    }

    let lastFrameTime = 0

    const tick = (timestamp) => {
      rafRef.current = 0
      const dt = lastFrameTime ? Math.min((timestamp - lastFrameTime) / 1000, 0.05) : 1 / 60
      lastFrameTime = timestamp

      const target = targetRef.current
      // Frame-rate independent exponential ease towards the scroll position.
      let current = currentRef.current + (target - currentRef.current) * (1 - Math.exp(-SMOOTHING * dt))
      const settled = Math.abs(target - current) <= SETTLE_EPSILON
      if (settled) current = target
      currentRef.current = current

      applyCopy(current)
      seek(current, settled)

      if (settled) {
        // Nothing left to animate: park the loop until the next scroll/resize.
        lastFrameTime = 0
      } else {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    const start = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      readTarget()
      start()
    }

    const onResize = () => {
      readTarget()
      start()
    }

    // Sync immediately so a reload/back-navigation in the middle of the pin
    // shows the matching frame instead of snapping there on first scroll.
    readTarget()
    currentRef.current = targetRef.current
    applyCopy(currentRef.current)
    seek(currentRef.current, true)
    start()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
  }, [active, containerRef, videoRef, copyRef, hintRef])
}

/**
 * `prefers-reduced-motion` — when set, the hero degrades to a still frame
 * (no pinned scroll section, no video download, no scrubbing).
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}
