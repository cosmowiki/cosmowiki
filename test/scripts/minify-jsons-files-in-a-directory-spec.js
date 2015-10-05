import assert from 'assert';
import sinon from 'sinon';
import {
  assertThat,
  hasItem,
  containsString,
  equalTo
} from 'hamjest';

assert.calledWith = sinon.assert.calledWith;

import JsonFilesFromDirectory from '../../src/scripts/json-file-finder';

function findJsonFilesInDirectory(findFilesInDirFunction, directoryName) {
  return new JsonFilesFromDirectory(findFilesInDirFunction).findAll(directoryName);
}



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
    const fileNames = ['file1.js', 'file2.json', 'file3.json', 'nojson.txt'];
    const findFilesInDirFunction = sinon.stub();
    findFilesInDirFunction.returns(fileNames);
    
    const foundFiles = findJsonFilesInDirectory(findFilesInDirFunction, directoryName);

    const expectedFileNames = [`${directoryName}/${fileNames[1]}`, `${directoryName}/${fileNames[2]}`];
    assertThat(foundFiles, equalTo(expectedFileNames));  
  });
});
