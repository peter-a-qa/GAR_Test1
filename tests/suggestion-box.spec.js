import { test, expect } from '../fixtures/pageFixtures.js';

test.describe('Suggestion / Autocomplete Box', () => {
  test('opens the dropdown and loads the initial set of items', async ({ homePage }) => {
    const { suggestionBox } = homePage;

    await suggestionBox.open();

    await expect(suggestionBox.dropdown).toBeVisible();
    await expect(suggestionBox.options).toHaveCount(100);
  });

  test('selects an item from the dropdown', async ({ homePage }) => {
    const { suggestionBox } = homePage;

    await suggestionBox.selectOptionByText('Item 5');

    await expect(suggestionBox.comboBox).toHaveValue('Item 5');
    await expect(suggestionBox.dropdown).toBeHidden();
  });
});
