import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowLeft } from 'lucide-react'
import Logo from './Logo.jsx'
import { useState } from 'react'
import { faYear } from '../utils/format.js'

const navLinks = [
  { label: 'خانه', path: '/' },
  { label: 'املاک', path: '/properties' },
  { label: 'درباره ما', path: '/about' },
  { label: 'خدمات', path: '/services' },
  { label: 'تیم', path: '/team' },
  { label: 'تماس', path: '/contact' },
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
              پیوند دادن مردم با خانه‌های استثنایی و سرمایه‌گذاری‌های هوشمند. صداقت، شفافیت و رضایت مشتری در قلب هر کاری است که انجام می‌دهیم.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="شبکه‌های اجتماعی"
                  className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gold mb-5">دسترسی سریع</h3>
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
            <h3 className="text-sm font-semibold text-gold mb-5">تماس</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ivory/60">
                <Phone size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <span dir="ltr">(555) 246-7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/60">
                <Mail size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <span dir="ltr">hello@horizonproperties.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/60">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
                <span>خیابان آرکیتکچرال ۱۲۰۰، واحد ۵۰۰<br />آستین، تگزاس ۷۸۷۰۱</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gold mb-5">خبرنامه</h3>
            <p className="text-sm text-ivory/60 mb-4">برای اطلاع از فهرست‌های تازه و تحلیل‌های بازار عضو شوید.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="نشانی ایمیل شما"
                required
                aria-label="نشانی ایمیل"
                className="bg-ivory/5 border border-ivory/20 rounded-lg px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-medium text-navy hover:bg-gold-light transition-colors duration-300"
              >
                {subscribed ? 'عضو شدید!' : 'عضویت'}
                {!subscribed && <ArrowLeft size={15} strokeWidth={1.5} />}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">© {faYear()} املاک هورایزن. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors">سیاست حفظ حریم خصوصی</a>
            <a href="#" className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
