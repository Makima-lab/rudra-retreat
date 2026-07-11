import Reveal from './Reveal'
import { corridor } from '../content'

export default function Corridor() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center bg-night px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            Коридор затмений
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.2] text-cream sm:text-5xl">
            {corridor.title}
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-10 font-sans text-base leading-loose text-cream/55 sm:text-lg">
            {corridor.text}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
