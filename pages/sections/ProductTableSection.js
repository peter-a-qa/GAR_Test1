export class ProductTableSection {
  constructor(page) {
    this.page = page;
    this.table = page.locator('#productTable');
    this.rows = page.locator('#productTable tbody tr');
    this.pagination = page.locator('#pagination');
  }

  async goToPage(pageNumber) {
    await this.pagination.locator('a', { hasText: String(pageNumber) }).click();
  }

  async getRowTexts() {
    return this.rows.allTextContents();
  }

  async selectRowCheckbox(rowIndex) {
    await this.rows.nth(rowIndex).locator('input[type="checkbox"]').check();
  }
}
