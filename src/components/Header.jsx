import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const navLinks = [
  { label: 'خانه', path: '/' },
  { label: 'املاک', path: '/properties' },
  { label: 'درباره ما', path: '/about' },
  { label: 'خدمات', path: '/services' },
  { label: 'تیم', path: '/team' },
  { label: 'تماس', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // On non-home pages, always show solid header
  const solid = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        solid
          ? 'bg-ivory/95 backdrop-blur-md border-b border-gold/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <Link to="/" aria-label="صفحه اصلی املاک هورایزن">
          <Logo variant={solid ? 'dark' : 'light'} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    solid ? (active ? 'text-navy' : 'text-navy/60 hover:text-navy') : active ? 'text-ivory' : 'text-ivory/70 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 start-0 h-px bg-gold transition-all duration-300 ease-luxury ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Phone button (desktop) */}
        <a
          href="tel:+15552467890"
          className={`hidden lg:inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 ${
            solid
              ? 'border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory'
              : 'border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10'
          }`}
        >
          <Phone size={15} strokeWidth={1.5} />
          <span dir="ltr">(555) 246-7890</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -me-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.5} className={solid ? 'text-navy' : 'text-ivory'} />
          ) : (
            <Menu size={24} strokeWidth={1.5} className={solid ? 'text-navy' : 'text-ivory'} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-luxury ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-ivory border-t border-gold/20 px-6 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-3 text-base font-medium border-b border-navy/5 transition-colors ${
                      active ? 'text-gold-dark' : 'text-navy/70 hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <a
            href="tel:+15552467890"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-navy/30 px-5 py-3 text-sm font-medium text-navy"
          >
            <Phone size={16} strokeWidth={1.5} />
            <span dir="ltr">(555) 246-7890</span>
          </a>
        </div>
      </div>
    </header>
  )
}
