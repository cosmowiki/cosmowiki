import path from 'path';

const PROJECT_ROOT = path.join(__dirname, '../../../');
export const fromPath = path.join(PROJECT_ROOT, 'data');
export const destPath = path.join(PROJECT_ROOT, 'dist/data');
export const jsonFiles = ['stars.json', 'people.json'];
export const nonJsonFile = path.join(PROJECT_ROOT, 'README.md');
export const notExistingFile = path.join(PROJECT_ROOT, 'not-an-existing-file');
