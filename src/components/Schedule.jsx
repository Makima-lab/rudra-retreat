import Reveal from './Reveal'
import GoldMotif from './GoldMotif'
import GoldDivider from './GoldDivider'
import { schedule } from '../content'

export default function Schedule() {
  return (
    <section className="relative bg-night px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-xl">
        <Reveal className="flex flex-col items-center text-center">
          <GoldMotif className="mb-7" />
          <span className="font-sans text-[11px] tracking-[0.4em] text-gold uppercase">
            {schedule.eyebrow}
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium text-cream sm:text-5xl">
            {schedule.title}
          </h2>
          <GoldDivider className="mt-8" />
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent sm:left-[7px]" />
          <ul className="space-y-8">
            {schedule.items.map((item, i) => (
              <Reveal key={item.time} delay={Math.min(i * 0.05, 0.4)}>
                <li className="relative flex items-start gap-6 pl-8 sm:pl-10">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-glow to-gold shadow-[0_0_10px_-1px_rgba(201,162,75,0.8)] sm:h-3 sm:w-3" />
                  <span className="w-24 shrink-0 font-sans text-sm tracking-wide text-cream/45 sm:w-28 sm:text-base">
                    {item.time}
                  </span>
                  <span className="font-sans text-sm text-cream/70 sm:text-base">
                    {item.activity}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center font-sans text-xs italic text-cream/35">
            {schedule.caption}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
