import { useFlags, useMotionEnabled } from '@/lib/flags'

type GlowColor = 'orange' | 'violet'

interface GlowProps {
  color: GlowColor
  /** Diâmetro em px. */
  size?: number
  className?: string
}

const COLORS: Record<GlowColor, string> = {
  orange: 'rgba(255,106,31,.45)',
  violet: 'rgba(99,54,232,.45)',
}

/**
 * Mancha de luz radial usada como atmosfera de fundo.
 * É puramente decorativa (aria-hidden) e some quando a flag `glow` está off.
 * A pulsação respeita a flag `motion` / prefers-reduced-motion.
 */
export function Glow({ color, size = 420, className }: GlowProps) {
  const { glow } = useFlags()
  const animate = useMotionEnabled()
  if (!glow) return null

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${animate ? 'animate-glow' : 'opacity-60'} ${className ?? ''}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${COLORS[color]} 0%, transparent 70%)`,
      }}
    />
  )
}
