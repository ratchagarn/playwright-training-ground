/// <reference types="./src/env" />
import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
const config = ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv

  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
    ],
    server: {
      port: env.VITE_APP_SERVER_PORT,
      open: true,
      host: true,
    },
  })
}

export default config
