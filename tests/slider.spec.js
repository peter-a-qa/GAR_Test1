import { test, expect } from '../fixtures/pageFixtures.js';

test.describe('Price Range Slider', () => {
  test('shows the default price range', async ({ homePage }) => {
    const { slider } = homePage;

    await expect(slider.amountInput).toHaveValue('$75 - $300');
  });

  test('updates the price range when the lower handle is dragged', async ({ homePage }) => {
    const { slider } = homePage;
    const before = await slider.getAmountValue();

    await slider.dragHandle(0, -50);

    const after = await slider.getAmountValue();
    expect(after).not.toBe(before);
  });
});
