import { Section } from './primitives/Section'
import { Card } from './primitives/Card'
import { Pill } from './primitives/Pill'
import { GradientText } from './primitives/GradientText'
import { Reveal } from './primitives/Reveal'

interface Principle {
  eyebrow: string
  headline: string
  body: string
}

const PRINCIPLES: readonly Principle[] = [
  {
    eyebrow: 'Nossa filosofia',
    headline: 'Erre rápido e erre barato.',
    body: 'Metodologia baseada na velocidade de execução: testar, aprender e escalar antes da concorrência reagir.',
  },
  {
    eyebrow: 'Nossa missão',
    headline: 'Criar marcas memoráveis nas mentes de milhões de pessoas.',
    body: 'Não vendemos posts: construímos presença — da descoberta à recompra.',
  },
]

export function Filosofia() {
  return (
    <Section id="a-pump-up" label="A Pump Up" alt>
      <Reveal className="mb-12 flex flex-col items-start gap-4">
        <Pill>A Pump Up</Pill>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-display text-ink sm:text-4xl">
          Quem somos e <GradientText>por que existimos</GradientText>.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.eyebrow} delay={i * 0.1}>
            <Card className="h-full">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-mute">
                {p.eyebrow}
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold leading-snug tracking-display text-ink">
                {p.headline}
              </h3>
              <p className="text-base leading-relaxed text-ink-soft">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
