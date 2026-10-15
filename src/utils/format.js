/* Persian number helpers.
 *
 * Every number the visitor reads (prices, areas, room counts, counters, stats)
 * is rendered with Persian digits and the standard Persian separators. Latin
 * digits are kept only for phone numbers and e-mail addresses, which are shown
 * inside `dir="ltr"` spans so the bidi algorithm cannot mirror their brackets. */

const numberFormatter = new Intl.NumberFormat('fa-IR')

/** 1250 → «۱٬۲۵۰» */
export const faNumber = (value) => numberFormatter.format(value)

/** Converts Latin digits inside any string to Persian digits. */
export const faDigits = (value) => String(value).replace(/[0-9]/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[digit])

// Areas are stored in square feet; Persian listings are read in square metres.
const SQFT_PER_SQM = 10.7639

/** 6200 → 576 (rounded square metres) */
export const sqm = (sqft) => Math.round(sqft / SQFT_PER_SQM)

/** 6200 → «۵۷۶ متر مربع» */
export const faArea = (sqft) => `${faNumber(sqm(sqft))} متر مربع`

/** Current year in the Persian calendar, e.g. «۱۴۰۵». */
export const faYear = () => new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date())
