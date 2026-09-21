import { test, expect } from '../fixtures/pageFixtures.js';

test.describe('Product Table', () => {
  test('shows 5 products per page by default', async ({ homePage }) => {
    const { productTable } = homePage;

    await expect(productTable.rows).toHaveCount(5);
    await expect(productTable.rows.first()).toContainText('Smartphone');
  });

  test('navigates to page 2 and shows the next set of products', async ({ homePage }) => {
    const { productTable } = homePage;

    await productTable.goToPage(2);

    await expect(productTable.rows).toHaveCount(5);
    const rowTexts = (await productTable.getRowTexts()).join(' ');
    expect(rowTexts).toContain('Bluetooth Speaker');
    await expect(productTable.pagination.locator('a.active')).toHaveText('2');
  });

  test('selects a product row via its checkbox', async ({ homePage }) => {
    const { productTable } = homePage;

    await productTable.selectRowCheckbox(0);

    await expect(productTable.rows.first().locator('input[type="checkbox"]')).toBeChecked();
  });
});
