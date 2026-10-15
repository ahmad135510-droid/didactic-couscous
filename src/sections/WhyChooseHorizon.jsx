import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { whyChooseHorizon } from '../data/services.js'

export default function WhyChooseHorizon() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-30 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #C5A059 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-lux relative">
        <div className={`text-center mb-12 md:mb-16 fade-up ${isVisible ? 'is-visible' : ''}`}>
          <span className="section-label text-gold-light">Why Horizon</span>
          <h2 className="text-section font-bold text-ivory mt-4">A Track Record of Excellence</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {whyChooseHorizon.map((stat, i) => (
            <div
              key={i}
              className={`text-center fade-up ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-sm text-ivory/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
