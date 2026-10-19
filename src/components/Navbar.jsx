import React, { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'درباره مسجد' },
  { href: '#prayers', label: 'اوقات نماز' },
  { href: '#activities', label: 'فعالیت‌ها' },
  { href: '#events', label: 'رویدادها' },
  { href: '#contact', label: 'تماس' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-mosque-dark/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white">
            <svg className="w-8 h-8 text-mosque-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L4 7v15h16V7l-8-5zm0 2.5L18 8v12H6V8l6-3.5zM12 9a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="text-lg font-bold">مسجد نور</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-mosque-cream/80 hover:text-mosque-accent transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="منو"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-mosque-cream/80 hover:text-mosque-accent transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
