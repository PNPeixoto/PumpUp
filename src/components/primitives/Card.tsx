import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  /** Usa borda com gradiente de marca + sombra (destaque). */
  highlight?: boolean
  className?: string
}

/** Superfície de card. Variante `highlight` ganha borda gradiente. */
export function Card({ children, highlight, className }: CardProps) {
  const base =
    'rounded-card-lg bg-card p-6 sm:p-8 backdrop-blur-sm transition-colors'
  const edge = highlight
    ? 'border-gradient shadow-[0_20px_60px_-20px_rgba(99,54,232,.4)]'
    : 'border border-hairline'

  return <div className={`${base} ${edge} ${className ?? ''}`}>{children}</div>
}
