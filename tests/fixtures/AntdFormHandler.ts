import { type Page, type Locator } from '@playwright/test'

const ENTER = 'Enter'

interface DateValue {
  name: string
  value: string
}

type DateRangePickerValues = [DateValue, DateValue]

interface Options {
  /** Base path for assets directory, use for `setInputFiles` */
  assetsBasePath?: string
}

export class AntdFormHandler {
  private readonly form: Locator
  private readonly options: Options

  constructor(
    public readonly page: Page,
    readonly formSelector: string,
    readonly newOptions?: Options
  ) {
    this.form = this.page.locator(formSelector)
    this.options = Object.assign({}, newOptions, {
      assetsBasePath: './tests/assets',
    } as Options)
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

  async selectSetOption(label: string, optionLabel: string) {
    const target = this.form.getByLabel(label)

    await target.click()
    /**
     * Required `Select` allow to search option item by label
     */
    await target.fill(optionLabel)

    await this.page
      .locator('.ant-select-dropdown:visible')
      .getByText(optionLabel, { exact: true })
      .click()
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

  async attachUploadDraggerFile(label: string, file: string) {
    await this.form
      .getByLabel(label)
      .setInputFiles(`${this.options.assetsBasePath}/${file}`)
  }

  async submit(name: string) {
    await this.form.getByRole('button', { name, exact: true }).click()
  }
}
