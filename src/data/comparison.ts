import type { ComparisonItem } from '@/types'

/** O que "os outros" entregam (coluna neutra, ícone ✕). */
export const COMPETITORS_DO: readonly ComparisonItem[] = [
  { id: 'c1', text: 'Tráfego pago avulso' },
  { id: 'c2', text: 'Redes sociais soltas' },
  { id: 'c3', text: 'Time de vendas sem processo' },
  { id: 'c4', text: 'Ponto de vendas isolado' },
  { id: 'c5', text: 'Oferta sem estratégia' },
]

/** O que nós entregamos (coluna com borda gradiente, ícone ✓). */
export const WE_DO: readonly ComparisonItem[] = [
  { id: 'w1', text: 'Funil de ponta a ponta' },
  { id: 'w2', text: 'Construção de produto e oferta' },
  { id: 'w3', text: 'Soluções em Automação + IA' },
  { id: 'w4', text: 'Estratégias de vendas on-line' },
  { id: 'w5', text: 'Gestão de fluxo de caixa' },
]
