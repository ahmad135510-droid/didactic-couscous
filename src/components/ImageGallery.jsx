import { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'

export default function ImageGallery({ images, altPrefix = 'Property' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!fullscreen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setFullscreen(false)
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [fullscreen, goNext, goPrev])

  return (
    <>
      {/* Main gallery */}
      <div className="space-y-3">
        {/* Main image */}
        <div className="relative rounded-xl2 overflow-hidden aspect-[16/10] group">
          <img
            src={images[activeIndex]}
            alt={`${altPrefix} — image ${activeIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          />

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/80 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-ivory transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/80 backdrop-blur-sm flex items-center justify-center text-navy hover:bg-ivory transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </>
          )}

          {/* Fullscreen button */}
          <button
            onClick={() => setFullscreen(true)}
            aria-label="View fullscreen"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-navy/40 backdrop-blur-sm flex items-center justify-center text-ivory hover:bg-navy/60 transition-all duration-300"
          >
            <Expand size={18} strokeWidth={1.5} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-navy/40 backdrop-blur-sm text-xs text-ivory font-medium">
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`flex-[0_0_100px] aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${
                  i === activeIndex
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-ivory'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${altPrefix} thumbnail ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen viewer */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setFullscreen(false)}
        >
          <button
            onClick={() => setFullscreen(false)}
            aria-label="Close fullscreen"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-ivory/20 transition-colors z-10"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <img
            src={images[activeIndex]}
            alt={`${altPrefix} — image ${activeIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                aria-label="Previous image"
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-ivory/20 transition-colors"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                aria-label="Next image"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ivory/10 flex items-center justify-center text-ivory hover:bg-ivory/20 transition-colors"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </>
          )}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-ivory/10 text-sm text-ivory font-medium">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
