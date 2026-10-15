import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-navy text-ivory">
      <div className="container-lux py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-ivory/60 max-w-xs">
              Connecting people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction at the heart of everything we do.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-ivory/60 hover:text-ivory transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ivory/60">
                <Phone size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <span>(555) 246-7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/60">
                <Mail size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <span>hello@horizonproperties.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/60">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <span>1200 Architectural Way, Suite 500<br />Austin, Texas 78701</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-5">Newsletter</h3>
            <p className="text-sm text-ivory/60 mb-4">Subscribe for new listings and market insights.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                aria-label="Email address"
                className="bg-ivory/5 border border-ivory/20 rounded-lg px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-medium text-navy hover:bg-gold-light transition-colors duration-300"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                {!subscribed && <ArrowRight size={15} strokeWidth={1.5} />}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
