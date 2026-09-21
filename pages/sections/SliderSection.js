export class SliderSection {
  constructor(page) {
    this.page = page;
    this.amountInput = page.locator('#amount');
    this.sliderHandles = page.locator('#slider-range .ui-slider-handle');
  }

  async getAmountValue() {
    return this.amountInput.inputValue();
  }

  async dragHandle(index, offsetX) {
    const handle = this.sliderHandles.nth(index);
    await handle.scrollIntoViewIfNeeded();
    const box = await handle.boundingBox();
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;

    await this.page.mouse.move(startX, startY);
    await this.page.mouse.down();
    await this.page.mouse.move(startX + offsetX, startY, { steps: 10 });
    await this.page.mouse.up();
  }
}
