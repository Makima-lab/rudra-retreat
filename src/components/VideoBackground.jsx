const base = import.meta.env.BASE_URL

export default function VideoBackground({ src, poster, className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={`${base}${src}`}
        poster={poster ? `${base}${poster}` : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #1F1B2E 0%, rgba(31,27,46,0.55) 26%, rgba(31,27,46,0.6) 72%, #1F1B2E 100%)',
        }}
      />
    </div>
  )
}
