import { test, expect } from '../fixtures/pageFixtures.js';

test.describe('Registration Form', () => {
  test('fills personal details', async ({ homePage }) => {
    const { registrationForm } = homePage;

    await registrationForm.fillPersonalDetails({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '5551234567',
      address: '123 Main Street',
    });

    await expect(registrationForm.nameInput).toHaveValue('Jane Doe');
    await expect(registrationForm.emailInput).toHaveValue('jane.doe@example.com');
    await expect(registrationForm.phoneInput).toHaveValue('5551234567');
    await expect(registrationForm.addressTextarea).toHaveValue('123 Main Street');
  });

  test('selects a gender radio button', async ({ homePage }) => {
    const { registrationForm } = homePage;

    await registrationForm.selectGender('female');

    await expect(registrationForm.genderRadio('female')).toBeChecked();
    await expect(registrationForm.genderRadio('male')).not.toBeChecked();
  });

  test('selects multiple day checkboxes', async ({ homePage }) => {
    const { registrationForm } = homePage;
    const days = ['monday', 'wednesday', 'friday'];

    await registrationForm.selectDays(days);

    for (const day of days) {
      await expect(registrationForm.dayCheckbox(day)).toBeChecked();
    }
    await expect(registrationForm.dayCheckbox('sunday')).not.toBeChecked();
  });

  test('selects a country from the dropdown', async ({ homePage }) => {
    const { registrationForm } = homePage;

    await registrationForm.selectCountry('canada');

    await expect(registrationForm.countrySelect).toHaveValue('canada');
  });

  test('selects multiple colors from the multi-select', async ({ homePage }) => {
    const { registrationForm } = homePage;

    await registrationForm.selectColors(['blue', 'yellow', 'white']);

    await expect(registrationForm.colorsSelect).toHaveValues(['blue', 'yellow', 'white']);
  });

  test('selects multiple animals from the sorted list', async ({ homePage }) => {
    const { registrationForm } = homePage;

    await registrationForm.selectAnimals(['dog', 'lion', 'zebra']);

    await expect(registrationForm.animalsSelect).toHaveValues(['dog', 'lion', 'zebra']);
  });
});
