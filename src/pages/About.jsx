import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Eye, Heart, Award } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { whyChooseHorizon } from '../data/services.js'
import CTA from '../sections/CTA.jsx'

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Every transaction guided by honesty and full transparency.' },
  { icon: Eye, title: 'Expertise', desc: 'Decades of combined experience in luxury real estate markets.' },
  { icon: Heart, title: 'Client First', desc: 'Your goals and satisfaction drive everything we do.' },
  { icon: Award, title: 'Excellence', desc: 'A relentless commitment to delivering exceptional results.' },
]

const aboutImg = 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
const aboutImg2 = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={aboutImg} alt="Modern luxury architecture" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative h-full container-lux flex flex-col items-center justify-center text-center">
          <span className="section-label text-gold-light">About Us</span>
          <h1 className="text-section font-bold text-ivory mt-4">Our Story</h1>
        </div>
      </section>

      {/* Main content */}
      <section ref={ref} className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title mt-4">A Legacy of Trust</h2>
              <div className="mt-6 space-y-4 text-base text-navy/60 leading-relaxed">
                <p>Founded on the principle that buying or selling a home should be an extraordinary experience, Horizon Properties has grown into one of the most respected names in luxury real estate.</p>
                <p>Our advisors don't just transact — they guide, educate, and advocate. We believe that every property tells a story, and every client deserves a partner who understands theirs.</p>
                <p>From architecturally significant homes to strategic investment portfolios, we bring precision, discretion, and care to every relationship.</p>
              </div>
              <Link to="/contact" className="btn-primary mt-8 group">
                Work With Us
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
              <div className="image-zoom rounded-xl2 overflow-hidden aspect-[4/3]">
                <img src={aboutImg2} alt="Luxury modern home" loading="lazy" className="w-full h-full object-cover" />
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
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-sm text-ivory/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="text-center mb-12 md:mb-16">
            <span className="section-label">Our Values</span>
            <h2 className="section-title mt-4">What Drives Us</h2>
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
