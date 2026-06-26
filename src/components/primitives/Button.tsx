import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline'
type Size = 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: undefined
}

interface ButtonAsLink extends BaseProps {
  href: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const SIZES: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const VARIANTS: Record<Variant, string> = {
  // Gradiente de marca, com leve elevação no hover
  primary:
    'bg-brand text-white font-semibold shadow-[0_8px_30px_-8px_rgba(255,46,99,.5)] hover:shadow-[0_10px_40px_-6px_rgba(255,46,99,.7)] hover:-translate-y-0.5',
  // Contorno sutil sobre fundo escuro
  outline:
    'border border-hairline bg-card text-ink font-medium hover:border-ink-soft hover:bg-white/5',
}

/**
 * Botão único do sistema. Renderiza <a> quando recebe href
 * (preserva semântica de link) e <button> caso contrário.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-pill transition-all duration-200 ${SIZES[size]} ${VARIANTS[variant]} ${className ?? ''}`

  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} className={classes}>
        {children}
      </a>
    )
  }

  const { href: _ignored, ...buttonProps } = rest as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
