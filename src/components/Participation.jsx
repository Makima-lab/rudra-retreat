import Reveal from './Reveal'
import SeaBackground from './SeaBackground'
import { participation, telegramLink } from '../content'

export default function Participation() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      <SeaBackground strength={80} />

      <div className="relative">
        <Reveal>
          <h2 className="font-serif text-4xl font-medium text-cream sm:text-5xl">
            {participation.title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-xl font-sans text-base leading-loose text-cream/60 sm:text-lg">
            {participation.text}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-14 inline-block rounded-full border border-gold/50 px-10 py-4 font-sans text-sm tracking-[0.08em] text-cream transition-all duration-500 ease-out hover:border-gold hover:shadow-[0_0_36px_-4px_rgba(201,162,75,0.55)]"
          >
            <span className="absolute inset-0 rounded-full bg-gold/0 transition-colors duration-500 ease-out group-hover:bg-gold/10" />
            <span className="relative">{participation.cta}</span>
          </a>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-8 font-sans text-xs text-cream/35">{participation.smallNote}</p>
        </Reveal>
      </div>
    </section>
  )
}
