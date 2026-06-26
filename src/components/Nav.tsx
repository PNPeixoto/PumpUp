import { useState } from 'react'
import { Wordmark } from './primitives/Wordmark'
import { Button } from './primitives/Button'
import { agendarConsultoria } from '@/lib/config'

interface NavLink {
  href: string
  label: string
}

const LINKS: readonly NavLink[] = [
  { href: '#a-pump-up', label: 'A Pump Up' },
  { href: '#metodo', label: 'Método' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#dados', label: 'Dados' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-base/70 backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8"
      >
        <a href="#topo" className="rounded-md" aria-label="Pump Up MKT — início">
          <Wordmark />
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button onClick={agendarConsultoria}>Consultoria gratuita</Button>
        </div>

        {/* Botão do menu — mobile */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {open ? '✕' : '☰'}
          </span>
        </button>
      </nav>

      {/* Menu — mobile */}
      {open && (
        <div
          id="menu-mobile"
          className="border-t border-hairline bg-base/95 px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-white/5 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <Button
              onClick={() => {
                setOpen(false)
                agendarConsultoria()
              }}
              className="w-full"
            >
              Consultoria gratuita
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
