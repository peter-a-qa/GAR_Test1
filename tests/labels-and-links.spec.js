import { test, expect } from '../fixtures/pageFixtures.js';

test.describe('Labels and Links', () => {
  test('lists the mobile labels', async ({ homePage }) => {
    const { labelsAndLinks } = homePage;

    await expect(labelsAndLinks.mobileLabels).toHaveText(['Samsung', 'Real Me', 'Moto']);
  });

  test('verifies laptop links point to the right vendors', async ({ homePage }) => {
    const { labelsAndLinks } = homePage;

    const hrefs = await labelsAndLinks.getLaptopLinkHrefs();

    expect(hrefs).toEqual([
      'https://www.apple.com/',
      'https://www.lenovo.com/',
      'https://www.dell.com/',
    ]);
  });

  test('flags broken links by checking their HTTP status', async ({ homePage, request }) => {
    const { labelsAndLinks } = homePage;
    const hrefs = await labelsAndLinks.getBrokenLinkHrefs();

    for (const href of hrefs) {
      let isBroken = false;
      try {
        const response = await request.get(href, { failOnStatusCode: false, timeout: 10000 });
        isBroken = !response.ok();
      } catch {
        isBroken = true;
      }
      expect(isBroken, `${href} should be unreachable (broken-link demo)`).toBeTruthy();
    }
  });
});
