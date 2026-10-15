import { Link } from 'react-router-dom'
import { ArrowRight, KeyRound } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 md:py-20 bg-ivory">
      <div className="container-lux">
        <div
          className={`relative rounded-[2rem] bg-warmgray px-6 py-10 md:px-12 md:py-14 fade-up ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-navy flex items-center justify-center shrink-0">
              <KeyRound size={28} strokeWidth={1.5} className="text-gold" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-navy">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="mt-2 text-base text-navy/50">
                Let our experts guide you to the right home or investment.
              </p>
            </div>

            {/* Button */}
            <Link to="/contact" className="btn-primary group shrink-0">
              Get in Touch
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
