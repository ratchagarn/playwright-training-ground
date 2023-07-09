import { test, expect } from '@playwright/test'

import { AntdFormHandler } from '@/fixtures/AntdFormHandler'

test.describe('Test Ant Design', () => {
  test('UI', async ({ page }) => {
    await page.goto(process.env.PLAYWRIGHT_BASE_URL)

    const form = new AntdFormHandler(page, 'form')

    await expect(
      page.getByRole('heading', {
        name: 'Test Ant Design',
        level: 1,
        exact: true,
      })
    ).toBeVisible()

    await form.fillInput('Your Name', 'Ratchagarn Naewbuntad')
    await form.fillInput('Your Favorite Number', 999)

    await form.toggleRadio('Male')

    await form.toggleCheckbox('HTML')
    await form.toggleCheckbox('CSS')
    await form.toggleCheckbox('JS')

    await form.fillDatePicker('Birthday', '1993-04-30')

    await form.fillInput('Explain about yourself', 'HSP\nIndie')

    await form.fillDateRangePicker('periodDate', [
      {
        name: 'Start date',
        value: '2023-07-15',
      },
      {
        name: 'End date',
        value: '2023-08-24',
      },
    ])

    await form.toggleSwitch('Newsletter by Email')

    await form.submit('Submit')
  })
})
