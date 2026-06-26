import type { Variants } from 'framer-motion'

/**
 * Variantes de entrada em scroll, reutilizadas por todas as seções.
 * Centralizar aqui mantém o "timing" da página consistente.
 *
 * O respeito a prefers-reduced-motion é tratado no componente <Reveal />
 * (lib/useReducedMotion), que simplesmente não anima quando o usuário pede.
 */

/** Sobe e aparece. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1] },
  },
}

/** Container que escalona (stagger) a entrada dos filhos. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Filho de um container com stagger. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.6, 0.35, 1] },
  },
}

/** Barra do gráfico "crescendo" de baixo para cima. */
export const growBar: Variants = {
  hidden: { scaleY: 0 },
  show: (custom: number) => ({
    scaleY: 1,
    transition: { duration: 0.7, ease: [0.21, 0.6, 0.35, 1], delay: custom * 0.08 },
  }),
}
