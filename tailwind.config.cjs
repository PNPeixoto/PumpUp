/** @type {import('tailwindcss').Config} */
/**
 * Fonte única de verdade dos design tokens.
 * Tudo que o spec define (cores, tipografia, raios, gradientes, glows)
 * vive aqui — nenhum valor mágico espalhado pelos componentes.
 *
 * Formato .cjs (CommonJS): o Tailwind lê nativamente em qualquer ambiente,
 * sem depender do carregador de TypeScript (que falha em alguns Windows/Node).
 */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fundos
        base: '#09090c', // fundo base da página
        'surface-alt': '#0c0c11', // seções alternadas
        'surface-footer': '#0a0a0d', // rodapé
        // Superfícies de card / bordas
        card: 'rgba(255,255,255,.025)',
        hairline: 'rgba(255,255,255,.08)',
        // Texto
        ink: '#f4f4f6', // texto principal
        'ink-soft': '#a8a8b4', // texto secundário
        'ink-mute': '#6b6b78', // labels / texto suave
        // Paradas do gradiente de marca (acentos sólidos do funil)
        brand: {
          orange: '#ff6a1f',
          red: '#ff4a3f',
          pink: '#d23a8e',
          purple: '#8a37c4',
          violet: '#6336e8',
        },
        // Status "alta" (verde)
        'status-up': '#4ade80',
        'status-up-bg': 'rgba(34,197,94,.14)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // letter-spacing negativo dos títulos do spec
        display: '-.02em',
        'display-tight': '-.03em',
      },
      borderRadius: {
        card: '20px',
        'card-lg': '22px',
        section: '32px',
        pill: '999px',
      },
      backgroundImage: {
        // Gradiente de marca principal (135deg)
        brand: 'linear-gradient(135deg, #ff6a1f 0%, #ff2e63 52%, #6336e8 100%)',
        // Variante para textos/realces mais lineares
        'brand-soft':
          'linear-gradient(135deg, #ff6a1f 0%, #d23a8e 50%, #6336e8 100%)',
      },
      keyframes: {
        // Pulsação suave dos glows ambientes (opacity .55 -> .9, 6s)
        glowPulse: {
          '0%, 100%': { opacity: '.55' },
          '50%': { opacity: '.9' },
        },
        // Flutuação leve do logo no hero
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        // Carrossel infinito: rola exatamente metade da pista (um conjunto)
        // e reinicia de forma imperceptível, pois a 2ª metade é idêntica.
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        glow: 'glowPulse 6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        // A duração é definida inline (proporcional à quantidade de logos),
        // para manter a VELOCIDADE constante mesmo ao adicionar empresas.
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
