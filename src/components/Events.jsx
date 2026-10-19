import React from 'react'

const events = [
  {
    day: '۲۵',
    month: 'مهر',
    title: 'مراسم میلاد حضرت رسول اکرم (ص)',
    time: 'ساعت ۱۸:۰۰',
    place: 'شبستان اصلی',
    desc: 'برگزاری مراسم جشن میلاد با سخنرانی، مداحی و پذیرایی',
  },
  {
    day: '۰۳',
    month: 'آبان',
    title: 'مسابقه قرآنی ویژه نوجوانان',
    time: 'ساعت ۱۶:۰۰',
    place: 'سالن اجتماعات',
    desc: 'مسابقه حفظ و قرائت قرآن کریم با جوایز نقدی و غیرنقدی',
  },
  {
    day: '۱۰',
    month: 'آبان',
    title: 'همایش خانواده مهدوی',
    time: 'ساعت ۱۷:۰۰',
    place: 'شبستان اصلی',
    desc: 'همایش فرهنگی با حضور خانواده‌ها و سخنرانی استاد محقق',
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 px-4 bg-mosque-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">رویدادهای پیش‌رو</h2>
          <p className="section-subtitle">برنامه‌های و مراسمات آینده مسجد</p>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <div key={i} className="card flex items-start gap-5 text-right">
              {/* Date */}
              <div className="flex-shrink-0 text-center bg-mosque-primary text-white rounded-xl px-4 py-3 min-w-[70px]">
                <div className="text-2xl font-bold">{event.day}</div>
                <div className="text-xs">{event.month}</div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-mosque-dark mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{event.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.place}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
