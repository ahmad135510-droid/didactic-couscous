import React from 'react'

const activities = [
  {
    title: 'کلاس‌های قرآن',
    desc: 'برگزاری کلاس‌های آموزش قرآن کریم برای کودکان، نوجوانان و بزرگسالان در سطوح مختلف',
    icon: 'M12 6.253v13m0-13C10.137 5.197 8.262 4.75 6.5 4.75c-1.763 0-3.638.447-5.5 1.503v13C2.862 18.697 4.737 19.25 6.5 19.25c1.763 0 3.638-.553 5.5-1.503m0-13C13.863 5.197 15.738 4.75 17.5 4.75c1.763 0 3.638.447 5.5 1.503v13c-1.862-1.056-3.737-1.503-5.5-1.503-1.763 0-3.638.447-5.5 1.503',
  },
  {
    title: 'نماز جماعت',
    desc: 'برگزاری نمازهای یومیه به جماعت به امامت امام جماعت مسجد در اوقات شرعی',
    icon: 'M12 2L4 7v15h16V7l-8-5z',
  },
  {
    title: 'کلاس‌های احکام',
    desc: 'آموزش مسائل شرعی و احکام اسلامی به صورت دوره‌ای برای آقایان و بانوان',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
  },
  {
    title: 'صندوق قرض‌الحسنه',
    desc: 'تأمین نیازهای مالی مؤمنان از طریق قرض‌الحسنه بدون بهره با ضمانت معتبر',
    icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'کمک به نیازمندان',
    desc: 'پخش بسته‌های غذایی و کمک‌های نقدی میان خانواده‌های محروم منطقه',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    title: 'مراسمات مذهبی',
    desc: 'برگزاری مراسمات ولادت و شهادت ائمه اطهار (ع) و محافل روضه‌خوانی',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title">فعالیت‌های مسجد</h2>
        <p className="section-subtitle">خدمات و برنامه‌های فرهنگی، آموزشی و اجتماعی</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div key={activity.title} className="card text-right">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-mosque-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-mosque-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={activity.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-mosque-dark mb-1">{activity.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{activity.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
