import { Link } from 'react-router-dom'
import { ArrowLeft, Home, TrendingUp, Camera, Compass, Calculator, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { services } from '../data/services.js'

const iconMap = { Home, TrendingUp, Camera, Compass, Calculator, MapPin }

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-30 bg-ivory">
      <div className="container-lux">
        {/* Header */}
        <div className={`max-w-2xl mb-12 md:mb-16 fade-up ${isVisible ? 'is-visible' : ''}`}>
          <span className="section-label">خدمات ما</span>
          <h2 className="section-title mt-4">کار ما چیست</h2>
          <p className="mt-4 text-base text-navy/50">
            خدمات جامع املاک، طراحی‌شده برای مشتریان سخت‌پسندی که در هر گام انتظار بهترین‌ها را دارند.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10 rounded-xl2 overflow-hidden">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <div
                key={service.id}
                className={`group bg-ivory p-8 md:p-10 transition-all duration-500 ease-luxury hover:bg-warmgray fade-up ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg border border-gold/30 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/5">
                  <Icon size={22} strokeWidth={1.5} className="text-gold-dark" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-sm text-navy/50 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-gold-dark hover:text-navy transition-colors duration-300"
                >
                  بیشتر بدانید
                  <ArrowLeft size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
