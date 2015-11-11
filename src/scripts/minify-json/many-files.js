import fs from 'fs';
import path from 'path';
import promisify from 'es6-promisify';
import {convertOneFile} from './one-file';
import {
  InvalidSourceFile, InvalidDirectory, InvalidJsonString
} from './errors';

export function convertManyFiles(fromPath, fileNames, toPath) {
  const allFiles = convertAllFiles(fromPath, fileNames, toPath);
  
  const checkFromPath = 
    checkPathExists(fromPath)
      .catch(() => {throw new InvalidDirectory(fromPath);});
  
  const checkToPath = () =>
    checkPathExists(toPath)
      .catch(() => {throw new InvalidDirectory(toPath);});
  
  const convertEm = () =>
    Promise.all(filterConversions(allFiles));
  
  return checkFromPath
    .then(checkToPath)
    .then(convertEm)
  ;
}

export class Result {
  
  constructor() {
    this.fileName = null;
  }
  
  static convertedFile(fileName) {
    const result = new Result();
    result.fileName = fileName;
    return result;
  }
  
} 

const checkPathExists = aPath => promisify(fs.access)(aPath, fs.R_OK);

function convertAllFiles(fromPath, fileNames, toPath) {
  const fromFileName = fileName => path.join(fromPath, fileName);
  const toFileName = fileName => path.join(toPath, fileName);
  
  return fileNames.map(fileName => {
    const destFileName = toFileName(fileName);
    return convertOneFile(fromFileName(fileName), destFileName)
      .then(() => Result.convertedFile(destFileName))
    }
  );
}

const filterConversions = allFiles => 
  allFiles.map(filterOutErrorsToIgnore);

const filterOutErrorsToIgnore = file => file
  .catch(errorGuard)
  .then(x => x);

const errorGuard = reason => {
  if (reason instanceof InvalidSourceFile) return reason;
  if (reason instanceof InvalidJsonString) return reason;
};
