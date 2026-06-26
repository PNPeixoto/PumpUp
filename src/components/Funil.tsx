import { Section } from './primitives/Section'
import { GradientText } from './primitives/GradientText'
import { Reveal } from './primitives/Reveal'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { useMotionEnabled } from '@/lib/flags'
import { FUNNEL_STAGES } from '@/data/funnel'

export function Funil() {
  const animate = useMotionEnabled()

  return (
    <Section id="metodo" label="O método: a jornada do consumidor" alt>
      <Reveal className="mb-12 max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-display text-ink sm:text-4xl">
          A jornada do consumidor,{' '}
          <GradientText>ponta a ponta</GradientText>.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Da primeira exposição à recomendação espontânea — cada etapa com a sua
          estratégia.
        </p>
      </Reveal>

      <motion.ol
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        variants={animate ? staggerContainer : undefined}
        initial={animate ? 'hidden' : undefined}
        whileInView={animate ? 'show' : undefined}
        viewport={{ once: true, margin: '-60px' }}
      >
        {FUNNEL_STAGES.map((stage) => (
          <motion.li
            key={stage.id}
            variants={animate ? staggerItem : undefined}
            className="flex flex-col overflow-hidden rounded-card border border-hairline bg-card"
          >
            {/* Barra superior na cor do estágio */}
            <span
              aria-hidden="true"
              className="h-1.5 w-full"
              style={{ backgroundColor: stage.accent }}
            />

            <div className="flex flex-1 flex-col gap-3 p-5">
              {/* Badge numerado */}
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                style={{ backgroundColor: stage.accent }}
              >
                {stage.id}
              </span>

              <h3 className="font-display text-lg font-bold tracking-display text-ink">
                {stage.name}
              </h3>

              {/* Voz do consumidor na cor do estágio */}
              <p
                className="text-sm font-semibold italic"
                style={{ color: stage.accent }}
              >
                “{stage.voice}”
              </p>

              <p className="text-sm leading-relaxed text-ink-soft">
                {stage.meaning}
              </p>

              <div className="mt-auto pt-2">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
                  Como acontece
                </p>
                <ul className="flex flex-col gap-1.5">
                  {stage.howItHappens.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: stage.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}
