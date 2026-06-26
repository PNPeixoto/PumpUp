/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL pública de agendamento (Calendly/Cal.com). Opcional. */
  readonly VITE_SCHEDULING_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
