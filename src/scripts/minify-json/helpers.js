import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = path.join(__dirname, '../../../');

export const fromPath = path.join(PROJECT_ROOT, 'data');
export const toPath = path.join(PROJECT_ROOT, 'dist/data');
export const paths = {
  from: fromPath,
  to: toPath
};

export const fileNames = {
  json: ['stars.json', 'people.json'],
  nonJson: ['README.md'],
  invalid: ['not-an-existing-file']
};

export const completeFileNames = {
  json: {
    from: fileNames.json.map(name => path.join(paths.from, name)),
    to: fileNames.json.map(name => path.join(paths.to, name))
  },
  notExisting: fileNames.invalid.map(name => path.join(PROJECT_ROOT, name)),
  nonJson: fileNames.nonJson.map(name => path.join(PROJECT_ROOT, name)),
  invalidDestination: [path.join(paths.to, 'not-a-directory', 'invalid.file')]
};

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
