import { useEffect, useRef, useState } from 'react'

/* The hero visual: a paused video whose currentTime is driven by scroll
 * (see src/hooks/useScrollScrubVideo.js for the engine and the encoding rules
 * the clips must follow). This component only owns the media itself — choosing
 * the source, revealing it when it can actually be scrubbed, and falling back
 * to the original hero photograph if the video cannot be used. */

const DESKTOP_SRC = '/hero/hero-desktop.mp4'
const MOBILE_SRC = '/hero/hero-mobile.mp4'
// First frame of the clip: identical to what the video shows at scroll 0, so the
// reveal is invisible, and there is never a blank rectangle while it loads.
const POSTER_SRC = '/hero/hero-poster.jpg'
// The photograph the hero used before the video — the safety net if the video
// fails to load.
const FALLBACK_SRC =
  'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1920&q=80'

// Phones get the lighter encode; so does anyone asking to save data.
const pickSource = () => {
  const smallScreen = window.matchMedia('(max-width: 768px)').matches
  const saveData = navigator.connection?.saveData === true
  return smallScreen || saveData ? MOBILE_SRC : DESKTOP_SRC
}

export default function HeroVideo({ videoRef, onStateChange, still }) {
  const [source] = useState(pickSource)
  const [state, setState] = useState('loading')

  useEffect(() => {
    if (still) return
    const video = videoRef.current
    if (!video) return

    let reported = false
    const report = (next) => {
      if (reported) return
      reported = true
      setState(next)
      onStateChange?.(next)
    }

    // HAVE_FUTURE_DATA: enough decoded data to render the frames we scrub to.
    const checkReady = () => {
      if (video.readyState >= 3) report('ready')
    }
    const onError = () => report('failed')

    video.addEventListener('canplay', checkReady)
    video.addEventListener('loadeddata', checkReady)
    video.addEventListener('error', onError)
    checkReady() // already buffered (cache / fast start)?

    // On a very slow connection, do not hold the hero on the loading treatment
    // forever: reveal once metadata is in and let buffering catch up.
    const watchdog = window.setTimeout(() => report(video.readyState >= 1 ? 'ready' : 'failed'), 12000)

    return () => {
      window.clearTimeout(watchdog)
      video.removeEventListener('canplay', checkReady)
      video.removeEventListener('loadeddata', checkReady)
      video.removeEventListener('error', onError)
    }
  }, [still, videoRef, onStateChange])

  return (
    <>
      <img
        src={state === 'failed' ? FALLBACK_SRC : POSTER_SRC}
        alt="Horizon Properties — modern architecture at dusk"
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!still && (
        // Never autoplayed, never looped, no controls: the scroll position is
        // the only thing that moves this playhead.
        <video
          ref={videoRef}
          src={source}
          poster={POSTER_SRC}
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-luxury ${
            state === 'ready' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {state === 'loading' && !still && (
        <div className="absolute inset-x-0 bottom-24 flex justify-center" aria-hidden="true">
          <div className="relative h-px w-24 overflow-hidden bg-ivory/25">
            <span className="hero-load-sweep absolute inset-y-0 left-0 w-8 bg-gold" />
          </div>
        </div>
      )}
    </>
  )
}
