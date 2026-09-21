export class RegistrationFormSection {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.addressTextarea = page.locator('#textarea');
    this.countrySelect = page.locator('#country');
    this.colorsSelect = page.locator('#colors');
    this.animalsSelect = page.locator('#animals');
  }

  genderRadio(gender) {
    return this.page.locator(`#${gender}`);
  }

  dayCheckbox(day) {
    return this.page.locator(`#${day.toLowerCase()}`);
  }

  async fillPersonalDetails({ name, email, phone, address }) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.addressTextarea.fill(address);
  }

  async selectGender(gender) {
    await this.genderRadio(gender).check();
  }

  async selectDays(days) {
    for (const day of days) {
      await this.dayCheckbox(day).check();
    }
  }

  async selectCountry(value) {
    await this.countrySelect.selectOption(value);
  }

  async selectColors(values) {
    await this.colorsSelect.selectOption(values);
  }

  async selectAnimals(values) {
    await this.animalsSelect.selectOption(values);
  }
}
