import Reveal from './Reveal'
import GoldMotif from './GoldMotif'
import GoldDivider from './GoldDivider'
import { consultations, retreatPhone, telegramLink } from '../content'

export default function Consultations() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-deep/25 px-6 py-32 sm:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #C9A24B 0%, transparent 60%)' }}
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <GoldMotif className="mb-7" />
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            {consultations.eyebrow}
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-cream sm:text-5xl">
            {consultations.title}
          </h2>
          <GoldDivider className="mt-8" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 font-sans text-base leading-loose text-cream/60 sm:text-lg">
            {consultations.text}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-cream/45">
            {consultations.note}
          </p>
        </Reveal>

        <Reveal delay={0.42} className="flex flex-col items-center">
          <a
            href={`tel:${retreatPhone.tel}`}
            className="group relative mt-12 inline-block rounded-full border border-gold/50 px-10 py-4 font-sans text-sm tracking-[0.08em] text-cream transition-all duration-500 ease-out hover:border-gold hover:shadow-[0_0_36px_-4px_rgba(201,162,75,0.55)]"
          >
            <span className="absolute inset-0 rounded-full bg-gold/0 transition-colors duration-500 ease-out group-hover:bg-gold/10" />
            <span className="relative">{consultations.cta}</span>
          </a>
          <div className="mt-6 flex flex-col items-center gap-1 font-sans text-sm text-cream/55 sm:flex-row sm:gap-3">
            <a
              href={`tel:${retreatPhone.tel}`}
              className="font-serif text-xl text-gold transition-colors duration-300 hover:text-glow"
            >
              {retreatPhone.display}
            </a>
            <span className="hidden text-cream/25 sm:inline">·</span>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gold"
            >
              Telegram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
