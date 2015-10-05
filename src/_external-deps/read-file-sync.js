import fs from 'fs';

export function readFileSync(fileName) {
  return fs.readFileSync(fileName, 'utf8');
}