import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">درباره مسجد</h2>
        <p className="section-subtitle">آشنایی با تاریخ و رسالت مسجد نور</p>

        <div className="card text-right leading-relaxed space-y-4">
          <p>
            مسجد نور در سال ۱۳۸۵ خورشیدی با هدف ایجاد مرکزی برای عبادت، آموزش و
            فعالیت‌های فرهنگی در منطقه تأسیس شد. این مسجد با مساحتی بالغ بر ۸۰۰
            متر مربع، شامل شبستان اصلی، شبستان بانوان، کتابخانه و سالن اجتماعات
            است.
          </p>
          <p>
            رسالت ما در مسجد نور، ایجاد فضایی معنوی برای تقرب به خداوند متعال،
            آموزش معارف اسلامی به تمام سنین، و خدمت به محرومان منطقه است. ما
            معتقدیم مسجد نباید تنها محل عبادت باشد، بلکه باید قلب تپنده جامعه
            باشد.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { num: '۸۰۰', label: 'متر مربع مساحت' },
              { num: '۵۰۰', label: 'نفر ظرفیت شبستان' },
              { num: '۱۲', label: 'کلاس آموزشی' },
              { num: '۱۸', label: 'سال فعالیت' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-mosque-primary">{stat.num}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
