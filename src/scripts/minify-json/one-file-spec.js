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
  InvalidSourceFile, 
  InvalidJsonString, 
  InvalidDestinationFile
} from './errors';
import {
  completeFileNames,
  unlinkFile
} from './helpers';


describe('convert one file', () => {
  
  describe('existing file `stars.json`', () => {
  
    const sourceFile = completeFileNames.json.from[0];
    const destFile = completeFileNames.json.to[0];
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

  describe('a source file', function() {

    describe('that does not exist', () => {
      
      const notExistingFile = completeFileNames.notExisting[0];
      let promise; 
      
      beforeEach(function() {
        promise = convertOneFile(notExistingFile, 'irrelevant');
      });
      
      it('fails', () => {
        return promiseThat(promise, isRejectedWith(instanceOf(InvalidSourceFile)));
      });
      
      it('rejects with correct message', function() {
        const message = `Invalid source file "${notExistingFile}".`;
        return promiseThat(promise, isRejectedWith(hasProperty('message', message)));
      });
      
    });
    
    it('that is a non-JSON file fails with InvalidJsonString', () => {
      const nonJsonFile = completeFileNames.nonJson[0];
      const promise = convertOneFile(nonJsonFile, '');
      return promiseThat(promise, isRejectedWith(instanceOf(InvalidJsonString)));
    });
    
  });

  it('an invalid destination path fails', () => {
    const validJsonFile = completeFileNames.json.from[0];
    const invalidDestFile = completeFileNames.invalidDestination[0];
    const promise = convertOneFile(validJsonFile, invalidDestFile);
    return promiseThat(promise, isRejectedWith(instanceOf(InvalidDestinationFile)));
  });

});
