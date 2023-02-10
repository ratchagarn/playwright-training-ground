/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly PLAYWRIGHT_TEST_DIR: string
  }
}
