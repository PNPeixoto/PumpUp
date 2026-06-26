import type { ElementType, ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  /** Tag a renderizar (span por padrão). */
  as?: ElementType
  className?: string
}

/** Trecho de texto preenchido com o gradiente de marca. */
export function GradientText({
  children,
  as: Tag = 'span',
  className,
}: GradientTextProps) {
  return <Tag className={`text-gradient ${className ?? ''}`}>{children}</Tag>
}
