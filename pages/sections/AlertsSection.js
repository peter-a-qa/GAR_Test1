export class AlertsSection {
  constructor(page) {
    this.page = page;
    this.alertBtn = page.locator('#alertBtn');
    this.confirmBtn = page.locator('#confirmBtn');
    this.promptBtn = page.locator('#promptBtn');
    this.resultText = page.locator('#demo');
  }

  
  async triggerSimpleAlert(onDialog) {
    this.page.once('dialog', onDialog);
    await this.alertBtn.click();
  }

  async triggerConfirm(accept) {
    this.page.once('dialog', (dialog) => (accept ? dialog.accept() : dialog.dismiss()));
    await this.confirmBtn.click();
  }

  async triggerPrompt(promptText) {
    this.page.once('dialog', (dialog) => {
      if (promptText === null) {
        dialog.dismiss();
      } else {
        dialog.accept(promptText);
      }
    });
    await this.promptBtn.click();
  }
}
