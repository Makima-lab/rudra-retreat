import Reveal from './Reveal'
import { howItWorks } from '../content'

export default function HowItWorks() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center bg-deep/25 px-6 py-32 sm:py-40">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-medium text-cream sm:text-5xl">
            {howItWorks.title}
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-3">
          {howItWorks.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.15}>
              <div className="border-t border-gold/25 pt-8 text-left">
                <span className="font-sans text-xs tracking-[0.3em] text-gold/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-medium text-cream">
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
