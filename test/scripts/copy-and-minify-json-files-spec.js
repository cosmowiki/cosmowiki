import assert from 'assert';
import {
  assertThat,
  everyItem,
  hasProperty,
  endsWith,
  hasSize,
  promiseThat, is, fulfilled, fulfilledWith,
  allOf
} from 'hamjest';

import fs from 'fs';
import path from 'path';

function convertOneFile(fileName, destFileName) {
  const fileReadPromise = new Promise(function(resolve, reject) {
    fs.readFile(fileName, 'utf8', (error, content) => {
      if (!error) resolve(content);

    });
  });
  return fileReadPromise.then((fileContent) => {
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

  it('write the destination file', () => {
    return promiseThat(promise, is(allOf(fulfilled(), is(fs.existsSync(destFile)))));
  });

  it('is minified', (done) => {
    convertOneFile(sourceFile, destFile).then(() => {
      const jsonFile = fs.readFileSync(destFile);
      assert.equal(jsonFile, JSON.stringify(JSON.parse(jsonFile)));
      done();
    }).catch(done => done(new Error('convert threw')));
  });

});
