import {join as pathJoin} from 'path';

export default class JsonFilesFromDirectory {
  
  constructor(findFilesInDirFunction) {
    this.findFilesInDirFunction = findFilesInDirFunction;
  }
  
  findAll(directoryName) {
    const jsonFile = fileName => fileName.endsWith('.json');
    const completeFileName = fileName => pathJoin(directoryName, fileName);
    
    return this.findFilesInDirFunction(directoryName)
      .filter(jsonFile)
      .map(completeFileName);
  }
  
}