import type { ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  /** Mostra um bullet laranja brilhante à esquerda. */
  bullet?: boolean
  className?: string
}

/** Rótulo em formato de pílula (usado como eyebrow). */
export function Pill({ children, bullet, className }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill border border-hairline bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft ${className ?? ''}`}
    >
      {bullet && (
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_10px_2px_rgba(255,106,31,.7)]"
        />
      )}
      {children}
    </span>
  )
}
