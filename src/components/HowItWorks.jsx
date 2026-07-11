import Reveal from './Reveal'
import GoldMotif from './GoldMotif'
import GoldDivider from './GoldDivider'
import { howItWorks } from '../content'

export default function HowItWorks() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center bg-deep/25 px-6 py-32 sm:py-40">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="flex flex-col items-center text-center">
          <GoldMotif className="mb-7" />
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            {howItWorks.eyebrow}
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-cream sm:text-5xl">
            {howItWorks.title}
          </h2>
          <GoldDivider className="mt-8" />
        </Reveal>

        <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-3">
          {howItWorks.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.15}>
              <div className="relative pt-8 text-left">
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/30 to-transparent" />
                <span className="font-serif text-3xl text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-medium text-cream">
                  {card.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-cream/55">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
