import type { ClientLogo } from '@/types'

/**
 * Marcas que confiam na Pump Up — exibidas no carrossel infinito.
 *
 * Para ADICIONAR um cliente: tente o arquivo em /public/clientes/ e
 * acrescente uma linha aqui. A animação se ajusta sozinha — quanto mais
 * logos, mais longo o ciclo, sem afetar os já existentes.
 *
 * O `alt` deve ser o NOME REAL da empresa (lido por leitores de tela e
 * indexado pelo Google). Nunca deixe vazio.
 */
export const CLIENT_LOGOS: readonly ClientLogo[] = [
  { src: '/clientes/facilitoy.png', alt: 'Facilitoy' },
  { src: '/clientes/jc-luz.png', alt: 'JC Luz Corretora de Seguros' },
  { src: '/clientes/tecmac.png', alt: 'Tecmac Treinamentos & Soluções em Altura' },
  { src: '/clientes/yhweh.png', alt: 'YHWEH' },
  { src: '/clientes/moreiraquintino.png', alt: 'Moreira Quintino Contabilidade'}
]
