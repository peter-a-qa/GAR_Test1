export class DynamicButtonSection {
  constructor(page) {
    this.page = page;
    this.button = page.locator('button[onclick="toggleButton(this)"]');
  }

  async toggle() {
    await this.button.click();
  }
}
