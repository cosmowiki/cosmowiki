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
  InvalidFile, NoValidJsonStringError
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

  describe('fails', () => {
  
    const validJsonFile = path.join(fromPath, 'stars.json');
    const invalidDestFile = path.join(toPath, 'not-a-directory', 'stars.json');
  
    it('for a not existing file', () => {
      const promise = convertOneFile(notExistingFile, '');
      return promiseThat(promise, is(rejected()));
    });
  
    it('for a non-JSON file with NoValidJsonStringError', () => {
      const promise = convertOneFile(nonJsonFile, '');
      return promiseThat(promise, isRejectedWith(instanceOf(NoValidJsonStringError)));
    });
  
    it('for an invalid destination path', () => {
      const promise = convertOneFile(validJsonFile, invalidDestFile);
      return promiseThat(promise, is(rejected()));
    });

    describe('for an not-existing file name', function() {

      const notExistingFile = path.join(fromPath, 'not-existing.file');
      let promise; 
      
      beforeEach(function() {
        promise = convertOneFile(notExistingFile, invalidDestFile);
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

});
