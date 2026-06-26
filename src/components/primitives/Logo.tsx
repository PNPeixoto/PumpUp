interface LogoProps {
  /** Altura em px (a largura acompanha a proporção real do logo). */
  size?: number
  className?: string
  /** Texto alternativo. Em contexto com a wordmark ao lado, passe alt="". */
  alt?: string
  /**
   * Mantido por compatibilidade com chamadas antigas (que passavam um id de
   * gradiente SVG). É ignorado agora que o logo é uma imagem PNG.
   */
  gradientId?: string
}

/**
 * Marca da Pump Up (logo original em PNG, servido de /public).
 * Como o arquivo não é quadrado, fixamos a ALTURA e deixamos a largura
 * automática — assim o logo nunca distorce, em qualquer tamanho.
 */
export function Logo({ size = 40, className, alt = 'Pump Up MKT' }: LogoProps) {
  return (
      <img
          src="/pump-logo.png"
          alt={alt}
          className={className}
          style={{ height: size, width: 'auto' }}
      />
  )
}
