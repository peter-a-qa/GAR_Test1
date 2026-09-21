export class FileUploadSection {
  constructor(page) {
    this.page = page;
    this.singleFileInput = page.locator('#singleFileInput');
    this.singleFileSubmit = page.locator('#singleFileForm button[type="submit"]');
    this.singleFileStatus = page.locator('#singleFileStatus');

    this.multipleFilesInput = page.locator('#multipleFilesInput');
    this.multipleFilesSubmit = page.locator('#multipleFilesForm button[type="submit"]');
    this.multipleFilesStatus = page.locator('#multipleFilesStatus');
  }

  async uploadSingleFile(filePath) {
    await this.singleFileInput.setInputFiles(filePath);
    await this.singleFileSubmit.click();
  }

  async uploadMultipleFiles(filePaths) {
    await this.multipleFilesInput.setInputFiles(filePaths);
    await this.multipleFilesSubmit.click();
  }
}
