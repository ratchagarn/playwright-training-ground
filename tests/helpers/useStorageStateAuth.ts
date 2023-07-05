import { test, type BrowserContextOptions } from '@playwright/test'

const storageState: BrowserContextOptions['storageState'] = {
  cookies: [],
  origins: [
    {
      origin: 'http://localhost:3001',
      localStorage: [
        {
          name: 'auth',
          value: '{ token: "token123456", name: "Anonymous" }',
        },
      ],
    },
  ],
}

export const useStorageStateAuth = () =>
  test.use({
    // storageState: 'tests/.auth/user.json',
    storageState,
  })
