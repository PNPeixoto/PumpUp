import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react'
import { useReducedMotion } from 'framer-motion'

/** Flags de aparência expostas no nível da página. */
export interface SiteFlags {
  /** Glows ambientes (círculos com blur). */
  glow: boolean
  /** Textura de grão sobre toda a página. */
  grain: boolean
  /** Animações de entrada e pulsação. */
  motion: boolean
}

const DEFAULT_FLAGS: SiteFlags = {
  glow: true,
  grain: true,
  motion: true,
}

const FlagsContext = createContext<SiteFlags>(DEFAULT_FLAGS)

interface FlagsProviderProps {
  value?: Partial<SiteFlags>
  children: ReactNode
}

/** Provider que mescla flags recebidas com os defaults. */
export function FlagsProvider({ value, children }: FlagsProviderProps) {
  const merged = useMemo<SiteFlags>(
    () => ({ ...DEFAULT_FLAGS, ...value }),
    [value],
  )
  return <FlagsContext.Provider value={merged}>{children}</FlagsContext.Provider>
}

/** Lê as flags brutas. */
export function useFlags(): SiteFlags {
  return useContext(FlagsContext)
}

/**
 * Resposta final sobre "devo animar?".
 * Verdadeiro só se a flag `motion` estiver ligada E o usuário NÃO pedir
 * movimento reduzido no SO. Use isto em vez de ler a flag direto.
 */
export function useMotionEnabled(): boolean {
  const { motion } = useFlags()
  const prefersReduced = useReducedMotion()
  return motion && !prefersReduced
}
