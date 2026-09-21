export class LabelsAndLinksSection {
  constructor(page) {
    this.page = page;
    this.mobileLabels = page.locator('#mobiles label');
    this.laptopLinks = page.locator('#laptops a.link');
    this.brokenLinks = page.locator('#broken-links a.link');
  }

  async getLaptopLinkHrefs() {
    return this.laptopLinks.evaluateAll((links) => links.map((link) => link.href));
  }

  async getBrokenLinkHrefs() {
    return this.brokenLinks.evaluateAll((links) => links.map((link) => link.href));
  }
}
