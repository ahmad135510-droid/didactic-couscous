import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroImg = 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image with subtle scale animation */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Modern luxury villa at dusk with infinity pool"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/60" />

      {/* Content */}
      <div className="relative h-full container-lux flex flex-col items-center justify-center text-center">
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-ivory/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [-12, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 w-px h-12 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}
