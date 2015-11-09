import fs from 'fs';
import path from 'path';
import promisify from 'es6-promisify';
import {InvalidFile} from './invalid-file';

export function convertOneFile(fileName, destFileName) {
  const fileReadPromise = promisify(fs.readFile);
  const fileWritePromise = promisify(fs.writeFile);
  return fileReadPromise(fileName)
    .then(fileContent => 
      fileWritePromise(destFileName, minifyJson(fileContent))
    )
    .catch(reason => {throw new InvalidFile(reason.path);}
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
