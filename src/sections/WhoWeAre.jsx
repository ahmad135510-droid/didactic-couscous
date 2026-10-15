import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpLeft } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const mainImg = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80'
const secondaryImg = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'

export default function WhoWeAre() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-30 bg-ivory">
      <div className="container-lux">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="section-label">درباره ما</span>
            <h2 className="section-title mt-4">ما چه کسانی هستیم</h2>
            <p className="mt-6 text-base md:text-lg text-navy/60 leading-relaxed max-w-lg">
              در املاک هورایزن، مردم را با خانه‌های استثنایی و سرمایه‌گذاری‌های هوشمند پیوند می‌زنیم. صداقت، شفافیت و رضایت مشتری، جانِ هر کاری است که انجام می‌دهیم.
            </p>
            <p className="mt-4 text-base text-navy/50 leading-relaxed max-w-lg">
              تیم مشاوران باتجربه ما دهه‌ها تجربه در املاک لوکس را با خود دارد و تضمین می‌کند هر معامله با دقت، محرمانگی و توجه انجام شود.
            </p>
            <Link to="/about" className="btn-primary mt-8 group">
              بیشتر بدانید
              <ArrowLeft size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>

          {/* Image composition */}
          <div className={`relative fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="grid grid-cols-5 gap-4">
              {/* Main image */}
              <div className="col-span-3 image-zoom rounded-xl2 overflow-hidden aspect-[4/5]">
                <img src={mainImg} alt="خانه لوکس مدرن با استخر" loading="lazy" className="w-full h-full object-cover" />
              </div>
              {/* Secondary image */}
              <div className="col-span-2 image-zoom rounded-xl2 overflow-hidden aspect-[3/4] mt-12">
                <img src={secondaryImg} alt="نمای بیرونی خانه مدرن" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Circular arrow button overlapping */}
            <button
              aria-label="مشاهده املاک بیشتر"
              className="absolute end-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-navy flex items-center justify-center text-ivory shadow-xl transition-all duration-300 hover:bg-gold hover:text-navy hover:scale-110"
            >
              <ArrowUpLeft size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
