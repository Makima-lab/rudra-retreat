import Reveal from './Reveal'
import { place } from '../content'

export default function Place() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-deep/25 px-6 py-32 sm:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #C9A24B 0%, transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-serif text-4xl font-medium text-cream sm:text-5xl">
            {place.title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 font-sans text-base leading-loose text-cream/55 sm:text-lg">
            {place.text}
          </p>
        </Reveal>
        {place.note && (
          <Reveal delay={0.3}>
            <p className="mt-10 font-sans text-xs text-cream/35">{place.note}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
