/* global describe, it, beforeEach, __dirname */
import assert from 'power-assert';
import {
  assertThat, 
  promiseThat, is, fulfilled, rejected,
  allOf, truthy, everyItem,
  isRejectedWith, instanceOf,
  FeatureMatcher
  } from 'hamjest';
import {
  convertOneFile, 
  NoValidJsonStringError
  } from './one-file';
import fs from 'fs';
import path from 'path';

describe('convert one file', () => {
  
  describe('existing file `stars.json`', () => {
  
    const destFile = path.join(__dirname, '../../../dist/data/stars.json');
    const sourceFile = path.join(__dirname, '../../../data/stars.json');
    let promise; 
  
    beforeEach(() => { 
      if (fs.existsSync(destFile)) fs.unlinkSync(destFile);
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
  
    const validJsonFile = path.join(__dirname, '../../../data/stars.json');
    const notExistingFile = path.join(__dirname, '../../not-an-existing-file');
    const nonJsonFile = path.join(__dirname, '../../../README.md');
    const invalidDestFile = path.join(__dirname, '../../../dist/data/not-a-directory/stars.json');
  
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
  
  });
  
});
