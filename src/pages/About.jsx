import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Eye, Heart, Award } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { whyChooseHorizon } from '../data/services.js'
import CTA from '../sections/CTA.jsx'

const values = [
  { icon: Shield, title: 'صداقت', desc: 'هر معامله با راستی و شفافیت کامل هدایت می‌شود.' },
  { icon: Eye, title: 'تخصص', desc: 'دهه‌ها تجربه در بازار املاک لوکس.' },
  { icon: Heart, title: 'اولویت مشتری', desc: 'اهداف و رضایت شما، مسیر همه کارهای ما را تعیین می‌کند.' },
  { icon: Award, title: 'برتری', desc: 'تعهدی بی‌وقفه به ارائه نتایج استثنایی.' },
]

const aboutImg = 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
const aboutImg2 = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={aboutImg} alt="معماری لوکس مدرن" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative h-full container-lux flex flex-col items-center justify-center text-center">
          <span className="section-label text-gold-light">درباره ما</span>
          <h1 className="text-section font-serif font-bold text-ivory mt-4">داستان ما</h1>
        </div>
      </section>

      {/* Main content */}
      <section ref={ref} className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
              <span className="section-label">ما چه کسانی هستیم</span>
              <h2 className="section-title mt-4">میراثی از اعتماد</h2>
              <div className="mt-6 space-y-4 text-base text-navy/60 leading-relaxed">
                <p>املاک هورایزن با این باور بنیان گذاشته شد که خرید یا فروش خانه باید تجربه‌ای فوق‌العاده باشد؛ امروز یکی از معتبرترین نام‌ها در حوزه املاک لوکس است.</p>
                <p>مشاوران ما تنها معامله نمی‌کنند — راهنمایی می‌کنند، آموزش می‌دهند و در کنار شما می‌ایستند. باور داریم هر ملک داستانی دارد و هر مشتری شایسته همراهی است که داستان او را می‌فهمد.</p>
                <p>از خانه‌های با معماری شاخص تا پرتفوی‌های سرمایه‌گذاری راهبردی، دقت، محرمانگی و توجه را به هر رابطه می‌آوریم.</p>
              </div>
              <Link to="/contact" className="btn-primary mt-8 group">
                با ما همکاری کنید
                <ArrowLeft size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
              <div className="image-zoom rounded-xl2 overflow-hidden aspect-[4/3]">
                <img src={aboutImg2} alt="خانه مدرن لوکس" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="container-lux">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseHorizon.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-ivory/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-label">ارزش‌های ما</span>
            <h2 className="section-title mt-4">چه چیزی ما را پیش می‌برد</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="text-center p-8 rounded-xl2 bg-warmgray">
                  <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} strokeWidth={1.5} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{value.title}</h3>
                  <p className="text-sm text-navy/50 leading-relaxed">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
