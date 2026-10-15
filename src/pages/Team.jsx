import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { teamMembers } from '../data/team.js'
import CTA from '../sections/CTA.jsx'

export default function Team() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury architecture"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative h-full container-lux flex flex-col items-center justify-center text-center">
          <span className="section-label text-gold-light">Our Team</span>
          <h1 className="text-section font-bold text-ivory mt-4">Meet the Experts</h1>
          <p className="mt-4 text-base text-ivory/70 max-w-xl">
            Dedicated professionals committed to delivering exceptional results.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section ref={ref} className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={member.id}
                className={`group fade-up ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="relative image-zoom rounded-xl2 overflow-hidden aspect-[3/4] mb-5">
                  <img
                    src={member.photo}
                    alt={`${member.name} — ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className="w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center text-navy hover:bg-gold transition-colors duration-300">
                      <Mail size={15} strokeWidth={1.5} />
                    </a>
                    <a href={`tel:${member.phone}`} aria-label={`Call ${member.name}`} className="w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center text-navy hover:bg-gold transition-colors duration-300">
                      <Phone size={15} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                <p className="text-sm text-gold-dark mt-1">{member.role}</p>
                <p className="text-sm text-navy/50 mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
