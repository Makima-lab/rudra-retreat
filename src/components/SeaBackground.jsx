import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const SEA_PHOTO =
  'https://images.unsplash.com/photo-1745874864678-f464940bb513?auto=format&fit=crop&w=2400&q=80'

export default function SeaBackground({ className = '', strength = 100 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, strength])

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          backgroundImage: `url(${SEA_PHOTO})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          top: '-10%',
          height: '120%',
        }}
        className="absolute inset-x-0"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,27,46,0.82) 0%, rgba(31,27,46,0.45) 32%, rgba(31,27,46,0.55) 68%, #1F1B2E 100%)',
        }}
      />
      <div
        className="absolute left-1/2 top-[56%] h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-35"
        style={{ background: 'radial-gradient(circle, #E8B98A 0%, #C9A24B 30%, transparent 65%)' }}
      />
    </div>
  )
}
