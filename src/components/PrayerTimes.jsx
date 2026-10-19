import React from 'react'

const prayers = [
  { key: 'fajr', label: 'نماز صبح', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { key: 'dhuhr', label: 'نماز ظهر', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { key: 'asr', label: 'نماز عصر', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { key: 'maghrib', label: 'نماز مغرب', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
  { key: 'isha', label: 'نماز عشاء', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
]

export default function PrayerTimes({ times }) {
  return (
    <section id="prayers" className="py-20 px-4 bg-mosque-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">اوقات نماز روزانه</h2>
        <p className="text-sm text-mosque-cream/60 mb-8">به اوقات شرعی شهر تهران</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {prayers.map((prayer) => (
            <div
              key={prayer.key}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-mosque-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={prayer.icon} />
                </svg>
              </div>
              <div className="text-sm text-mosque-cream/80 mb-1">{prayer.label}</div>
              <div className="text-xl font-bold text-white">
                {times ? times[prayer.key] : '—'}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-mosque-cream/40 mt-6">
          * اوقات شرعی بر اساس شهر تهران نمایش داده می‌شود
        </p>
      </div>
    </section>
  )
}
