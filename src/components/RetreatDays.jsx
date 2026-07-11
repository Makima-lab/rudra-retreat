import Reveal from './Reveal'
import GoldMotif from './GoldMotif'
import GoldDivider from './GoldDivider'
import { retreatDays } from '../content'

export default function RetreatDays() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center bg-night px-6 py-32 sm:py-40">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal className="flex flex-col items-center text-center">
          <GoldMotif className="mb-7" />
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            {retreatDays.eyebrow}
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-cream sm:text-5xl">
            {retreatDays.title}
          </h2>
          <GoldDivider className="mt-8" />
        </Reveal>

        <div className="mt-16 space-y-px">
          {retreatDays.items.map((item, i) => (
            <Reveal key={item.date} delay={i * 0.12}>
              <div className="group grid grid-cols-1 gap-2 border-t border-cream/10 py-7 transition-colors duration-500 hover:border-gold/40 sm:grid-cols-[220px_1fr] sm:gap-8 sm:py-8">
                <span className="font-serif text-xl text-gold/80 sm:text-2xl">
                  {item.date}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-cream">
                    {item.label}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-cream/55 sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
