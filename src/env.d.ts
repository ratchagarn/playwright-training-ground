/// <reference types="vite/client" />

/**
 * https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */
interface ImportMetaEnv {
  readonly VITE_APP_SERVER_PORT: number
  readonly VITE_APP_TYPE: 'default' | 'antd'
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_API_END_POINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
