import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-mosque-dark via-mosque-primary to-mosque-dark" />
      
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 5l15 10v20l-15 10-15-10V15z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* Mosque icon */}
        <div className="flex justify-center mb-6">
          <svg className="w-20 h-20 text-mosque-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4 7v15h16V7l-8-5zm0 2.5L18 8v12H6V8l6-3.5zM12 9a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          مسجد نور
        </h1>
        <p className="text-lg md:text-xl text-mosque-cream/90 mb-8 leading-relaxed">
          مرکز عبادی، آموزشی و فرهنگی — مکانی برای نیایش، یادگیری و اجتماع مؤمنان
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#prayers" className="btn-primary">
            اوقات نماز
          </a>
          <a
            href="#activities"
            className="border-2 border-mosque-accent text-mosque-accent px-6 py-3 rounded-xl font-medium hover:bg-mosque-accent hover:text-mosque-dark transition-colors"
          >
            فعالیت‌ها
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-mosque-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
