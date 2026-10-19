import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-mosque-dark text-mosque-cream/70 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg className="w-8 h-8 text-mosque-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4 7v15h16V7l-8-5zm0 2.5L18 8v12H6V8l6-3.5zM12 9a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          <span className="text-lg font-bold text-white">مسجد نور</span>
        </div>
        <p className="text-sm mb-4">
          «وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا»
        </p>
        <div className="flex justify-center gap-6 mb-4 text-sm">
          <a href="#about" className="hover:text-mosque-accent transition-colors">درباره ما</a>
          <a href="#activities" className="hover:text-mosque-accent transition-colors">فعالیت‌ها</a>
          <a href="#events" className="hover:text-mosque-accent transition-colors">رویدادها</a>
          <a href="#contact" className="hover:text-mosque-accent transition-colors">تماس</a>
        </div>
        <div className="text-xs text-mosque-cream/40 pt-4 border-t border-white/10">
          © ۱۴۰۴ تمامی حقوق برای مسجد نور محفوظ است
        </div>
      </div>
    </footer>
  )
}
