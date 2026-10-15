import { Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Maximize, ArrowUpRight } from 'lucide-react'
import FavoriteButton from './FavoriteButton.jsx'

export default function PropertyCard({ property, variant = 'default' }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="group block"
    >
      <article className={`card-lux ${variant === 'carousel' ? 'min-w-0' : ''}`}>
        {/* Image */}
        <div className="relative image-zoom aspect-[4/3] overflow-hidden">
          <img
            src={property.image}
            alt={`${property.name} — ${property.location}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

          {/* Favorite button */}
          <div className="absolute top-4 right-4 z-10">
            <FavoriteButton propertyId={property.id} />
          </div>

          {/* Price badge */}
          <div className="absolute bottom-4 left-4">
            <span className="text-lg font-semibold text-ivory drop-shadow-md">
              {property.priceLabel}
            </span>
          </div>

          {/* Type badge */}
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-medium uppercase tracking-wider text-ivory bg-navy/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-ivory/20">
              {property.type}
            </span>
          </div>

          {/* Arrow icon on hover */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-ivory/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight size={18} strokeWidth={1.5} className="text-navy" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="text-lg font-semibold text-navy leading-tight group-hover:text-gold-dark transition-colors duration-300">
            {property.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-2 text-sm text-navy/50">
            <MapPin size={14} strokeWidth={1.5} className="shrink-0" />
            <span>{property.location}</span>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-navy/5">
            <div className="flex items-center gap-1.5 text-sm text-navy/60">
              <Bed size={16} strokeWidth={1.5} />
              <span>{property.beds}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-navy/60">
              <Bath size={16} strokeWidth={1.5} />
              <span>{property.baths}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-navy/60">
              <Maximize size={16} strokeWidth={1.5} />
              <span>{property.sqft.toLocaleString()} ft²</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
