import { test, expect } from '@playwright/test'

test.describe('Test Ant Design', () => {
  test('UI', async ({ page }) => {
    await page.goto(process.env.PLAYWRIGHT_BASE_URL)

    await expect(
      page.getByRole('heading', {
        name: 'Test Ant Design',
        level: 1,
        exact: true,
      })
    ).toBeVisible()

    const selectNativeLanguage = page.getByLabel('Your Native Language')

    await selectNativeLanguage.focus()
    await selectNativeLanguage.fill('English')
  })
})
