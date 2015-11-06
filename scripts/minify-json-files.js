import fs from 'fs';
import path from 'path';
import promisify from 'es6-promisify';

export function convertOneFile(fileName, destFileName) {
  const fileReadPromise = promisify(fs.readFile);
  const fileWritePromise = promisify(fs.writeFile);
  return fileReadPromise(fileName).then(fileContent => 
    fileWritePromise(destFileName, minifyJson(fileContent))
  );
}

export class NoValidJsonStringError extends Error {
  constructor() {
    super();
    this.message = 'No valid JSON content.';
  }
}

function minifyJson(content) {
  try {
    return JSON.stringify(JSON.parse(content));
  } catch (e) {
    throw new NoValidJsonStringError();
  }
}


function convertAllFiles(fromPath, fileNames, destPath) {
  const fromFileName = fileName => path.join(fromPath, fileName);
  const toFileName = fileName => path.join(destPath, fileName);
  return fileNames.map(fileName => convertOneFile(fromFileName(fileName), toFileName(fileName)));
}

const canBeIgnored = reason => reason instanceof NoValidJsonStringError;
const ignoreInvalidJsonErrors = reason => { 
  if (canBeIgnored(reason)) throw reason;
  else return true;
};
const filterOutErrorsToIgnore = file => file.catch(ignoreInvalidJsonErrors)  
const filterConversions = allFiles => allFiles.map(filterOutErrorsToIgnore);

export function convertManyFiles(fromPath, fileNames, destPath) {
  const allFiles = convertAllFiles(fromPath, fileNames, destPath);  
  return Promise.all(filterConversions(allFiles));
}
