import fs from 'fs';
import path from 'path';
import promisify from 'es6-promisify';
import {convertOneFile} from './one-file';
import {
  InvalidSourceFile, InvalidDirectory, InvalidJsonString
} from './errors';

export function convertManyFiles(fromPath, fileNames, destPath) {
  const allFiles = convertAllFiles(fromPath, fileNames, destPath);
  
  const checkFromPath = 
    checkPathExists(fromPath)
      .catch(() => {throw new InvalidDirectory(fromPath);});
  
  const checkToPath = () =>
    checkPathExists(destPath)
      .catch(() => {throw new InvalidDirectory(destPath);});
  
  //const convertAllFiles
  
  return checkFromPath
    .then(checkToPath)
    .then(() => Promise.all(filterConversions(allFiles)))
  ;
}

const checkPathExists = aPath => promisify(fs.access)(aPath, fs.R_OK);

function convertAllFiles(fromPath, fileNames, destPath) {
  const fromFileName = fileName => path.join(fromPath, fileName);
  const toFileName = fileName => path.join(destPath, fileName);
  return fileNames.map(fileName => {
    const destFileName = toFileName(fileName);
    return convertOneFile(fromFileName(fileName), destFileName)
      .then(() => destFileName)
    }
  );
}

const filterConversions = allFiles => allFiles.map(filterOutErrorsToIgnore);
const filterOutErrorsToIgnore = file => file
  .catch(errorGuard)
  .then(x => x);


const errorGuard = reason => {
  if (reason instanceof InvalidSourceFile) return reason;
  if (reason instanceof InvalidJsonString) return reason;
};
