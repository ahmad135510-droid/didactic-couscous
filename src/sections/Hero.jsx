import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo.jsx'
import { useScrollScrubVideo, usePrefersReducedMotion } from '../hooks/useScrollScrubVideo.js'

/* Scroll-scrubbed hero.
 *
 * The section is 300vh tall and the video viewport is pinned (sticky, top: 0)
 * inside it, so ~200vh of scrolling traverses the clip from its first frame to
 * its last. The video is never played: scroll progress is mapped onto
 * video.currentTime, both directions, and stops dead when the visitor stops.
 * Engine + encoding rules: src/hooks/useScrollScrubVideo.js */
const HERO_SCROLL_HEIGHT = '300vh'

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const copyRef = useRef(null)
  const hintRef = useRef(null)
  const [videoState, setVideoState] = useState('loading')

  // Pin and scrub, unless the visitor prefers reduced motion or the video is
  // unusable — then the hero is a plain full-height section over a still frame
  // and the rest of the site behaves exactly as before.
  const scrub = !reducedMotion && videoState !== 'failed'

  useScrollScrubVideo({ containerRef, videoRef, copyRef, hintRef, active: scrub })

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: scrub ? HERO_SCROLL_HEIGHT : '100vh' }}
    >
      {/* Pinned 3D viewport */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
        <HeroVideo videoRef={videoRef} onStateChange={setVideoState} still={reducedMotion} />

        {/* Barely-there scrim: enough for the copy to stay readable, light
            enough that the video keeps the frame. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy/45 via-navy/15 to-navy/55"
        />

        {/* Copy drifts away as the journey starts (scroll-driven, via ref) */}
        <div ref={copyRef} className="relative h-full will-change-[opacity,transform]">
          <div className="h-full container-lux flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-4xl"
            >
              <span className="section-label text-gold-light mb-6 block">
                Premium Real Estate
              </span>
              <h1 className="text-hero font-bold text-ivory text-balance">
                Discover Exceptional
                <br />
                Homes &amp; Investments
              </h1>
              <p className="mt-6 text-base md:text-lg text-ivory/80 leading-relaxed max-w-2xl mx-auto">
                Premium properties in prime locations. Find your dream home or the perfect investment with confidence.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/properties" className="btn-primary group">
                  Explore Properties
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-ivory/30 px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-ivory/10 hover:border-ivory/50"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint — the invitation to move the camera */}
        <div ref={hintRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="w-px h-12 bg-ivory/30 relative overflow-hidden">
              <motion.div
                animate={{ y: [-12, 48] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 w-px h-12 bg-gold"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
