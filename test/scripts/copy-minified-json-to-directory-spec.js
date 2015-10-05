import assert from 'assert';
import sinon from 'sinon';
import {
  promiseThat,
  assertThat,
  fulfilled,
  isFulfilledWith
} from 'hamjest';

describe('', function() {

  let readFile;
  
  class File {}
  
  class JsonFile {
    constructor(readFile) {
      this.readFile = readFile;
      this.file = null;
    }
    read(file) {
      this.file = this.readFile(file);
      return this;
    }
    minify() {
      this.file = this.file.then(content => JSON.stringify(JSON.parse(content)));
      return this;
    }
  }
  
  describe('reads the file', function() {
    
    function readJsonFile(file) {
      return new JsonFile(readFile).read(file).minify().file;
    }
    
    it('and minifies the JSON', function() {
      const payload = {a:1};
      const beautifiedJson = JSON.stringify(payload, null, 4);
      const minifiedJson = JSON.stringify(payload);
      readFile = () => Promise.resolve(beautifiedJson);
      
      return promiseThat(readJsonFile(), isFulfilledWith(minifiedJson));
    });
    
    it('from the given path', function() {
      const payload = {a:1};
      const beautifiedJson = JSON.stringify(payload, null, 4);
      const file = new File();
      readFile = sinon.stub();
      readFile.returns(Promise.resolve(beautifiedJson));
      
      readJsonFile(file);
      
      sinon.assert.calledWith(readFile, file);
    });

  });

  describe('writes minified file to given ', function() {
    
  });
  
  
});
