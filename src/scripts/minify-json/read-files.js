import fs from 'fs';
import promisify from 'es6-promisify';

export function allFilesInDirectory(fromPath) {
  return promisify(fs.readdir)(fromPath);
}