import path from 'path';
import {
  convertOneFile, NoValidJsonStringError
} from './one-file';
import {InvalidFile} from './invalid-file';

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
const filterOutErrorsToIgnore = file => file.catch(errorGuard);


const errorGuard = reason => {
  if (reason instanceof InvalidFile) return reason;
  if (reason instanceof NoValidJsonStringError) throw reason;
  return true;
};
