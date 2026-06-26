import { Section } from './primitives/Section'
import { Card } from './primitives/Card'
import { GradientText } from './primitives/GradientText'
import { Reveal } from './primitives/Reveal'
import { COMPETITORS_DO, WE_DO } from '@/data/comparison'
import type { ComparisonItem } from '@/types'

interface ColumnProps {
  title: string
  items: readonly ComparisonItem[]
  /** Variante "nós" (✓ gradiente + borda destaque) vs neutra (✕ apagado). */
  highlight?: boolean
}

function Column({ title, items, highlight }: ColumnProps) {
  return (
    <Card highlight={highlight} className="h-full">
      <h3 className="mb-6 font-display text-xl font-bold tracking-display text-ink">
        {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            {highlight ? (
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white"
              >
                ✓
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline text-xs text-ink-mute"
              >
                ✕
              </span>
            )}
            <span
              className={
                highlight ? 'text-ink' : 'text-ink-soft line-through decoration-ink-mute/40'
              }
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function Comparativo() {
  return (
    <Section label="Comparativo">
      <Reveal className="mb-12 max-w-3xl">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-display text-ink sm:text-4xl">
          Enquanto os outros entregam tarefas, nós entregamos{' '}
          <GradientText>máquina de venda</GradientText>.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <Column title="O que os outros fazem" items={COMPETITORS_DO} />
        </Reveal>
        <Reveal delay={0.1}>
          <Column title="O que nós fazemos" items={WE_DO} highlight />
        </Reveal>
      </div>
    </Section>
  )
}
