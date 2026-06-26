import type { CSSProperties } from 'react'
import { Section } from './primitives/Section'
import { GradientText } from './primitives/GradientText'
import { Reveal } from './primitives/Reveal'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { motion } from 'framer-motion'
import { useFlags, useMotionEnabled } from '@/lib/flags'
import { METRICS } from '@/data/metrics'
import { CLIENT_LOGOS } from '@/data/clients'
import type { Metric, ClientLogo } from '@/types'

/** Mínimo de tiles por "conjunto", para preencher telas largas mesmo com
 *  poucos clientes (o conjunto é repetido até atingir esse número). */
const MIN_TILES = 8
/** Segundos de rolagem por tile (define a velocidade; menor = mais rápido). */
const SECONDS_PER_TILE = 3.5

/**
 * Imagem de um logo no carrossel.
 * Por padrão vira silhueta branca (brightness-0 + invert) e, no hover,
 * volta às cores originais (brightness-100 + invert-0). É a adaptação do
 * efeito "grayscale -> colorido" para um fundo escuro.
 */
function LogoImg({ logo }: { logo: ClientLogo }) {
  return (
    <img
      src={logo.src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="h-10 w-auto max-w-[150px] object-contain opacity-70 brightness-0 invert transition duration-500 hover:opacity-100 hover:brightness-100 hover:invert-0 sm:h-12"
    />
  )
}

/**
 * Carrossel infinito de logos.
 * Monta um "conjunto" (repetindo os logos até MIN_TILES) e o duplica.
 * A pista rola translateX(-50%) — exatamente um conjunto — e reinicia sem
 * emenda. Adicionar empresas só alonga o ciclo, sem acelerar nem afetar as
 * existentes (a velocidade é constante porque a duração é proporcional).
 * A animação roda mesmo sob "reduzir movimento" (exceção definida no CSS).
 */
function LogoMarquee({ logos }: { logos: readonly ClientLogo[] }) {
  const { motion: motionOn } = useFlags()
  const visible = logos.filter((l) => l.src)
  if (visible.length === 0) return null

  // Repete os logos ate alcancar o minimo de tiles por conjunto.
  const set: ClientLogo[] = []
  while (set.length < MIN_TILES) set.push(...visible)

  // Flag de movimento desligada: fileira estatica (centralizada).
  if (!motionOn) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {visible.map((logo, i) => (
          <li key={i}>
            <LogoImg logo={logo} />
          </li>
        ))}
      </ul>
    )
  }

  const track = [...set, ...set] // duas metades identicas
  const style = { '--marquee-duration': `${set.length * SECONDS_PER_TILE}s` } as CSSProperties

  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-hidden="true"
    >
      <ul
        className="logo-marquee flex w-max items-center group-hover:[animation-play-state:paused]"
        style={style}
      >
        {track.map((logo, i) => (
          <li key={i} className="mx-8 shrink-0">
            <LogoImg logo={logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ProvaSocialProps {
  metrics?: readonly Metric[]
  /** Logos dos clientes (default: lista em src/data/clients.ts). */
  logos?: readonly ClientLogo[]
}

export function ProvaSocial({
  metrics = METRICS,
  logos = CLIENT_LOGOS,
}: ProvaSocialProps) {
  const animate = useMotionEnabled()
  const names = logos.map((l) => l.alt).filter(Boolean) as string[]

  return (
    <Section id="resultados" label="Resultados">
      <Reveal className="mb-12 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-display text-ink sm:text-4xl">
          Resultados reais de <GradientText>quem confia</GradientText>.
        </h2>
      </Reveal>

      {/* Metricas */}
      <motion.div
        className="grid gap-6 sm:grid-cols-3"
        variants={animate ? staggerContainer : undefined}
        initial={animate ? 'hidden' : undefined}
        whileInView={animate ? 'show' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        {metrics.map((m) => (
          <motion.div
            key={m.id}
            variants={animate ? staggerItem : undefined}
            className="rounded-card-lg border border-hairline bg-card p-8 text-center"
          >
            <p className="font-display text-5xl font-bold tracking-display">
              <GradientText>{m.value}</GradientText>
            </p>
            <p className="mt-2 text-sm text-ink-soft">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Carrossel de logos */}
      <Reveal className="mt-16">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-ink-mute">
          Marcas que confiam na Pump Up
        </p>

        <LogoMarquee logos={logos} />

        {/* Lista acessivel: leitores de tela leem cada cliente uma unica vez,
            enquanto o carrossel visual (aria-hidden) cuida so do movimento. */}
        {names.length > 0 && (
          <p className="sr-only">Clientes da Pump Up: {names.join(', ')}.</p>
        )}
      </Reveal>
    </Section>
  )
}
