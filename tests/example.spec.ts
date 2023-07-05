import { test, expect } from '@playwright/test'

test.describe('At Home Page', () => {
  test('has title', async ({ page }) => {
    await page.goto(process.env.PLAYWRIGHT_TEST_URL)

    await expect(
      page.getByRole('heading', {
        name: 'Welcome to Playwright Training Ground',
        exact: true,
      })
    ).toBeVisible()
  })
})
