/**
 * Configuração do site em um único lugar.
 *
 * SOBRE SEGURANÇA / VARIÁVEIS DE AMBIENTE:
 * Esta é uma landing page estática — não há backend nem segredos aqui.
 * O e-mail e o WhatsApp abaixo são públicos de propósito (canais de contato).
 *
 * Se um dia plugar captura de lead com backend:
 *   - Valores PÚBLICOS (URL do Calendly, número de WhatsApp) podem ficar no front.
 *   - QUALQUER segredo (token de CRM, chave de API, etc.) NUNCA usa o prefixo
 *     VITE_ nem vive no front: tudo prefixado com VITE_ é embarcado no JS e fica
 *     visível para qualquer um. Segredos ficam no BACKEND.
 *   - Captura de lead real DEVE ser validada no backend (nunca confiar no front).
 */

export const SITE = {
  brand: 'Pump Up MKT',
  slogan: 'A empresa é sua e a explosão é nossa.',
  youtube: 'Youtube',
  youtubeUrl: 'https://youtube.com/@pumpupmkt?si=Ozptr3W8Gka4E9zB',
  instagram: '@pumpup_mkt',
  instagramUrl: 'https://instagram.com/pumpup_mkt',
  /**
   * Número de WhatsApp em formato internacional, SÓ dígitos
   * (sem +, espaço, parênteses ou traço).
   * Ex.: Brasil 55 + DDD 22 + número → '5522999999999'
   * ⚠️ PLACEHOLDER — troque pelo número real antes de ir para produção.
   */
  whatsapp: '5522998509705',
} as const

/** Mensagem que já vai escrita no WhatsApp ao abrir a conversa. */
const MENSAGEM_PADRAO =
  'Olá, time Pump Up! Gostaria de agendar uma consultoria gratuita para o meu negócio.'

/**
 * Ação única de "agendar consultoria".
 * Abre o WhatsApp (wa.me) numa nova aba, com a mensagem já preenchida.
 * Todos os botões de CTA chamam esta função, então mudar aqui muda a página toda.
 */
export function agendarConsultoria(): void {
  const texto = encodeURIComponent(MENSAGEM_PADRAO)
  const url = `https://wa.me/${SITE.whatsapp}?text=${texto}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
