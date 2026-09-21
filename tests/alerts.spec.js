import { test, expect } from '../fixtures/pageFixtures.js';

test.describe('Alerts & Popups', () => {
  test('shows the correct message in a simple alert', async ({ homePage }) => {
    const { alerts } = homePage;
    let message = '';

    await alerts.triggerSimpleAlert((dialog) => {
      message = dialog.message();
      dialog.accept();
    });

    
    expect(message).toBe('I am an alert box!');
  });

  test('accepts the confirmation alert', async ({ homePage }) => {
    const { alerts } = homePage;

    await alerts.triggerConfirm(true);

    await expect(alerts.resultText).toHaveText('You pressed OK!');
  });

  test('dismisses the confirmation alert', async ({ homePage }) => {
    const { alerts } = homePage;

    await alerts.triggerConfirm(false);

    await expect(alerts.resultText).toHaveText('You pressed Cancel!');
  });

  test('submits a name via the prompt alert', async ({ homePage }) => {
    const { alerts } = homePage;

    await alerts.triggerPrompt('Ada Lovelace');

    await expect(alerts.resultText).toHaveText('Hello Ada Lovelace! How are you today?');
  });

  test('cancels the prompt alert', async ({ homePage }) => {
    const { alerts } = homePage;

    await alerts.triggerPrompt(null);

    await expect(alerts.resultText).toHaveText('User cancelled the prompt.');
  });
});
