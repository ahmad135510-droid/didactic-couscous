import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-[60vh] flex items-center">
      <div className="container-lux text-center">
        <div className="text-8xl font-bold text-navy/10">404</div>
        <h1 className="text-3xl font-bold text-navy mt-4">Page Not Found</h1>
        <p className="mt-3 text-navy/50 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8 group">
          <Home size={16} strokeWidth={1.5} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
