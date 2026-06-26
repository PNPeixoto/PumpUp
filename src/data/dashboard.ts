import type { ChartBar, KpiTile } from '@/types'

/**
 * Dados MOCK do dashboard de demonstração.
 * Em produção, substituir por uma chamada à API (ex.: GET /metrics/overview).
 * A UI já consome estes arrays — basta trocar a origem dos dados.
 */

export const DASHBOARD_HEADER = {
  title: 'Faturamento · últimos 30 dias',
  amount: 'R$ 42.105,07',
  delta: '▲ 41,2%',
} as const

/** 7 barras (alturas relativas 0–100) com tendência de subida. */
export const CHART_BARS: readonly ChartBar[] = [
  { height: 38, label: 'Sem 1' },
  { height: 46, label: 'Sem 2' },
  { height: 41, label: 'Sem 3' },
  { height: 58, label: 'Sem 4' },
  { height: 67, label: 'Sem 5' },
  { height: 82, label: 'Sem 6' },
  { height: 100, label: 'Sem 7' },
]

export const KPI_TILES: readonly KpiTile[] = [
  { id: 'roas', label: 'ROAS', value: '10.2x' },
  { id: 'cac', label: 'CAC', value: 'R$ 98' },
  { id: 'ltv', label: 'LTV', value: 'R$ 4300' },
]
