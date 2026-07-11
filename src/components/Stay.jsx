import Reveal from './Reveal'
import { stay, stayLink } from '../content'

export default function Stay() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-night px-6 py-32 sm:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #C9A24B 0%, transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            {stay.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mt-6 font-serif text-4xl font-medium text-cream sm:text-5xl">
            {stay.title}
          </h2>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-10 font-sans text-base leading-loose text-cream/60 sm:text-lg">
            {stay.text}
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-cream/45">
            {stay.note}
          </p>
        </Reveal>
        <Reveal delay={0.44}>
          <a
            href={stayLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-14 inline-block rounded-full border border-gold/50 px-10 py-4 font-sans text-sm tracking-[0.08em] text-cream transition-all duration-500 ease-out hover:border-gold hover:shadow-[0_0_36px_-4px_rgba(201,162,75,0.55)]"
          >
            <span className="absolute inset-0 rounded-full bg-gold/0 transition-colors duration-500 ease-out group-hover:bg-gold/10" />
            <span className="relative">{stay.cta}</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
