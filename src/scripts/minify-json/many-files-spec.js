/* global describe, it, beforeEach, __dirname */
import fs from 'fs';
import path from 'path';
import assert from 'power-assert';

import {
  assertThat, everyItem, hasItem, instanceOf, hasProperty, containsString,
  promiseThat, is, fulfilled, rejected, isFulfilledWith,
  isRejectedWith
} from 'hamjest';
import {
  fromPath, toPath, jsonFiles, nonJsonFile,
  unlinkFilesInDirectory
} from './helpers';
import {makeFileInDestPath} from './matchers';
import {convertManyFiles} from './many-files';
import {
  InvalidSourceFile, InvalidDirectory
} from './errors';

const fileInDestPath = makeFileInDestPath(toPath);

describe('convert multiple files', () => {
  
  let promise;
  
  beforeEach(() => {
    unlinkFilesInDirectory(toPath, jsonFiles);
  });
  
  describe('all JSON files', () => {

    beforeEach(() => {
      promise = convertManyFiles(fromPath, jsonFiles, toPath);
    });

    it('fulfills', () => {
      return promiseThat(promise, is(fulfilled()));
    });
    
    it('fulfills when all are copied', () => {      
      return promise.then(() => {
        assertThat(jsonFiles, everyItem(fileInDestPath(is(true))));
      });
    });

    it('fulfills with each file name as result', function() {
      const fileNames = jsonFiles.map(fileName => path.join(toPath, fileName));
      return promiseThat(promise, isFulfilledWith(fileNames));
    });
    
  });
  
  describe('contains non-JSON file(s)', () => {
    const includesNonJsonFile = [...jsonFiles, nonJsonFile];
    
    beforeEach(() => {
      promise = convertManyFiles(fromPath, includesNonJsonFile, toPath);
    });

    it('fulfills', () => {
      return promiseThat(promise, is(fulfilled()));
    });
        
    it('fulfills when all JSON files are copied', () => {
      return promise.then(() => {
        assertThat(jsonFiles, everyItem(fileInDestPath(is(true))));
      });
    });

  });

  describe('invalid file name (should still succeed and not stop the conversion process)', function() {

    const invalidFileNames = ['not-existing.file', ...jsonFiles];
    let promise;
    
    beforeEach(function() {
      promise = convertManyFiles(fromPath, invalidFileNames, toPath);
    });
    
    it('fulfills with `InvalidSourceFile`', function() {
      return promiseThat(promise, isFulfilledWith(hasItem(instanceOf(InvalidSourceFile))));
    });
    
    it('fulfills with fileName in the message', function() {
      return promiseThat(promise, isFulfilledWith(hasItem(hasProperty('message', containsString(invalidFileNames[0])))));
    });
    
  });
  
  describe('invalid `fromPath`', function() {

    const invalidPath = path.join(fromPath, 'invalid/path');
    let promise;

    beforeEach(function() {
      promise = convertManyFiles(invalidPath, jsonFiles, toPath);
    });
    
    it('rejects', function() {
      return promiseThat(promise, rejected());
    });
    
    it('rejects with InvalidDirectory', function() {
      return promiseThat(promise, isRejectedWith(instanceOf(InvalidDirectory)));
    });
    
    it('reject message contains the invalid dir', function() {
      return promiseThat(promise, isRejectedWith(hasProperty('message', containsString(invalidPath))));
    });
    
  });
  
});
