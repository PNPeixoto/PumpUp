import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMotionEnabled } from '@/lib/flags'
import { fadeUp } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  /** Variante a aplicar. Default: fadeUp. */
  variants?: Variants
  /** Atrasa o início (segundos). */
  delay?: number
  className?: string
  /** Tag HTML semântica a renderizar. Default: div. */
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Anima a entrada do conteúdo quando ele entra na viewport.
 * Se as animações estiverem desligadas (flag motion off OU prefers-reduced-motion),
 * renderiza o conteúdo estático, já visível — sem nunca "esconder" nada.
 */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  as = 'div',
}: RevealProps) {
  const animate = useMotionEnabled()

  if (!animate) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
