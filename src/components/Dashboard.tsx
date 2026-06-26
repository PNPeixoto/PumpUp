import { Section } from './primitives/Section'
import { GradientText } from './primitives/GradientText'
import { Reveal } from './primitives/Reveal'
import { Glow } from './effects/Glow'
import { motion } from 'framer-motion'
import { growBar } from '@/lib/motion'
import { useMotionEnabled } from '@/lib/flags'
import {
  DASHBOARD_HEADER,
  CHART_BARS,
  KPI_TILES,
} from '@/data/dashboard'

const BULLETS: readonly string[] = [
  'Painel ao vivo, atualizado em tempo real',
  'Só as métricas que realmente importam',
  'Decisão baseada em dados, não em achismo',
]

/** Mock visual do dashboard (consome os dados mock; troque a origem por API). */
function DashboardMock() {
  const animate = useMotionEnabled()
  // Gradiente variando ao longo das 7 barras (laranja -> violeta).
  const barColors = ['#ff6a1f', '#ff5a2f', '#ff4a3f', '#d23a8e', '#a838b0', '#8a37c4', '#6336e8']

  return (
    <div className="relative">
      <Glow color="violet" size={420} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative rounded-card-lg border border-hairline bg-surface-alt/80 p-6 backdrop-blur-sm shadow-[0_30px_80px_-30px_rgba(0,0,0,.8)]">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-ink-mute">{DASHBOARD_HEADER.title}</p>
            <p className="mt-1 font-display text-3xl font-bold tracking-display text-ink">
              {DASHBOARD_HEADER.amount}
            </p>
          </div>
          <span className="rounded-pill bg-status-up-bg px-3 py-1 text-sm font-semibold text-status-up">
            {DASHBOARD_HEADER.delta}
          </span>
        </div>

        {/* Gráfico de 7 barras */}
        <div
          className="flex h-40 items-end justify-between gap-2"
          role="img"
          aria-label="Gráfico de faturamento semanal em tendência de alta"
        >
          {CHART_BARS.map((bar, i) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-32 w-full items-end">
                <motion.span
                  className="w-full origin-bottom rounded-t-md"
                  style={{
                    height: `${bar.height}%`,
                    backgroundColor: barColors[i],
                  }}
                  variants={animate ? growBar : undefined}
                  custom={i}
                  initial={animate ? 'hidden' : undefined}
                  whileInView={animate ? 'show' : undefined}
                  viewport={{ once: true }}
                />
              </div>
              <span className="text-[10px] text-ink-mute">{bar.label}</span>
            </div>
          ))}
        </div>

        {/* Tiles de KPI */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {KPI_TILES.map((tile) => (
            <div
              key={tile.id}
              className="rounded-card border border-hairline bg-card p-3 text-center"
            >
              <p className="text-[11px] uppercase tracking-wider text-ink-mute">
                {tile.label}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-ink">
                {tile.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Dashboard() {
  return (
    <Section id="dados" label="Dados" alt>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-3xl font-bold tracking-display text-ink sm:text-4xl">
            Todos os dados na <GradientText>palma da mão</GradientText>.
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft">
            Faturamento, CAC, ROAS e LTV em tempo real. Sem caixa-preta: você vê
            exatamente para onde cada real está indo e o que ele está trazendo de
            volta.
          </p>
          <ul className="flex flex-col gap-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-ink">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white"
                >
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Mock */}
        <Reveal delay={0.1}>
          <DashboardMock />
        </Reveal>
      </div>
    </Section>
  )
}
