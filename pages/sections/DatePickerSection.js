export class DatePickerSection {
  constructor(page) {
    this.page = page;
    this.datepickerInput = page.locator('#datepicker');
    this.txtDateInput = page.locator('#txtDate');
    this.startDateInput = page.locator('#start-date');
    this.endDateInput = page.locator('#end-date');
    this.submitRangeButton = page.locator('button.submit-btn');
    this.rangeResult = page.locator('#result');
  }

  async setDatepickerValue(value) {
    await this.datepickerInput.fill(value);
  }

  async pickTxtDateFromCalendar() {
    await this.txtDateInput.click();
    const calendar = this.page.locator('#ui-datepicker-div');
    await calendar.waitFor({ state: 'visible' });
    await calendar.locator('a.ui-state-default').first().click();
  }

  async setDateRange(startDate, endDate) {
    await this.startDateInput.fill(startDate);
    await this.endDateInput.fill(endDate);
    await this.submitRangeButton.click();
  }
}


