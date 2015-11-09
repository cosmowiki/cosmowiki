import path from 'path';
import {
  convertOneFile, NoValidJsonStringError
} from './one-file';

export function convertManyFiles(fromPath, fileNames, destPath) {
  const allFiles = convertAllFiles(fromPath, fileNames, destPath);  
  return Promise.all(filterConversions(allFiles));
}

function convertAllFiles(fromPath, fileNames, destPath) {
  const fromFileName = fileName => path.join(fromPath, fileName);
  const toFileName = fileName => path.join(destPath, fileName);
  return fileNames.map(fileName => convertOneFile(fromFileName(fileName), toFileName(fileName)));
}

const filterConversions = allFiles => allFiles.map(filterOutErrorsToIgnore);
const filterOutErrorsToIgnore = file => file.catch(ignoreInvalidJsonErrors);  

const canBeIgnored = reason => reason instanceof NoValidJsonStringError;
const ignoreInvalidJsonErrors = reason => { 
  if (canBeIgnored(reason)) throw reason;
  else return true;
};
