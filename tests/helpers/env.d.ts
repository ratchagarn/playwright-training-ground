declare namespace NodeJS {
  interface ProcessEnv {
    PLAYWRIGHT_TEST_DIR: string
    PLAYWRIGHT_BASE_URL: string
  }
}
