import { Logo } from './Logo'

interface WordmarkProps {
  /** Tamanho do logo em px. */
  logoSize?: number
  className?: string
  gradientId?: string
}

/** Logo + texto "Pump Up MKT" (MKT em laranja). */
export function Wordmark({ logoSize = 32, className, gradientId }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <Logo size={logoSize} gradientId={gradientId} />
      <span className="font-display text-lg font-bold tracking-display text-ink">
        Pump Up <span className="text-brand-orange">MKT</span>
      </span>
    </span>
  )
}
