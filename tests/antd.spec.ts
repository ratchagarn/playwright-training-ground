import { test } from '@playwright/test'

import { AntdFormHandler } from '@/fixtures/AntdFormHandler'

test.describe('Test Ant Design', () => {
  test('UI', async ({ page }) => {
    await page.goto(process.env.PLAYWRIGHT_BASE_URL)

    const form = new AntdFormHandler(page, 'form')

    await form.fillInput('Your Name', 'Ratchagarn Naewbuntad')
    await form.fillInput('Your Favorite Number', 999)

    await form.selectSetOption('Your Native Language', 'Thai')
    await form.selectSetOption('Your Avatar', 'Cat')

    await form.fillDatePicker('Birthday', '1993-04-30 13:03:04')

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

    await form.toggleRadio('Male')

    await form.toggleCheckbox('HTML')
    await form.toggleCheckbox('CSS')
    await form.toggleCheckbox('JS')

    await form.fillInput('Explain about yourself', 'HSP\nIndie')

    await form.attachUploadDraggerFile('Your Resume', 'test-resume.csv')

    await form.toggleSwitch('Newsletter by Email')

    await form.submit('Submit')
  })
})
