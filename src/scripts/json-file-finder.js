import {join as pathJoin} from 'path';

export function findJsonFilesInDirectory(findFilesInDirFunction, directoryName) {
  const jsonFile = fileName => fileName.endsWith('.json');
  const completeFileName = fileName => pathJoin(directoryName, fileName);
  
  return findFilesInDirFunction(directoryName)
    .filter(jsonFile)
    .map(completeFileName);
}