import type { FunnelStage } from '@/types'

/**
 * As 5 etapas da jornada do consumidor.
 * Renderizadas via .map em <Funil />, na ordem do array.
 */
export const FUNNEL_STAGES: readonly FunnelStage[] = [
  {
    id: '01',
    accent: '#ff6a1f',
    name: 'Descoberta',
    voice: 'Eu sei',
    meaning:
      'O consumidor é exposto à marca pela primeira vez, por anúncios e recomendações.',
    howItHappens: [
      'Anúncios online',
      'Conteúdo gratuito',
      'Influenciadores',
      'Indicação de amigos',
    ],
  },
  {
    id: '02',
    accent: '#ff4a3f',
    name: 'Atenção',
    voice: 'Eu gosto',
    meaning: 'A marca desperta interesse e passa a ser lembrada.',
    howItHappens: [
      'Clique no anúncio',
      'Visita à landing page',
      'Preenche formulário',
    ],
  },
  {
    id: '03',
    accent: '#d23a8e',
    name: 'Consideração',
    voice: 'Quero saber mais',
    meaning: 'O consumidor pesquisa ativamente por mais informações.',
    howItHappens: [
      'Fala com vendas',
      'Pesquisa em fóruns',
      'Testa o produto',
    ],
  },
  {
    id: '04',
    accent: '#8a37c4',
    name: 'Ação',
    voice: 'Vou comprar',
    meaning:
      'O consumidor decide comprar e interage de forma mais profunda com a marca.',
    howItHappens: [
      'Compra na loja / e-commerce',
      'Assina o contrato',
      'Consome o produto',
    ],
  },
  {
    id: '05',
    accent: '#6336e8',
    name: 'Recomendação',
    voice: 'Recomendo',
    meaning:
      'Fidelidade: retenção, recompra e defesa espontânea da marca.',
    howItHappens: [
      'Continua comprando',
      'Mantém a assinatura',
      'Recomenda a marca',
    ],
  },
]
