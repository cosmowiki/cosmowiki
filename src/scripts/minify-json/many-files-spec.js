/* global describe, it, beforeEach, __dirname */
import path from 'path';

import {
  assertThat, everyItem, hasItem, instanceOf, hasProperty, containsString, contains,
  promiseThat, is, fulfilled, rejected, isFulfilledWith,
  isRejectedWith
} from 'hamjest';
import {
  fileNames, completeFileNames,
  fromPath, toPath,
  unlinkFilesInDirectory
} from './helpers';
import {makeFileInDestPath} from './matchers';
import {convertManyFiles, Result} from './many-files';
import {
  InvalidSourceFile, 
  InvalidDirectory,
  InvalidJsonString
} from './errors';

import mkdirp from 'mkdirp';
mkdirp(toPath); // TODO we should get to not needing this, the tests currently use the filesystem :(

const fileInDestPath = makeFileInDestPath(toPath);

describe('convert multiple files', () => {
  
  let convert;
  const jsonFiles = fileNames.json;
  
  beforeEach(() => {
    unlinkFilesInDirectory(toPath, jsonFiles);
  });
  
  describe('all JSON files', () => {

    const convert = () => convertManyFiles(fromPath, jsonFiles, toPath);

    it('fulfills', () => {
      return promiseThat(convert(), is(fulfilled()));
    });
    
    it('fulfills when all are copied', () => {
      return convert().then(() => {
        assertThat(jsonFiles, everyItem(fileInDestPath(is(true))));
      });
    });

    describe('fulfills with each conversion', function() {
      
      const fileNames = jsonFiles.map(fileName => path.join(toPath, fileName));
      
      it('as a result object', function() {
        return promiseThat(convert(), isFulfilledWith(everyItem(instanceOf(Result))));
      });

      it('contains the fileName', function() {
        // I am sure this matcher can be written better
        return convert().then(results => {
          fileNames.forEach(fileName => 
            assertThat(results, hasItem(hasProperty('fileName', fileName)))
          );
        });
      });
      
    });
    
  });
  
  describe('contains non-JSON file(s)', () => {
    
    const includesNonJsonFile = [...fileNames.json, ...fileNames.nonJson];
    const convert = () => convertManyFiles(fromPath, includesNonJsonFile, toPath);

    it('fulfills', () => {
      return promiseThat(convert(), is(fulfilled()));
    });
        
    it('fulfills when all JSON files are copied', () => {
      return convert().then(() => {
        assertThat(jsonFiles, everyItem(fileInDestPath(is(true))));
      });
    });

    it('fulfills with all converted file names and the InvalidJsonString error', () => {
      const expected = [
        ...completeFileNames.json.to.map(fileName => Result.convertedFile(fileName)),
        instanceOf(InvalidJsonString)
      ];
      
      return promiseThat(convert(), isFulfilledWith(contains(...expected)));
    });

  });

  describe('invalid file name (should still succeed and not stop the conversion process)', function() {

    const invalidFileNames = ['not-existing.file', ...jsonFiles];

    const convert = () => convertManyFiles(fromPath, invalidFileNames, toPath);

    it('fulfills with `InvalidSourceFile`', function() {
      return promiseThat(convert(), isFulfilledWith(hasItem(instanceOf(InvalidSourceFile))));
    });
    
    it('fulfills with fileName in the message', function() {
      return promiseThat(convert(), isFulfilledWith(hasItem(hasProperty('message', containsString(invalidFileNames[0])))));
    });
    
  });
  
  describe('invalid `fromPath`', function() {

    const invalidPath = path.join(fromPath, 'invalid/path');
    const convert = () => convertManyFiles(invalidPath, jsonFiles, toPath);

    it('rejects with InvalidDirectory', function() {
      return promiseThat(convert(), isRejectedWith(instanceOf(InvalidDirectory)));
    });
    
    it('reject message contains the invalid dir', function() {
      return promiseThat(convert(), isRejectedWith(hasProperty('message', containsString(invalidPath))));
    });
    
  });

  describe('invalid `toPath`', function() {
    
    const invalidPath = path.join(toPath, 'invalid/path');
    const convert = () => convertManyFiles(fromPath, jsonFiles, invalidPath);

    it('rejects with InvalidDirectory', function() {
      return promiseThat(convert(), isRejectedWith(instanceOf(InvalidDirectory)));
    });
    
    it('reject message contains the invalid dir', function() {
      return promiseThat(convert(), isRejectedWith(hasProperty('message', containsString(invalidPath))));
    });
    
  });
  
});
