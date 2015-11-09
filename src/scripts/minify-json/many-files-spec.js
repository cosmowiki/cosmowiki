/* global describe, it, beforeEach, __dirname */
import fs from 'fs';
import path from 'path';
import assert from 'power-assert';

import {
  assertThat, everyItem,
  promiseThat, is, fulfilled, rejected,
  isRejectedWith
} from 'hamjest';
import {
  fromPath, toPath, jsonFiles, nonJsonFile,
  unlinkFilesInDirectory
} from './helpers';
import {makeFileInDestPath} from './matchers';
import {convertManyFiles} from './many-files';

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

});
