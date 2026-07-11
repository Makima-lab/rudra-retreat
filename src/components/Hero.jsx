import { motion } from 'framer-motion'
import SeaBackground from './SeaBackground'
import { hero, telegramLink } from '../content'

const easeOut = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <SeaBackground />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeOut }}
        className="relative font-sans text-[11px] tracking-[0.4em] text-gold uppercase sm:text-xs"
      >
        {hero.subtitle}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: easeOut }}
        className="relative mt-8 max-w-4xl font-serif text-[2.75rem] font-medium leading-[1.15] text-cream sm:text-7xl lg:text-[5.5rem] lg:leading-[1.1]"
      >
        {hero.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease: easeOut }}
        className="relative mt-10 font-sans text-base tracking-wide text-cream/60 sm:text-lg"
      >
        {hero.dates}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: easeOut }}
        className="relative mt-3 font-sans text-sm text-cream/40"
      >
        {hero.note}
      </motion.p>

      <motion.a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: easeOut }}
        className="group relative mt-14 inline-block rounded-full border border-gold/50 px-10 py-4 font-sans text-sm tracking-[0.08em] text-cream transition-all duration-500 ease-out hover:border-gold hover:shadow-[0_0_36px_-4px_rgba(201,162,75,0.55)]"
      >
        <span className="absolute inset-0 rounded-full bg-gold/0 transition-colors duration-500 ease-out group-hover:bg-gold/10" />
        <span className="relative">{hero.cta}</span>
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-cream/30"
      >
        <span className="h-12 w-px bg-gradient-to-b from-transparent via-cream/30 to-transparent" />
      </motion.div>
    </section>
  )
}
