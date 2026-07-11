// Золотой орнаментальный разделитель: тонкие линии с ромбом по центру.
export default function GoldDivider({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60 sm:w-24" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-glow to-gold shadow-[0_0_10px_-1px_rgba(201,162,75,0.7)]" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60 sm:w-24" />
    </div>
  )
}
