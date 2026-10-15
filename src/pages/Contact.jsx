import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { faNumber } from '../utils/format.js'

const heroImg = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'استعلام عمومی', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', subject: 'استعلام عمومی', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={heroImg} alt="تماس با املاک هورایزن" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative h-full container-lux flex flex-col items-center justify-center text-center">
          <span className="section-label text-gold-light">با ما در تماس باشید</span>
          <h1 className="text-section font-serif font-bold text-ivory mt-4">تماس با ما</h1>
        </div>
      </section>

      {/* Contact section */}
      <section ref={ref} className="py-20 md:py-30 bg-ivory">
        <div className="container-lux">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`}>
              <span className="section-label">تماس</span>
              <h2 className="section-title mt-4">گفت‌وگو را شروع کنیم</h2>
              <p className="mt-4 text-base text-navy/60 leading-relaxed max-w-md">
                اگر قصد خرید، فروش یا سرمایه‌گذاری دارید، تیم ما آماده کمک است. با ما تماس بگیرید و در کمتر از ۲۴ ساعت پاسخ می‌گیرید.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-warmgray flex items-center justify-center shrink-0">
                    <Phone size={18} strokeWidth={1.5} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">تلفن</div>
                    <a href="tel:+15552467890" dir="ltr" className="text-sm text-navy/50 hover:text-navy transition-colors">(555) 246-7890</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-warmgray flex items-center justify-center shrink-0">
                    <Mail size={18} strokeWidth={1.5} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">ایمیل</div>
                    <a href="mailto:hello@horizonproperties.com" dir="ltr" className="text-sm text-navy/50 hover:text-navy transition-colors">hello@horizonproperties.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-warmgray flex items-center justify-center shrink-0">
                    <MapPin size={18} strokeWidth={1.5} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy">دفتر</div>
                    <p className="text-sm text-navy/50">خیابان آرکیتکچرال ۱۲۰۰، واحد ۵۰۰<br />آستین، تگزاس ۷۸۷۰۱</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 pt-8 border-t border-navy/5">
                <h3 className="text-sm font-medium text-navy mb-3">ساعات کاری</h3>
                <div className="space-y-1.5 text-sm text-navy/50">
                  <div className="flex justify-between"><span>دوشنبه تا جمعه</span><span>{faNumber(9)}:۰۰ تا {faNumber(18)}:۰۰</span></div>
                  <div className="flex justify-between"><span>شنبه</span><span>{faNumber(10)}:۰۰ تا {faNumber(16)}:۰۰</span></div>
                  <div className="flex justify-between"><span>یکشنبه</span><span>با تعیین وقت قبلی</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <form onSubmit={handleSubmit} className="bg-warmgray rounded-xl2 p-6 md:p-8 space-y-5">
                {sent && (
                  <div className="flex items-center gap-2 text-sm font-medium text-gold-dark bg-gold/10 rounded-lg px-4 py-3">
                    <Check size={16} strokeWidth={2} />
                    سپاسگزاریم! در کمتر از ۲۴ ساعت با شما تماس می‌گیریم.
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">نام و نام خانوادگی</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" placeholder="نام شما" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">ایمیل</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" placeholder="name@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">تلفن</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory" placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">موضوع</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold transition-colors bg-ivory cursor-pointer">
                    <option>استعلام عمومی</option>
                    <option>خرید ملک</option>
                    <option>فروش ملک</option>
                    <option>مشاوره سرمایه‌گذاری</option>
                    <option>درخواست بازدید</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">پیام</label>
                  <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory resize-none" placeholder="چطور می‌توانیم کمک کنیم؟" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center group">
                  <Send size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
