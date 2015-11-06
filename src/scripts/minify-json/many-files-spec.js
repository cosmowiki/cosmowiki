/* global describe, it, beforeEach, __dirname */
import assert from 'power-assert';
import {
  assertThat, everyItem,
  promiseThat, is, fulfilled, rejected,
  isRejectedWith,
  FeatureMatcher
  } from 'hamjest';
import {convertManyFiles} from './many-files';
import fs from 'fs';
import path from 'path';
 
describe('convert multiple files', () => {
  
  const fromPath = path.join(__dirname, '../../../data');
  const destPath = path.join(__dirname, '../../../dist/data');
  const jsonFiles = ['stars.json', 'people.json'];
  
  const fileExistsInDestPath = fileName => fs.existsSync(path.join(destPath, fileName));
  const fileInDestPath = matcherOrValue => new FeatureMatcher(matcherOrValue, 'file in destPath', 'is file', fileExistsInDestPath);
  
  let promise;
  
  beforeEach(() => {
    jsonFiles.forEach(fileName => {
      const destFile = path.join(destPath, fileName);
      if (fs.existsSync(destFile)) fs.unlinkSync(destFile);
    });
  });
  
  describe('all JSON files', () => {

    beforeEach(() => {
      promise = convertManyFiles(fromPath, jsonFiles, destPath);
    });

    it('fulfills', () => {
      return promiseThat(promise, is(fulfilled()));
    });
    
    it('fulfills when all are copied', () => {      
      return promise.then(() => {
        assertThat(jsonFiles, everyItem(fileInDestPath(is(true))));
      });
    });

  });
  
  describe('contains non-JSON file(s)', () => {
    const nonJsonFile = path.join(__dirname, '../../../README.md');
    const includesNonJsonFile = [...jsonFiles, nonJsonFile];
    
    beforeEach(() => {
      promise = convertManyFiles(fromPath, includesNonJsonFile, destPath);
    });

    it('fulfills', () => {
      return promiseThat(promise, is(fulfilled()));
    });
        
    it('fulfills when all are copied', () => {
      return promise.then(() => {
        assertThat(jsonFiles, everyItem(fileInDestPath(is(true))));
      });
    });
    
  });
    
});
