import assert from 'assert';
import sinon from 'sinon';
import {
  assertThat,
  hasItem,
  containsString
} from 'hamjest';

assert.calledWith = sinon.assert.calledWith;

describe('find all JSON files in a directory', function() {
  it('return only JSON files', function() {
    const directoryName = 'some dir';
    const fileNames = ['file1.json', 'nojson.txt'];
    const findFilesInDirFunction = sinon.stub();
    findFilesInDirFunction.returns(fileNames);
    
    const foundFiles = findJsonFilesInDirectory(findFilesInDirFunction, directoryName);
    
    assertThat(foundFiles, hasItem(containsString(fileNames[0])));
  });
  
  it('searches in the right directory', function() {
    const directoryName = 'some dir';
    const fileNames = ['file1.json', 'nojson.txt'];
    const findFilesInDirFunction = sinon.stub();
    findFilesInDirFunction.returns(fileNames);
    
    findJsonFilesInDirectory(findFilesInDirFunction, directoryName);
    
    assert.calledWith(findFilesInDirFunction, directoryName);
  });

  it('returns the complete path for each file', function() {
    const directoryName = 'some dir';
    const fileNames = ['file1.json', 'nojson.txt'];
    const findFilesInDirFunction = sinon.stub();
    findFilesInDirFunction.returns(fileNames);
    
    const foundFiles = findJsonFilesInDirectory(findFilesInDirFunction, directoryName);

    const expectedFileName = `${directoryName}/${fileNames[0]}`;
    assertThat(foundFiles, hasItem(expectedFileName));  
  });
});

import {join as pathJoin} from 'path';
function findJsonFilesInDirectory(findFilesInDirFunction, directoryName) {
  const completeFileName = pathJoin(directoryName, findFilesInDirFunction(directoryName)[0]);
  return [completeFileName];
}