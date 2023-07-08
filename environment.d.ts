/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly PLAYWRIGHT_TEST_DIR: string
    readonly PLAYWRIGHT_BASE_URL: string
  }
}
