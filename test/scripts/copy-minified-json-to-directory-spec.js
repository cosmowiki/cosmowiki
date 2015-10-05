import assert from 'assert';
import sinon from 'sinon';
import {
  promiseThat,
  assertThat,
  fulfilled,
  isFulfilledWith
} from 'hamjest';

assert.called = sinon.assert.called;
assert.calledWith = sinon.assert.calledWith;

describe('', function() {

  let readFile;
  
  class File {}
  
  class JsonFile {
    constructor(readFile, writeFile) {
      this.readFile = readFile;
      this.writeFile = writeFile;
      this.fileContent = null;
    }
    read(file) {
      this.fileContent = this.readFile(file);
      return this;
    }
    minify() {
      this.fileContent = this.fileContent.then(content => JSON.stringify(JSON.parse(content)));
      return this;
    }
    write(file) {
      return this.fileContent.then(content => this.writeFile(file, content));
    }
  }
  
  describe('reads the file', function() {
    
    function readJsonFile(file) {
      return new JsonFile(readFile).read(file).minify().fileContent;
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
      
      assert.calledWith(readFile, file);
    });

  });

  describe('writes file content', function() {

    xit('to given path', function() {
      const fileContent = 'file content';
      const readFile = () => Promise.resolve(fileContent);
      const writeFile = sinon.stub();
      const file = new File();
      let jsonFile = new JsonFile(readFile, writeFile);
      
      return promiseThat(jsonFile.read().write(file), fulfilled());
      
      //assert.called(writeFile);
      //assert.calledWith(writeFile, file);
    });
    
  });
  
  
});
