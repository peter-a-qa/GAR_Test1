import path from 'path';
import { test, expect } from '../fixtures/pageFixtures.js';

const FIXTURES_DIR = path.join(__dirname, '..', 'fixtures', 'files');

test.describe('File Upload', () => {
  test('uploads a single file and shows its details', async ({ homePage }) => {
    const { fileUpload } = homePage;
    const filePath = path.join(FIXTURES_DIR, 'sample.txt');

    await fileUpload.uploadSingleFile(filePath);

    await expect(fileUpload.singleFileStatus).toContainText('Single file selected: sample.txt');
    await expect(fileUpload.singleFileStatus).toContainText('Type: text/plain');
  });

  test('uploads multiple files and lists each of them', async ({ homePage }) => {
    const { fileUpload } = homePage;
    const filePaths = [
      path.join(FIXTURES_DIR, 'sample.txt'),
      path.join(FIXTURES_DIR, 'sample2.txt'),
    ];

    await fileUpload.uploadMultipleFiles(filePaths);

    await expect(fileUpload.multipleFilesStatus).toContainText('sample.txt');
    await expect(fileUpload.multipleFilesStatus).toContainText('sample2.txt');
  });
});
