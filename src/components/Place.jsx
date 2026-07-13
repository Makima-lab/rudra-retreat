import Reveal from './Reveal'
import GoldMotif from './GoldMotif'
import GoldDivider from './GoldDivider'
import VideoBackground from './VideoBackground'
import { place } from '../content'

export default function Place() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-night px-6 py-32 sm:py-40">
      <VideoBackground src="place.mp4" poster="place-poster.jpg" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <GoldMotif className="mb-7" />
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            {place.eyebrow}
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-cream sm:text-5xl">
            {place.title}
          </h2>
          <GoldDivider className="mt-8" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 font-sans text-base leading-loose text-cream/55 sm:text-lg">
            {place.text}
          </p>
        </Reveal>
        {place.link && (
          <Reveal delay={0.25} className="mt-8 flex flex-col items-center gap-2">
            <a
              href={place.link.url}
              className="group inline-flex items-center gap-2 font-sans text-sm tracking-wide text-gold transition-colors duration-300 hover:text-glow"
            >
              <span className="border-b border-gold/40 pb-0.5 transition-colors duration-300 group-hover:border-glow">
                {place.link.label}
              </span>
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <span className="font-sans text-xs tracking-wide text-cream/40">
              {place.link.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </span>
          </Reveal>
        )}
        {place.note && (
          <Reveal delay={0.35}>
            <p className="mt-10 font-sans text-xs text-cream/35">{place.note}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
