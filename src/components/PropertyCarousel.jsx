import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PropertyCard from './PropertyCard.jsx'

// Embla reads the writing direction from the container, so in the RTL document
// "previous" moves towards the start of the list (the right-hand side) — hence
// the arrows point opposite to the LTR version.
export default function PropertyCarousel({ properties: items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: items.length > 3,
      dragFree: false,
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })]
  )
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateButtons = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    updateButtons()
    emblaApi.on('select', updateButtons)
    emblaApi.on('reInit', updateButtons)
    return () => {
      emblaApi.off('select', updateButtons)
      emblaApi.off('reInit', updateButtons)
    }
  }, [emblaApi, updateButtons])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative">
      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 md:gap-6">
          {items.map((property) => (
            <div
              key={property.id}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
            >
              <PropertyCard property={property} variant="carousel" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={scrollPrev}
          disabled={!canPrev}
          aria-label="املاک قبلی"
          className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy transition-all duration-300 hover:bg-navy hover:text-ivory hover:border-navy disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-navy disabled:hover:border-navy/20"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canNext}
          aria-label="املاک بعدی"
          className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center text-navy transition-all duration-300 hover:bg-navy hover:text-ivory hover:border-navy disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-navy disabled:hover:border-navy/20"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
