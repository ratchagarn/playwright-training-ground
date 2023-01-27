/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly TEST_DIR: string
  }
}
