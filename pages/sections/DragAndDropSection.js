export class DragAndDropSection {
  constructor(page) {
    this.page = page;
    this.draggable = page.locator('#draggable');
    this.droppable = page.locator('#droppable');
  }

  async dragToTargets() {
    await this.draggable.dragTo(this.droppable);
  }
}
