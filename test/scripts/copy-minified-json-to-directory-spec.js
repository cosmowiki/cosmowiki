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

describe('read, minify and write a JSON file', function() {

  class File {}
  
  class JsonFile {
    constructor(readFile, writeFile) {
      this.readFile = readFile;
      this.writeFile = writeFile;
      this.fileContent = null;
    }
    readFrom(file) {
      this.fileContent = this.readFile(file);
      this.fileContent.then(JSON.parse)
        .catch();
      return this;
    }
    minify() {
      const minifyJson = content => JSON.stringify(JSON.parse(content));
      this.fileContent = this.fileContent.then(minifyJson);
    }
    writeTo(file) {
      return this.fileContent.then(content => this.writeFile(file, content));
    }
  }
  
  describe('reads the file', function() {
    
    const payload = {a:1};
    const beautifiedJson = JSON.stringify(payload, null, 4);
    const minifiedJson = JSON.stringify(payload);
    const fileStub = new File();
    
    function readJsonFile(readFile, file) {
      const jsonFile = new JsonFile(readFile);
      jsonFile.readFrom(file);
      return jsonFile.fileContent;
    }
    function readAndMinifyJsonFile(readFile, file) {
      const jsonFile = new JsonFile(readFile);
      jsonFile.readFrom(file);
      jsonFile.minify();
      return jsonFile.fileContent;
    }
    
    it('from the given path', function() {
      let readFile = sinon.stub();
      readFile.returns(Promise.resolve(beautifiedJson));
      
      readJsonFile(readFile, fileStub);
      
      assert.calledWith(readFile, fileStub);
    });

    it('invalid JSON fails', function() {
      let readFile = () => Promise.resolve('invalid JSON');

      const fileContent = readJsonFile(readFile, fileStub);
      
      return promiseThat(fileContent, isRejectedWith('Oops, invalid JSON data.'));
    });

    it('and minifies the JSON', function() {
      let readFile = () => Promise.resolve(beautifiedJson);

      const fileContent = readAndMinifyJsonFile(readFile);
      
      return promiseThat(fileContent, isFulfilledWith(minifiedJson));
    });

  });

  describe('writes file content', function() {

    const fileContent = 'file content';
    const readFile = () => Promise.resolve(fileContent);
    const writeFile = sinon.stub();
    const file = new File();
    
    it('and returns a promise when done', function() {
      let jsonFile = new JsonFile(readFile, writeFile);
      jsonFile.readFrom();
      
      return promiseThat(jsonFile.writeTo(file), fulfilled());
    });

    it('to given path', function(done) {
      let jsonFile = new JsonFile(readFile, writeFile);
      jsonFile.readFrom();
      
      // actually i think i want this!
      //return promiseThat(jsonFile.readFrom().writeTo(file), allOf(fulfilled(), is(truthy(writeFile.calledWith(file, fileContent)))));
      
      jsonFile.writeTo(file).then(() => {
        assert.calledWith(writeFile, file, fileContent);
        done();
      }).catch(() => {
        done(new Error('promise was rejected'));
      });
    });
    
  });
  
});
