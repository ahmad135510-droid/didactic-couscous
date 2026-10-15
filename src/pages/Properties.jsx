import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X, MapPin } from 'lucide-react'
import PropertyCard from '../components/PropertyCard.jsx'
import { properties, propertyTypes, locations } from '../data/properties.js'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A to Z' },
]

export default function Properties() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [minBeds, setMinBeds] = useState(0)
  const [minBaths, setMinBaths] = useState(0)
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const priceRanges = [
    { value: 'all', label: 'Any Price', min: 0, max: Infinity },
    { value: 'under-3', label: 'Under $3M', min: 0, max: 3000000 },
    { value: '3-5', label: '$3M – $5M', min: 3000000, max: 5000000 },
    { value: 'over-5', label: 'Over $5M', min: 5000000, max: Infinity },
  ]

  const filtered = useMemo(() => {
    let result = [...properties]

    // Search
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
      )
    }

    // Location
    if (location) result = result.filter((p) => p.location === location)

    // Type
    if (type) result = result.filter((p) => p.type === type)

    // Beds
    if (minBeds > 0) result = result.filter((p) => p.beds >= minBeds)

    // Baths
    if (minBaths > 0) result = result.filter((p) => p.baths >= minBaths)

    // Price range
    const range = priceRanges.find((r) => r.value === priceRange)
    if (range && priceRange !== 'all') {
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return result
  }, [search, location, type, minBeds, minBaths, priceRange, sortBy])

  const activeFilters = [location, type, minBeds > 0 ? `${minBeds}+ beds` : '', minBaths > 0 ? `${minBaths}+ baths` : '', priceRange !== 'all' ? priceRanges.find((r) => r.value === priceRange)?.label : ''].filter(Boolean)

  const clearAll = () => {
    setSearch('')
    setLocation('')
    setType('')
    setMinBeds(0)
    setMinBaths(0)
    setPriceRange('all')
    setSortBy('featured')
  }

  return (
    <div className="pt-20">
      {/* Page header */}
      <section ref={ref} className="py-12 md:py-16 bg-ivory border-b border-navy/5">
        <div className="container-lux">
          <div className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="section-label">Browse</span>
            <h1 className="text-section font-bold text-navy mt-3">All Properties</h1>
            <p className="mt-3 text-base text-navy/50 max-w-xl">
              Explore our complete collection of premium properties across prime locations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 md:top-[72px] z-30 bg-ivory/95 backdrop-blur-md border-b border-navy/5 py-4">
        <div className="container-lux">
          {/* Search + sort row */}
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="relative flex-1">
              <Search size={18} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, location, or type..."
                aria-label="Search properties"
                className="w-full rounded-lg border border-navy/15 pl-11 pr-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort by"
                className="rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy bg-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 rounded-lg border border-navy/15 px-4 py-3 text-sm font-medium text-navy hover:border-navy transition-colors lg:hidden"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filters
              </button>
            </div>
          </div>

          {/* Filter controls — always visible on desktop, toggle on mobile */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block mt-3`}>
            <div className="flex flex-wrap gap-3">
              <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Filter by location" className="rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy bg-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer">
                <option value="">All Locations</option>
                {locations.map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
              </select>
              <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by type" className="rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy bg-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer">
                <option value="">All Types</option>
                {propertyTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
              <select value={minBeds} onChange={(e) => setMinBeds(Number(e.target.value))} aria-label="Minimum bedrooms" className="rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy bg-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer">
                <option value={0}>Any Beds</option>
                {[3, 4, 5, 6, 7].map((n) => (<option key={n} value={n}>{n}+ Beds</option>))}
              </select>
              <select value={minBaths} onChange={(e) => setMinBaths(Number(e.target.value))} aria-label="Minimum bathrooms" className="rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy bg-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer">
                <option value={0}>Any Baths</option>
                {[3, 4, 5, 6].map((n) => (<option key={n} value={n}>{n}+ Baths</option>))}
              </select>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} aria-label="Price range" className="rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy bg-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer">
                {priceRanges.map((r) => (<option key={r.value} value={r.value}>{r.label}</option>))}
              </select>
              {activeFilters.length > 0 && (
                <button onClick={clearAll} className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-navy/50 hover:text-navy transition-colors">
                  <X size={15} strokeWidth={1.5} />
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-16 bg-warmgray min-h-[50vh]">
        <div className="container-lux">
          <p className="text-sm text-navy/50 mb-6">
            {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
          </p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <MapPin size={40} strokeWidth={1} className="mx-auto text-navy/20 mb-4" />
              <h3 className="text-lg font-semibold text-navy">No properties found</h3>
              <p className="mt-2 text-sm text-navy/50">Try adjusting your filters or search terms.</p>
              <button onClick={clearAll} className="btn-outline mt-6">Clear All Filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
