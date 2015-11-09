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
  if (reason instanceof InvalidFile) return reason;
  if (reason instanceof NoValidJsonStringError) throw reason;
  return true;
};
