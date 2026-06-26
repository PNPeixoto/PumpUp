import { useFlags } from '@/lib/flags'

/**
 * Textura de grão sutil aplicada sobre toda a página.
 * Fica fixa, cobre a viewport, não captura cliques e usa mix-blend overlay
 * para "sujar" levemente as cores sem alterar o layout.
 * Controlada pela flag `grain`.
 */
export function Grain() {
  const { grain } = useFlags()
  if (!grain) return null

  // SVG fractalNoise embutido como data-URI (sem request de rede).
  const noise = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`,
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-overlay"
      style={{ backgroundImage: `url("data:image/svg+xml,${noise}")` }}
    />
  )
}
