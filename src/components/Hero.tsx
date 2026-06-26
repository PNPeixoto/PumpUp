import { Pill } from './primitives/Pill'
import { Button } from './primitives/Button'
import { GradientText } from './primitives/GradientText'
import { Reveal } from './primitives/Reveal'
import { Logo } from './primitives/Logo'
import { Glow } from './effects/Glow'
import { useMotionEnabled } from '@/lib/flags'
import { agendarConsultoria } from '@/lib/config'

export function Hero() {
  const animate = useMotionEnabled()

  return (
    <section
      id="topo"
      aria-label="Apresentação"
      className="relative overflow-hidden bg-base"
    >
      {/* Glows de atmosfera */}
      <Glow color="orange" size={520} className="-left-40 -top-32" />
      <Glow color="violet" size={520} className="-right-40 top-20" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-8 lg:py-32">
        {/* Coluna de texto */}
        <Reveal className="flex flex-col items-start gap-6">
          <Pill bullet>Marketing · Vendas · Inteligência Artificial</Pill>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-display-tight text-ink sm:text-5xl lg:text-6xl">
            A empresa é sua.
            <br />A <GradientText>explosão</GradientText> é nossa.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            Resultados reais e crescimento explosivo sustentável. Aumentamos o seu
            faturamento com estratégias de{' '}
            <span className="font-semibold text-ink">
              Marketing Digital, Vendas e Inteligência Artificial
            </span>
            .
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={agendarConsultoria}>
              Agendar consultoria gratuita
              <span aria-hidden="true">→</span>
            </Button>
            <Button size="lg" variant="outline" href="#metodo">
              Ver o método
            </Button>
          </div>
        </Reveal>

        {/* Coluna do logo */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative">
            <Glow color="violet" size={360} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Logo
              size={260}
              gradientId="hero-logo-grad"
              className={`relative drop-shadow-[0_0_40px_rgba(255,46,99,.35)] ${animate ? 'animate-float' : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
