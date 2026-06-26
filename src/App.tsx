import { FlagsProvider } from '@/lib/flags'
import { Grain } from '@/components/effects/Grain'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Filosofia } from '@/components/Filosofia'
import { ProvaSocial } from '@/components/ProvaSocial'
import { Funil } from '@/components/Funil'
import { Comparativo } from '@/components/Comparativo'
import { Dashboard } from '@/components/Dashboard'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    // Flags controláveis aqui (glow/grain/motion). Default: todas true.
    // Ex.: <FlagsProvider value={{ glow: false }}>
    <FlagsProvider>
      {/* Skip-link: acessibilidade para teclado/leitor de tela */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Grain />
      <Nav />

      <main id="conteudo">
        <Hero />
        <Filosofia />
        <ProvaSocial />
        <Funil />
        <Comparativo />
        <Dashboard />
        <CTA />
      </main>

      <Footer />
    </FlagsProvider>
  )
}
