import { Wordmark } from './primitives/Wordmark'
import { SITE, agendarConsultoria } from '@/lib/config'

const NAV_LINKS = [
  { href: '#a-pump-up', label: 'A Pump Up' },
  { href: '#metodo', label: 'Método' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#dados', label: 'Dados' },
]

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-footer">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Marca + tagline */}
        <div className="flex flex-col gap-4">
          <Wordmark gradientId="footer-logo-grad" />
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            {SITE.slogan} Marketing, vendas e IA para crescimento explosivo
            sustentável.
          </p>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé — navegação">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-mute">
            Navegação
          </h2>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-mute">
            Contato
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <button
                onClick={agendarConsultoria}
                className="rounded-md text-ink-soft transition-colors hover:text-ink"
              >
                Consultoria gratuita
              </button>
            </li>
            <li>
              <a
                href={SITE.youtubeUrl}
                className="rounded-md text-ink-soft transition-colors hover:text-ink"
              >
                {SITE.youtube}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-ink-soft transition-colors hover:text-ink"
              >
                {SITE.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-ink-mute sm:flex-row sm:px-8">
          <p>© 2026 {SITE.brand}. Todos os direitos reservados.</p>
          <p className="font-medium">Erre rápido, erre barato.</p>
        </div>
      </div>
    </footer>
  )
}
