import { test, expect } from '../fixtures/pageFixtures.js';

test.describe('Date Pickers', () => {
  test('types a date directly into Date Picker 1', async ({ homePage }) => {
    const { datePickers } = homePage;

    await datePickers.setDatepickerValue('05/15/2026');

    await expect(datePickers.datepickerInput).toHaveValue('05/15/2026');
  });

  test('selects a date via the jQuery UI calendar for Date Picker 2', async ({ homePage }) => {
    const { datePickers } = homePage;

    await datePickers.pickTxtDateFromCalendar();

    await expect(datePickers.txtDateInput).not.toHaveValue('');
  });

  test('calculates the number of days in a selected date range', async ({ homePage }) => {
    const { datePickers } = homePage;

    await datePickers.setDateRange('2026-01-01', '2026-01-11');

    await expect(datePickers.rangeResult).toHaveText('You selected a range of 10 days.');
  });

  test('rejects an end date before the start date', async ({ homePage }) => {
    const { datePickers } = homePage;

    await datePickers.setDateRange('2026-01-11', '2026-01-01');

    await expect(datePickers.rangeResult).toHaveText('End date must be after start date.');
  });
});
