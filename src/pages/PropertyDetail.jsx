import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Maximize, Check, Phone, Mail, Calendar, ArrowLeft, Heart, Share2 } from 'lucide-react'
import { getPropertyById, getSimilarProperties } from '../data/properties.js'
import { useFavorites } from '../context/FavoritesContext.jsx'
import ImageGallery from '../components/ImageGallery.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import FavoriteButton from '../components/FavoriteButton.jsx'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getPropertyById(id)
  const { isFavorite } = useFavorites()
  const [showContactForm, setShowContactForm] = useState(false)
  const [formSent, setFormSent] = useState(false)

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container-lux">
          <h1 className="text-2xl font-bold text-navy">Property not found</h1>
          <p className="mt-3 text-navy/50">This property may have been sold or removed.</p>
          <Link to="/properties" className="btn-primary mt-6">Back to Properties</Link>
        </div>
      </div>
    )
  }

  const similar = getSimilarProperties(id)
  const active = isFavorite(property.id)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSent(true)
    setTimeout(() => { setFormSent(false); setShowContactForm(false) }, 2500)
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-ivory border-b border-navy/5 py-4">
        <div className="container-lux flex items-center gap-2 text-sm text-navy/50">
          <Link to="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-navy transition-colors">Properties</Link>
          <span>/</span>
          <span className="text-navy truncate">{property.name}</span>
        </div>
      </div>

      {/* Gallery + Info */}
      <section className="py-8 md:py-12 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="lg:col-span-2">
              <ImageGallery images={property.gallery} altPrefix={property.name} />
            </div>

            {/* Info panel */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                {/* Type + favorite */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-gold-dark bg-gold/10 px-3 py-1.5 rounded-full">
                    {property.type}
                  </span>
                  <div className="flex gap-2">
                    <FavoriteButton propertyId={property.id} />
                    <button
                      aria-label="Share property"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/5 hover:bg-navy/10 transition-colors"
                    >
                      <Share2 size={18} strokeWidth={1.5} className="text-navy/60" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-navy leading-tight">{property.name}</h1>
                <div className="flex items-center gap-1.5 mt-2 text-sm text-navy/50">
                  <MapPin size={15} strokeWidth={1.5} />
                  <span>{property.location}</span>
                </div>

                {/* Price */}
                <div className="mt-5 pt-5 border-t border-navy/5">
                  <span className="text-3xl font-bold text-navy">{property.priceLabel}</span>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 rounded-xl bg-warmgray">
                    <Bed size={20} strokeWidth={1.5} className="mx-auto text-gold-dark mb-2" />
                    <div className="text-lg font-semibold text-navy">{property.beds}</div>
                    <div className="text-xs text-navy/50">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-warmgray">
                    <Bath size={20} strokeWidth={1.5} className="mx-auto text-gold-dark mb-2" />
                    <div className="text-lg font-semibold text-navy">{property.baths}</div>
                    <div className="text-xs text-navy/50">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-warmgray">
                    <Maximize size={20} strokeWidth={1.5} className="mx-auto text-gold-dark mb-2" />
                    <div className="text-lg font-semibold text-navy">{property.sqft.toLocaleString()}</div>
                    <div className="text-xs text-navy/50">Sq Ft</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="btn-primary w-full justify-center group"
                  >
                    <Phone size={16} strokeWidth={1.5} />
                    Contact Agent
                  </button>
                  <button className="btn-outline w-full justify-center">
                    <Calendar size={16} strokeWidth={1.5} />
                    Schedule a Viewing
                  </button>
                </div>

                {/* Contact form */}
                {showContactForm && (
                  <form onSubmit={handleFormSubmit} className="mt-4 p-5 rounded-xl2 border border-navy/10 bg-warmgray space-y-3">
                    {formSent ? (
                      <p className="text-sm text-gold-dark font-medium text-center py-4">
                        ✓ Thank you! We'll be in touch shortly.
                      </p>
                    ) : (
                      <>
                        <input type="text" placeholder="Your name" required aria-label="Your name" className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" />
                        <input type="email" placeholder="Your email" required aria-label="Your email" className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" />
                        <input type="tel" placeholder="Your phone" aria-label="Your phone" className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" />
                        <textarea placeholder="I'm interested in this property..." rows="3" aria-label="Message" className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory resize-none" />
                        <button type="submit" className="btn-primary w-full justify-center">Send Inquiry</button>
                      </>
                    )}
                  </form>
                )}

                {/* Agent card */}
                <div className="mt-6 p-5 rounded-xl2 border border-navy/10 flex items-center gap-4">
                  <img src={property.agent.photo} alt={property.agent.name} className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="text-sm font-semibold text-navy">{property.agent.name}</div>
                    <div className="text-xs text-navy/50">{property.agent.role}</div>
                    <div className="flex gap-3 mt-2">
                      <a href={`tel:${property.agent.phone}`} className="text-xs text-gold-dark hover:text-navy transition-colors flex items-center gap-1">
                        <Phone size={12} strokeWidth={1.5} /> Call
                      </a>
                      <a href={`mailto:${property.agent.email}`} className="text-xs text-gold-dark hover:text-navy transition-colors flex items-center gap-1">
                        <Mail size={12} strokeWidth={1.5} /> Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-12 md:py-16 bg-warmgray">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-navy mb-4">About This Property</h2>
              <p className="text-base text-navy/60 leading-relaxed">{property.description}</p>

              {/* Key features */}
              <h3 className="text-lg font-semibold text-navy mt-8 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-navy/70">
                    <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={2} className="text-gold-dark" />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-semibold text-navy mb-4">Amenities</h3>
              <ul className="space-y-3">
                {property.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-navy/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Similar properties */}
      {similar.length > 0 && (
        <section className="py-12 md:py-16 bg-ivory">
          <div className="container-lux">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-navy">Similar Properties</h2>
              <Link to="/properties" className="text-sm font-medium text-gold-dark hover:text-navy transition-colors flex items-center gap-1.5">
                View All <ArrowLeft size={14} strokeWidth={1.5} className="rotate-180" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-navy/10 px-4 py-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="text-lg font-bold text-navy">{property.priceLabel}</div>
          <div className="text-xs text-navy/50">{property.location}</div>
        </div>
        <button
          onClick={() => setShowContactForm(true)}
          className="btn-primary px-5 py-2.5 text-xs"
        >
          <Phone size={14} strokeWidth={1.5} />
          Contact
        </button>
      </div>
    </div>
  )
}
