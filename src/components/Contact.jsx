import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">تماس با ما</h2>
          <p className="section-subtitle">آدرس و راه‌های ارتباطی مسجد نور</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact info */}
          <div className="card text-right space-y-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mosque-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-mosque-dark mb-1">آدرس</h3>
                <p className="text-sm text-gray-600">تهران، خیابان ولیعصر، کوچه نور، پلاک ۱۲</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mosque-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="font-bold text-mosque-dark mb-1">تلفن</h3>
                <p className="text-sm text-gray-600" dir="ltr">۰۲۱-۸۸۱۲۳۴۵۶</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mosque-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-mosque-dark mb-1">ساعات کاری</h3>
                <p className="text-sm text-gray-600">همه روزه از یک ساعت قبل از اذان صبح تا یک ساعت بعد از نماز عشاء</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card text-right">
            <h3 className="font-bold text-mosque-dark mb-4">پیام خود را بفرستید</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mosque-primary focus:outline-none text-sm"
              />
              <input
                type="tel"
                placeholder="شماره تماس"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mosque-primary focus:outline-none text-sm"
              />
              <textarea
                rows={4}
                placeholder="متن پیام"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mosque-primary focus:outline-none text-sm resize-none"
              />
              <button type="submit" className="btn-primary w-full">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
