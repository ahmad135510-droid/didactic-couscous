export default function Logo({ className = '', variant = 'light' }) {
  const textColor = variant === 'light' ? '#FAF9F6' : '#0A192F'
  const subColor = variant === 'light' ? 'rgba(250,249,246,0.6)' : 'rgba(10,25,47,0.55)'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Architectural house outline icon */}
        <path d="M4 13L14 5L24 13" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12V23H22V12" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 23V17H16V23" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="5" r="1" fill="#C5A059" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-[0.05em]" style={{ color: textColor }}>
          HORIZON
        </span>
        <span className="text-[9px] font-medium tracking-[0.25em] uppercase" style={{ color: subColor }}>
          Properties
        </span>
      </span>
    </span>
  )
}
