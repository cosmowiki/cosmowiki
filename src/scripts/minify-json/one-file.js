import fs from 'fs';
import path from 'path';
import promisify from 'es6-promisify';
import {
  InvalidSourceFile,
  InvalidJsonString,
  InvalidDestinationFile
} from './errors';

const fileReadPromise = promisify(fs.readFile);
const fileWritePromise = promisify(fs.writeFile);

export function convertOneFile(fileName, destFileName) {
  const readFile = 
    fileReadPromise(fileName)
      .catch(reason => {throw new InvalidSourceFile(reason.path)});
  
  const minify = fileContent =>
    minifyJson(fileContent)
      .catch(() => {throw new InvalidJsonString(fileName)});
  
  const writeFile = minifiedJson => 
    fileWritePromise(destFileName, minifiedJson)
      .catch(reason => {throw new InvalidDestinationFile(reason.path)});
  
  return readFile
    .then(minify)
    .then(writeFile);
}

const minifyJson = content => 
  new Promise((resolve, reject) => {
    try {
      resolve(JSON.stringify(JSON.parse(content)));
    } catch (e) {
      reject(e);
    }
  });
