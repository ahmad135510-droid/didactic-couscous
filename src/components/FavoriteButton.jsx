import { Heart } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function FavoriteButton({ propertyId, className = '' }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(propertyId)

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(propertyId)
      }}
      aria-label={active ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
      aria-pressed={active}
      className={`flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm transition-all duration-300 ${
        active ? 'bg-gold/90 scale-110' : 'bg-navy/30 hover:bg-navy/50'
      } ${className}`}
    >
      <Heart
        size={18}
        strokeWidth={1.5}
        className={`transition-all duration-300 ${active ? 'text-navy fill-navy animate-pulse-once' : 'text-ivory'}`}
        fill={active ? '#0A192F' : 'none'}
      />
    </button>
  )
}
