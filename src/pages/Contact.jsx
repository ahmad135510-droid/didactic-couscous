import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const heroImg = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={heroImg} alt="Contact Horizon Properties" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative h-full container-lux flex flex-col items-center justify-center text-center">
          <span className="section-label text-gold-light">Get in Touch</span>
          <h1 className="text-section font-bold text-ivory mt-4">Contact Us</h1>
        </div>
      </section>

      {/* Contact section */}
      <section ref={ref} className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Info */}
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
              <span className="section-label">Contact</span>
              <h2 className="section-title mt-4">Let's Start a Conversation</h2>
              <p className="mt-4 text-base text-navy/60 leading-relaxed max-w-md">
                Whether you're looking to buy, sell, or invest, our team is ready to help. Reach out and we'll respond within 24 hours.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-warmgray flex items-center justify-center shrink-0">
                    <Phone size={18} strokeWidth={1.5} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">Phone</div>
                    <a href="tel:+15552467890" className="text-sm text-navy/50 hover:text-navy transition-colors">(555) 246-7890</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-warmgray flex items-center justify-center shrink-0">
                    <Mail size={18} strokeWidth={1.5} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">Email</div>
                    <a href="mailto:hello@horizonproperties.com" className="text-sm text-navy/50 hover:text-navy transition-colors">hello@horizonproperties.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-warmgray flex items-center justify-center shrink-0">
                    <MapPin size={18} strokeWidth={1.5} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">Office</div>
                    <p className="text-sm text-navy/50">1200 Architectural Way, Suite 500<br />Austin, Texas 78701</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 pt-8 border-t border-navy/5">
                <h3 className="text-sm font-medium text-navy mb-3">Office Hours</h3>
                <div className="space-y-1.5 text-sm text-navy/50">
                  <div className="flex justify-between"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>10:00 AM – 4:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>By appointment</span></div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <form onSubmit={handleSubmit} className="bg-warmgray rounded-xl2 p-6 md:p-8 space-y-5">
                {sent && (
                  <div className="flex items-center gap-2 text-sm font-medium text-gold-dark bg-gold/10 rounded-lg px-4 py-3">
                    <Check size={16} strokeWidth={2} />
                    Thank you! We'll be in touch within 24 hours.
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">Full Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">Phone</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold transition-colors bg-ivory cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Buying a Property</option>
                    <option>Selling a Property</option>
                    <option>Investment Consulting</option>
                    <option>Schedule a Viewing</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center group">
                  <Send size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
