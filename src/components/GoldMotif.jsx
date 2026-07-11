// Тонкий золотой мотив «солнце в затмении» — фирменный знак секций.
const rays = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 * Math.PI) / 180
  return {
    x1: 22 + Math.cos(angle) * 12,
    y1: 22 + Math.sin(angle) * 12,
    x2: 22 + Math.cos(angle) * 17,
    y2: 22 + Math.sin(angle) * 17,
  }
})

export default function GoldMotif({ className = '' }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="goldMotif" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B98A" />
          <stop offset="100%" stopColor="#C9A24B" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="7.5" stroke="url(#goldMotif)" strokeWidth="1.1" />
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="url(#goldMotif)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={i % 2 === 0 ? 0.9 : 0.5}
        />
      ))}
    </svg>
  )
}
