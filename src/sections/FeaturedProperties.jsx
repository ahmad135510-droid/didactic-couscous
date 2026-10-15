import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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
          <span className="section-label">Featured</span>
          <h2 className="section-title mt-4">Featured Properties</h2>
          <p className="mt-4 text-base text-navy/50 max-w-xl mx-auto">
            A curated selection of our most exceptional listings — from architecturally significant homes to prime investment opportunities.
          </p>
        </div>

        {/* Carousel */}
        <div className={`fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <PropertyCarousel properties={carouselItems} />
        </div>

        {/* View all link */}
        <div className={`text-center mt-12 fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <Link to="/properties" className="btn-outline group">
            View All Properties
            <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
