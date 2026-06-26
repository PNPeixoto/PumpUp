import { Section } from './primitives/Section'
import { Button } from './primitives/Button'
import { Reveal } from './primitives/Reveal'
import { Logo } from './primitives/Logo'
import { Glow } from './effects/Glow'
import { agendarConsultoria } from '@/lib/config'

export function CTA() {
  return (
    <Section label="Chamada para ação">
      <Reveal>
        <div className="relative overflow-hidden rounded-section border border-hairline px-6 py-16 text-center sm:px-12">
          {/* Fundo gradiente suave + glows nos cantos */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.13]"
            style={{
              background:
                'linear-gradient(135deg, #ff6a1f 0%, #ff2e63 52%, #6336e8 100%)',
            }}
          />
          <Glow color="orange" size={340} className="-left-20 -top-20" />
          <Glow color="violet" size={340} className="-bottom-20 -right-20" />

          <div className="relative flex flex-col items-center gap-6">
            <Logo size={64} gradientId="cta-logo-grad" />
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-display text-ink sm:text-4xl">
              Pronto para a sua explosão de crescimento?
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
              Agende uma consultoria gratuita. A gente analisa o seu negócio e
              mostra onde está o próximo salto de faturamento.
            </p>
            <Button size="lg" onClick={agendarConsultoria}>
              Agendar consultoria gratuita
              <span aria-hidden="true">→</span>
            </Button>
            <p className="text-sm text-ink-mute">
              Sem compromisso · resposta em até 24h
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
