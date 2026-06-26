import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  /** id para âncoras de navegação. */
  id?: string
  /** Fundo alternado (#0c0c11) em vez do base. */
  alt?: boolean
  /** Rótulo acessível da landmark (vira aria-label). */
  label?: string
  className?: string
}

/**
 * Bloco de página. Centraliza largura máxima, padding vertical e
 * a alternância de fundo entre seções — para os componentes não
 * repetirem essas medidas.
 */
export function Section({ children, id, alt, label, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`relative overflow-hidden ${alt ? 'bg-surface-alt' : 'bg-base'} ${className ?? ''}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        {children}
      </div>
    </section>
  )
}
