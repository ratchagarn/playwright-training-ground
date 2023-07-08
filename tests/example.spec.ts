import { test, expect } from '@playwright/test'

import { useStorageStateAuth } from '@/helpers/useStorageStateAuth'

test.describe('At Home Page', () => {
  useStorageStateAuth()

  test('has title', async ({ page }) => {
    await page.goto(process.env.PLAYWRIGHT_BASE_URL)

    await page.evaluate(() => {
      window.localStorage.setItem('auth', 'en')
    })

    await expect(
      page.getByRole('heading', {
        name: 'Welcome to Playwright Training Ground',
        exact: true,
      })
    ).toBeVisible()

    // page.context().storageState({ path: 'tests/.auth/user.json' })

    // await page.reload()
  })
})
