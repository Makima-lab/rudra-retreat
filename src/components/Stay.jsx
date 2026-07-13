import Reveal from './Reveal'
import GoldMotif from './GoldMotif'
import GoldDivider from './GoldDivider'
import { stay, stayContact, hotelUrl } from '../content'

export default function Stay() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-night px-6 py-32 sm:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #C9A24B 0%, transparent 60%)' }}
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <GoldMotif className="mb-7" />
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            {stay.eyebrow}
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-cream sm:text-5xl">
            {stay.title}
          </h2>
          <GoldDivider className="mt-8" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 font-sans text-base leading-loose text-cream/60 sm:text-lg">
            {stay.text}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-cream/45">
            {stay.note}
          </p>
        </Reveal>

        <Reveal delay={0.42} className="flex flex-col items-center">
          <a
            href={`tel:${stayContact.tel}`}
            className="group relative mt-12 inline-block rounded-full border border-gold/50 px-10 py-4 font-sans text-sm tracking-[0.08em] text-cream transition-all duration-500 ease-out hover:border-gold hover:shadow-[0_0_36px_-4px_rgba(201,162,75,0.55)]"
          >
            <span className="absolute inset-0 rounded-full bg-gold/0 transition-colors duration-500 ease-out group-hover:bg-gold/10" />
            <span className="relative">{stay.cta}</span>
          </a>
          <a
            href={`tel:${stayContact.tel}`}
            className="mt-5 font-serif text-2xl text-gold transition-colors duration-300 hover:text-glow"
          >
            {stayContact.display}
          </a>
          <a
            href={hotelUrl}
            className="group mt-6 inline-flex items-center gap-2 font-sans text-sm tracking-wide text-cream/60 transition-colors duration-300 hover:text-gold"
          >
            <span className="border-b border-cream/20 pb-0.5 transition-colors duration-300 group-hover:border-gold">
              {stay.hotelLabel}
            </span>
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <span className="mt-2 font-sans text-xs tracking-wide text-cream/40">
            {hotelUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </Reveal>
      </div>
    </section>
  )
}
