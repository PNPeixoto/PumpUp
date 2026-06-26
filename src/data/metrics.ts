import type { Metric } from '@/types'

/**
 * Métricas de prova social.
 * ATENÇÃO: valores são PLACEHOLDERS editáveis pelo cliente.
 * Em produção, alimentar via CMS/props com números reais e auditáveis.
 */
export const METRICS: readonly Metric[] = [
  { id: 'faturamento', value: '+318%', label: 'de faturamento médio' },
  { id: 'midia', value: 'R$ 50K+', label: 'em mídia gerenciada' },
  { id: 'roas', value: '10.2x', label: 'de ROAS médio' },
]
