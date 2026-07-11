import { footer } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-night px-6 py-16 text-center">
      <p className="font-serif text-lg text-cream/70">{footer.line}</p>
      <div className="mt-6 flex justify-center gap-8 font-sans text-sm text-cream/40">
        <a
          href={footer.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gold"
        >
          {footer.telegram.label}
        </a>
        <a
          href={footer.vk.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gold"
        >
          {footer.vk.label}
        </a>
      </div>
    </footer>
  )
}
