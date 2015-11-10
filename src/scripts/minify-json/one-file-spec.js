/* global describe, it, beforeEach, __dirname */
import fs from 'fs';
import path from 'path';
import assert from 'power-assert';

import {
  assertThat, hasProperty,
  promiseThat, is, fulfilled, rejected,
  isRejectedWith, instanceOf
} from 'hamjest';
import {
  convertOneFile 
} from './one-file';
import {
  InvalidFile, InvalidJsonString
} from './errors';
import {
  fromPath, toPath, jsonFiles, nonJsonFile, notExistingFile,
  unlinkFile
} from './helpers';


describe('convert one file', () => {
  
  describe('existing file `stars.json`', () => {
  
    const destFile = path.join(toPath, 'stars.json');
    const sourceFile = path.join(fromPath, 'stars.json');
    let promise; 
  
    beforeEach(() => { 
      unlinkFile(destFile);
      promise = convertOneFile(sourceFile, destFile);
    });
  
    it('returns a promise that fulfills', () => {
      return promiseThat(promise, is(fulfilled()));
    });
  
    it('writes the destination file', () => {
      return promise.then(() => assert(fs.existsSync(destFile), 'Destination file missing.'));
    });
  
    it('is minified', () => {
      return promise.then(() => {
        const jsonFile = fs.readFileSync(destFile, 'utf8');
        assertThat(jsonFile, is(JSON.stringify(JSON.parse(jsonFile))))
      });
    });
    
  });

  it('a not existing file fails', () => {
    const promise = convertOneFile(notExistingFile, '');
    return promiseThat(promise, is(rejected()));
  });
  
  it('a non-JSON file fails with InvalidJsonString', () => {
    const promise = convertOneFile(nonJsonFile, '');
    return promiseThat(promise, isRejectedWith(instanceOf(InvalidJsonString)));
  });

  it('an invalid destination path fails', () => {
    const validJsonFile = path.join(fromPath, jsonFiles[0]);
    const invalidDestFile = path.join(toPath, 'not-a-directory', 'invalid.file');
    const promise = convertOneFile(validJsonFile, invalidDestFile);
    return promiseThat(promise, is(rejected()));
  });

  describe('for an not-existing file name', function() {

    const notExistingFile = path.join(fromPath, 'not-existing.file');
    let promise; 
    
    beforeEach(function() {
      promise = convertOneFile(notExistingFile, 'irrelevant');
    });
    
    it('rejects with InvalidFile', function() {
      return promiseThat(promise, isRejectedWith(instanceOf(InvalidFile)));
    });
    
    it('rejects with correct message', function() {
      const message = `Invalid file "${notExistingFile}".`;
      return promiseThat(promise, isRejectedWith(hasProperty('message', message)));
    });
    
  });

});
