import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = path.join(__dirname, '../../../');
export const fromPath = path.join(PROJECT_ROOT, 'data');
export const toPath = path.join(PROJECT_ROOT, 'dist/data');
export const jsonFiles = ['stars.json', 'people.json'];
export const nonJsonFile = path.join(PROJECT_ROOT, 'README.md');
export const notExistingFile = path.join(PROJECT_ROOT, 'not-an-existing-file');

export function unlinkFile(fileName) {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }
}

export function unlinkFilesInDirectory(destPath, jsonFiles) {
  jsonFiles.forEach(fileName => {
    const destFile = path.join(destPath, fileName);
    unlinkFile(destFile);
  });
}
