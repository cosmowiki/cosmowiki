import assert from 'assert';
import {
  assertThat,
  everyItem,
  hasProperty,
  endsWith,
  hasSize,
  promiseThat, is, fulfilled, fulfilledWith,
  allOf, truthy
} from 'hamjest';

import fs from 'fs';
import path from 'path';

function convertOneFile(fileName, destFileName) {
  const fileReadPromise = new Promise(resolve => {
    fs.readFile(fileName, 'utf8', (error, content) => {
      if (!error) resolve(content);
    });
  });
  return fileReadPromise.then(fileContent => {
    return new Promise(resolve => {
      fs.writeFile(destFileName, minifyJson(fileContent), 'utf8', resolve);
    });
  });
}

function minifyJson(content) {
  return content;
  return JSON.stringify(JSON.parse(content));
}

describe('converting `stars.json`', () => {

  const destFile = path.join(__dirname, '../../dist/data/stars.json');
  const sourceFile = path.join(__dirname, '../../data/stars.json');
  let promise; 
 
  beforeEach(() => { 
    if (fs.existsSync(destFile)) fs.unlinkSync(destFile);
    promise = convertOneFile(sourceFile, destFile);
  });

  it('fulfills', () => {
    return promiseThat(promise, is(fulfilled()));
  });

  it('writes the destination file', () => {
    return promiseThat(promise,
      allOf(
        fulfilled(),
        truthy(fs.existsSync(destFile))
      )
    );
  });

});
