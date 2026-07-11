import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-gold/40 via-gold to-glow"
    />
  )
}
