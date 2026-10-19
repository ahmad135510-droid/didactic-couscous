import { useState } from 'react'
import { X, Calendar, Clock, Check, Loader2 } from 'lucide-react'

// Visit-request modal: collects a date/time + visitor contact, then POSTs to
// /api/visit-requests (proxied to the visit-api service in dev), which creates
// a Google Calendar event in the owner's calendar.
export default function VisitRequestForm({ property, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', notes: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      const res = await fetch('/api/visit-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          date: form.date,
          time: form.time,
          notes: form.notes,
          propertyName: property.name,
          propertyLocation: property.location,
          propertyId: property.id,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setError(data.error || 'ثبت بازدید ناموفق بود.')
      }
    } catch (err) {
      setStatus('error')
      setError('اتصال به سرور برقرار نشد. دوباره تلاش کنید.')
    }
  }

  const inputCls = 'w-full rounded-lg border border-navy/15 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold transition-colors bg-ivory'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-lg bg-ivory rounded-xl2 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-navy/10">
          <div className="flex items-center gap-2">
            <Calendar size={18} strokeWidth={1.5} className="text-gold-dark" />
            <h2 className="text-lg font-bold text-navy">درخواست بازدید</h2>
          </div>
          <button onClick={onClose} aria-label="بستن" className="w-9 h-9 rounded-full flex items-center justify-center text-navy/50 hover:bg-navy/5 hover:text-navy transition-colors">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
              <Check size={28} strokeWidth={2} className="text-gold-dark" />
            </div>
            <h3 className="text-lg font-bold text-navy">بازدید ثبت شد</h3>
            <p className="mt-2 text-sm text-navy/60 leading-relaxed">
              زمان بازدید در تقویم ما ثبت شد. تیم ما به‌زودی برای تأیید با شما تماس می‌گیرد.
            </p>
            <button onClick={onClose} className="btn-primary mt-6 px-6">بستن</button>
          </div>
        ) : (
          <form onSubmit={submit} className="p-5 space-y-4">
            <p className="text-xs text-navy/50 bg-warmgray rounded-lg px-4 py-3">
              {property.name} — {property.location}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vr-name" className="block text-sm font-medium text-navy mb-2">نام و نام خانوادگی</label>
                <input id="vr-name" type="text" required value={form.name} onChange={set('name')} className={inputCls} placeholder="نام شما" />
              </div>
              <div>
                <label htmlFor="vr-phone" className="block text-sm font-medium text-navy mb-2">شماره تماس</label>
                <input id="vr-phone" type="tel" required value={form.phone} onChange={set('phone')} className={inputCls} placeholder="۰۹۱۲۳۴۵۶۷۸۹" />
              </div>
            </div>

            <div>
              <label htmlFor="vr-email" className="block text-sm font-medium text-navy mb-2">ایمیل (اختیاری)</label>
              <input id="vr-email" type="email" value={form.email} onChange={set('email')} className={inputCls} placeholder="name@example.com" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="vr-date" className="block text-sm font-medium text-navy mb-2">تاریخ بازدید</label>
                <input id="vr-date" type="date" required value={form.date} onChange={set('date')} className={inputCls} />
              </div>
              <div>
                <label htmlFor="vr-time" className="block text-sm font-medium text-navy mb-2">ساعت بازدید</label>
                <input id="vr-time" type="time" required value={form.time} onChange={set('time')} className={inputCls} />
              </div>
            </div>

            <div>
              <label htmlFor="vr-notes" className="block text-sm font-medium text-navy mb-2">یادداشت (اختیاری)</label>
              <textarea id="vr-notes" rows={3} value={form.notes} onChange={set('notes')} className={`${inputCls} resize-none`} placeholder="توضیحات شما..." />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">{error}</p>
            )}

            <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'submitting' ? (
                <Loader2 size={16} strokeWidth={1.5} className="animate-spin" />
              ) : (
                <Clock size={16} strokeWidth={1.5} />
              )}
              {status === 'submitting' ? 'در حال ثبت...' : 'ثبت درخواست بازدید'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
