import { type Page, type Locator } from '@playwright/test'

const ENTER = 'Enter'

interface DateValue {
  name: string
  value: string
}
type DateRangePickerValues = [DateValue, DateValue]

export class AntdFormHandler {
  private readonly form: Locator

  constructor(public readonly page: Page, readonly formSelector: string) {
    this.form = this.page.locator(formSelector)
  }

  private toggleCheck(value: boolean) {
    return value ? 'check' : 'uncheck'
  }

  async fillInput(label: string, value: string | number) {
    await this.form.getByLabel(label, { exact: true }).fill(value.toString())
  }

  async fillDatePicker(label: string, value: string) {
    const target = this.form.getByLabel(label, { exact: true })

    await target.click()
    await target.fill(value)
    await target.press(ENTER)
  }

  async fillDateRangePicker(testID: string, value: DateRangePickerValues) {
    const target = this.form.getByTestId(testID)

    await target.click()

    const start = target.getByPlaceholder(value[0].name)
    const end = target.getByPlaceholder(value[1].name)

    await start.fill(value[0].value)
    await end.click()
    await end.fill(value[1].value)
    await end.press(ENTER)
  }

  async toggleCheckbox(name: string, value = true) {
    await this.form
      .getByRole('checkbox', { name, exact: true })
      [this.toggleCheck(value)]()
  }

  async toggleRadio(name: string, value = true) {
    await this.form
      .getByRole('radio', { name, exact: true })
      [this.toggleCheck(value)]()
  }

  async toggleSwitch(label: string, value = true) {
    await this.form.getByLabel(label)[this.toggleCheck(value)]()
  }

  async submit(name: string) {
    await this.form.getByRole('button', { name, exact: true }).click()
  }
}
