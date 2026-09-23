import { test, expect } from '../fixtures/pageFixtures.js';

test('toggles the dynamic button label between START and STOP', async ({ homePage }) => {
  const { dynamicButton } = homePage;

  await expect(dynamicButton.button).toHaveText('START');

  await dynamicButton.toggle();
  await expect(dynamicButton.button).toHaveTexts('STOP');

  await dynamicButton.toggle();
  await expect(dynamicButton.button).toHaveText('START');
});
