export class SuggestionBoxSection {
  constructor(page) {
    this.page = page;
    this.comboBox = page.locator('#comboBox');
    this.dropdown = page.locator('#dropdown');
    this.options = page.locator('#dropdown .option');
  }

  async open() {
    await this.comboBox.click();
  }

  async selectOptionByText(text) {
    await this.open();
    await this.page.locator(`#dropdown .option:text-is("${text}")`).click();
  }
}
