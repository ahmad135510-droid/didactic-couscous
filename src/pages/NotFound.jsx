import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-[60vh] flex items-center">
      <div className="container-lux text-center">
        <div className="text-8xl font-serif font-bold text-navy/10">۴۰۴</div>
        <h1 className="text-3xl font-bold text-navy mt-4">صفحه یافت نشد</h1>
        <p className="mt-3 text-navy/50 max-w-md mx-auto">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابه‌جا شده است.
        </p>
        <Link to="/" className="btn-primary mt-8 group">
          <Home size={16} strokeWidth={1.5} />
          بازگشت به خانه
        </Link>
      </div>
    </div>
  )
}
