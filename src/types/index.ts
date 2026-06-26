/** Cores de acento válidas (paradas do gradiente de marca). */
export type BrandAccent =
  | '#ff6a1f'
  | '#ff4a3f'
  | '#d23a8e'
  | '#8a37c4'
  | '#6336e8'

/** Uma etapa do funil do consumidor. */
export interface FunnelStage {
  /** Número exibido no badge (01–05). */
  readonly id: string
  /** Cor do estágio (barra, badge, citação). */
  readonly accent: BrandAccent
  /** Nome do estágio. Ex.: "Descoberta". */
  readonly name: string
  /** "Voz" do consumidor naquele estágio. Ex.: "Eu sei". */
  readonly voice: string
  /** O que o estágio representa. */
  readonly meaning: string
  /** Como o estágio acontece, na prática. */
  readonly howItHappens: readonly string[]
}

/** Métrica de prova social (número de destaque). */
export interface Metric {
  readonly id: string
  /** Valor exibido com gradiente. Ex.: "+318%". */
  readonly value: string
  /** Rótulo descritivo. */
  readonly label: string
}

/** Item de uma das colunas do comparativo. */
export interface ComparisonItem {
  readonly id: string
  readonly text: string
}

/** Uma barra do gráfico mock do dashboard. */
export interface ChartBar {
  /** Altura relativa, 0–100. */
  readonly height: number
  readonly label: string
}

/** Um logo de cliente do mural. `src` vazio cai no estado de placeholder. */
export interface ClientLogo {
  /** Caminho da imagem (ex.: '/clientes/facilitoy.png'). */
  readonly src?: string
  /** Nome real da empresa (acessibilidade + SEO). */
  readonly alt?: string
}

/** Um "tile" de KPI do dashboard mock. */
export interface KpiTile {
  readonly id: string
  readonly label: string
  readonly value: string
}
