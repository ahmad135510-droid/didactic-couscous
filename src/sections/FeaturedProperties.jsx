import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import PropertyCarousel from '../components/PropertyCarousel.jsx'
import { properties } from '../data/properties.js'

export default function FeaturedProperties() {
  const { ref, isVisible } = useScrollAnimation()
  const featured = properties.filter((p) => p.featured)
  const carouselItems = featured.length >= 3 ? featured : properties.slice(0, 6)

  return (
    <section ref={ref} className="py-20 md:py-30 bg-warmgray">
      <div className="container-lux">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 fade-up ${isVisible ? 'is-visible' : ''}`}>
          <span className="section-label">ویژه</span>
          <h2 className="section-title mt-4">املاک ویژه</h2>
          <p className="mt-4 text-base text-navy/50 max-w-xl mx-auto">
            گزیده‌ای از استثنایی‌ترین فهرست‌های ما — از خانه‌های با معماری شاخص تا فرصت‌های ممتاز سرمایه‌گذاری.
          </p>
        </div>

        {/* Carousel */}
        <div className={`fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <PropertyCarousel properties={carouselItems} />
        </div>

        {/* View all link */}
        <div className={`text-center mt-12 fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <Link to="/properties" className="btn-outline group">
            مشاهده همه املاک
            <ArrowLeft size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
