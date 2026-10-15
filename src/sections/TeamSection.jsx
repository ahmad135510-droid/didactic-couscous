import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { teamMembers } from '../data/team.js'

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-30 bg-ivory">
      <div className="container-lux">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 fade-up ${isVisible ? 'is-visible' : ''}`}>
          <span className="section-label">تیم ما</span>
          <h2 className="section-title mt-4">با متخصصان آشنا شوید</h2>
          <p className="mt-4 text-base text-navy/50 max-w-xl mx-auto">
            تیمی از متخصصان متعهد که برای هر مشتری نتایجی استثنایی به ارمغان می‌آورند.
          </p>
        </div>

        {/* Team grid */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Contact links on hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`ایمیل به ${member.name}`}
                    className="w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center text-navy hover:bg-gold transition-colors duration-300"
                  >
                    <Mail size={15} strokeWidth={1.5} />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    aria-label={`تماس با ${member.name}`}
                    className="w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center text-navy hover:bg-gold transition-colors duration-300"
                  >
                    <Phone size={15} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
              <p className="text-sm text-gold-dark mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className={`text-center mt-12 fade-up ${isVisible ? 'is-visible' : ''}`}>
          <Link to="/team" className="btn-outline group">
            مشاهده همه اعضای تیم
            <ArrowLeft size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
