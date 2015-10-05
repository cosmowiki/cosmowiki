import assert from 'assert';
import sinon from 'sinon';
import {
  minifyJson,
  minifyJsonFile
} from '../../src/scripts/json-minify';

assert.calledWith = sinon.assert.calledWith;

describe('minify json file', function() {
  
  const data = {data:[{x:1, y:2}]};
  const beautifiedJson = JSON.stringify(data, null, 4);
  const minifiedJson = JSON.stringify(data);
  const fileName = 'the file name, exact content is not relevant';
  
  it('read file and return minified content', function() {
    function readFileContentStub() { return beautifiedJson; }
    assert.equal(minifyJsonFile(readFileContentStub, fileName), minifiedJson);
  });

  it('reads the given file', function() {
    const readFileContentStub = sinon.stub();
    readFileContentStub.returns('{}');
    minifyJsonFile(readFileContentStub, fileName);
    
    assert.calledWith(readFileContentStub, fileName);
  });
});
