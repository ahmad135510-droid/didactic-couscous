// Visit-request API — creates Google Calendar events in the owner's calendar.
//
// The property-detail "درخواست بازدید" flow POSTs here with the visitor's
// chosen date/time and contact details; this service inserts a 1-hour event
// into the calendar identified by GOOGLE_CALENDAR_ID, authenticated as a
// Google service account (GOOGLE_CLIENT_EMAIL + GOOGLE_PRIVATE_KEY).
//
// The private key never reaches the browser — that is why this runs server-side.
// Without credentials the service still boots; /api/visit-requests returns 503
// with a clear message so the frontend can show "اتصال تقویم پیکربندی نشده".

import express from 'express'
import cors from 'cors'
import { google } from 'googleapis'

const app = express()
app.use(express.json())

// In dev the Vite proxy makes /api same-origin, so CORS isn't exercised.
// For production (frontend on a different origin) set CORS_ALLOW_ORIGIN.
const allowedOrigins = (process.env.CORS_ALLOW_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
app.use(cors(allowedOrigins.length ? { origin: allowedOrigins } : undefined))

const PORT = process.env.PORT || 8000
const VISIT_TZ = process.env.VISIT_TIMEZONE || 'Asia/Tehran'

function getCredentials() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  // The private key arrives with literal "\n"; restore real newlines.
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n')
  if (!clientEmail || !privateKey) return null
  return { client_email: clientEmail, private_key: privateKey }
}

const pad = (n) => String(n).padStart(2, '0')

// Build a wall-clock ISO string (no offset) for the visit timezone; Google
// applies the timeZone field to it. We add 1 hour arithmetically so the end
// stays in the same timezone regardless of the server's own TZ.
function buildTimes(date, time) {
  const [y, m, d] = date.split('-').map(Number)
  const [hh, mm] = time.split(':').map(Number)
  if (!y || !m || !d || isNaN(hh) || isNaN(mm)) return null
  let endH = hh + 1
  let endY = y, endM = m, endD = d
  if (endH >= 24) {
    endH -= 24
    const nd = new Date(y, m - 1, d + 1)
    endY = nd.getFullYear()
    endM = nd.getMonth() + 1
    endD = nd.getDate()
  }
  return {
    start: `${y}-${pad(m)}-${pad(d)}T${pad(hh)}:${pad(mm)}:00`,
    end: `${endY}-${pad(endM)}-${pad(endD)}T${pad(endH)}:${pad(mm)}:00`,
  }
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, calendarConfigured: !!getCredentials(), timezone: VISIT_TZ })
})

app.post('/api/visit-requests', async (req, res) => {
  try {
    const {
      name, phone, email, date, time, notes,
      propertyName, propertyLocation, propertyId,
    } = req.body || {}

    if (!name || !phone || !date || !time) {
      return res.status(400).json({ ok: false, error: 'نام، شماره تماس، تاریخ و زمان الزامی هستند.' })
    }

    const creds = getCredentials()
    if (!creds) {
      return res.status(503).json({ ok: false, error: 'اتصال تقویم گوگل پیکربندی نشده است.' })
    }
    const calendarId = process.env.GOOGLE_CALENDAR_ID
    if (!calendarId) {
      return res.status(503).json({ ok: false, error: 'شناسه تقویم گوگل تنظیم نشده است.' })
    }

    const times = buildTimes(date, time)
    if (!times) {
      return res.status(400).json({ ok: false, error: 'تاریخ یا زمان نامعتبر است.' })
    }

    const auth = new google.auth.JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: ['https://www.googleapis.com/auth/calendar.events'],
    })
    const calendar = google.calendar({ version: 'v3', auth })

    const description = [
      `بازدید ملک: ${propertyName || propertyId || '—'}`,
      propertyLocation ? `موقعیت: ${propertyLocation}` : '',
      `بازدیدکننده: ${name}`,
      `تلفن: ${phone}`,
      email ? `ایمیل: ${email}` : '',
      notes ? `یادداشت: ${notes}` : '',
    ].filter(Boolean).join('\n')

    const event = {
      summary: `بازدید ملک — ${propertyName || propertyId || 'ملک'}`,
      location: propertyLocation || '',
      description,
      start: { dateTime: times.start, timeZone: VISIT_TZ },
      end: { dateTime: times.end, timeZone: VISIT_TZ },
      reminders: { useDefault: true },
    }

    const created = await calendar.events.insert({
      calendarId,
      resource: event,
      sendUpdates: 'none',
    })

    return res.json({ ok: true, eventId: created.data.id, htmlLink: created.data.htmlLink })
  } catch (err) {
    console.error('visit-request error:', err && err.message)
    const code = (err && err.code) || 500
    const status = code >= 400 && code < 600 ? code : 500
    return res.status(status).json({ ok: false, error: (err && err.message) || 'خطای ناشناخته' })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`visit-api listening on 0.0.0.0:${PORT} (tz=${VISIT_TZ})`)
})
