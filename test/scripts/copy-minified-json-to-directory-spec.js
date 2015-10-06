import assert from 'assert';
import sinon from 'sinon';
import {
  promiseThat,
  assertThat,
  fulfilled,
  isFulfilledWith,
  allOf,
  equalTo,
  is,
  truthy,
  falsy
} from 'hamjest';

assert.called = sinon.assert.called;
assert.calledWith = sinon.assert.calledWith;

describe('', function() {

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
    
    const payload = {a:1};
    const beautifiedJson = JSON.stringify(payload, null, 4);
    const minifiedJson = JSON.stringify(payload);
    const file = new File();
    
    function readJsonFile(readFile, file) {
      return new JsonFile(readFile).read(file).minify().fileContent;
    }
    
    it('and minifies the JSON', function() {
      let readFile = () => Promise.resolve(beautifiedJson);

      const fileContent = readJsonFile(readFile);
      
      return promiseThat(fileContent, isFulfilledWith(minifiedJson));
    });
    
    it('from the given path', function() {
      let readFile = sinon.stub();
      readFile.returns(Promise.resolve(beautifiedJson));
      
      readJsonFile(readFile, file);
      
      assert.calledWith(readFile, file);
    });

  });

  describe('writes file content', function() {

    it('and returns a promise when done', function() {
      const fileContent = 'file content';
      const readFile = () => Promise.resolve(fileContent);
      const writeFile = sinon.stub();
      const file = new File();
      let jsonFile = new JsonFile(readFile, writeFile);
      
      return promiseThat(jsonFile.read().write(file), fulfilled());
    });

    it('to given path', function(done) {
      const fileContent = 'file content';
      const readFile = () => Promise.resolve(fileContent);
      const writeFile = sinon.stub();
      const file = new File();
      let jsonFile = new JsonFile(readFile, writeFile);
      
      //return promiseThat(jsonFile.read().write(file), allOf(fulfilled(), is(truthy(writeFile.calledWith(file, fileContent)))));
      
      jsonFile.read().write(file).then(() => {
        assert.calledWith(writeFile, file, fileContent);
        done();
      }).catch(() => {
        done(new Error('promise was rejected'));
      });
    });
    
  });
  
});
