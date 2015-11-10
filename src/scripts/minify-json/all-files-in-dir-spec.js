import fs from 'fs';
import promisify from 'es6-promisify';
import {
  hasItems,
  promiseThat, isFulfilledWith
} from 'hamjest';
import {
  fromPath, fileNames
} from './helpers';

describe('all files in a dir', function() {
  
  it('finds all files', function() {
    const promise = withAllFilesInDir(fromPath);
    const files = fileNames.json;
    return promiseThat(promise, isFulfilledWith(hasItems(...files)));
  });
  
});

function withAllFilesInDir(fromPath) {
  return promisify(fs.readdir)(fromPath);
}