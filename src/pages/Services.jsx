import { Link } from 'react-router-dom'
import { ArrowRight, Home, TrendingUp, Camera, Compass, Calculator, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { services } from '../data/services.js'
import CTA from '../sections/CTA.jsx'

const iconMap = { Home, TrendingUp, Camera, Compass, Calculator, MapPin }
const heroImg = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80'

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="Luxury architecture" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative h-full container-lux flex flex-col items-center justify-center text-center">
          <span className="section-label text-gold-light">Our Services</span>
          <h1 className="text-section font-bold text-ivory mt-4">What We Do</h1>
          <p className="mt-4 text-base text-ivory/70 max-w-xl">Comprehensive real estate services for discerning clients.</p>
        </div>
      </section>

      {/* Services */}
      <section ref={ref} className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="space-y-16 md:space-y-20">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Home
              const reversed = i % 2 === 1
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    reversed ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={`fade-up ${isVisible ? 'is-visible' : ''} lg:[direction:ltr]`}>
                    <div className="w-14 h-14 rounded-lg border border-gold/30 flex items-center justify-center mb-6">
                      <Icon size={26} strokeWidth={1.5} className="text-gold-dark" />
                    </div>
                    <span className="text-xs font-medium text-gold-dark tracking-wider">0{i + 1}</span>
                    <h2 className="text-2xl font-bold text-navy mt-2">{service.title}</h2>
                    <p className="mt-4 text-base text-navy/60 leading-relaxed">{service.description}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-gold-dark hover:text-navy transition-colors group">
                      Learn More
                      <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className={`fade-up ${isVisible ? 'is-visible' : ''} lg:[direction:ltr]`} style={{ transitionDelay: '0.1s' }}>
                    <div className="image-zoom rounded-xl2 overflow-hidden aspect-[16/10]">
                      <img
                        src={`https://images.unsplash.com/photo-${['1580587771525-78b9dba3b914', '1706808849780-7a04fbac83ef', '1600596542815-ffad4c1539a9', '1613977257363-707ba9348227', '1613490493576-7fde63acd811', '1670589953882-b94c9cb380f5'][i % 6]}?auto=format&fit=crop&w=1000&q=80`}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
