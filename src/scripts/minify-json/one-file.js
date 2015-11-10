import fs from 'fs';
import path from 'path';
import promisify from 'es6-promisify';
import {
  InvalidFile,
  InvalidJsonString
} from './errors';

export function convertOneFile(fileName, destFileName) {
  const fileReadPromise = promisify(fs.readFile);
  const fileWritePromise = promisify(fs.writeFile);
  return fileReadPromise(fileName)
    .then(fileContent => 
      fileWritePromise(destFileName, minifyJson(fileContent))
    )
    .catch(reason => {
      if (reason instanceof InvalidJsonString) throw reason;
      throw new InvalidFile(reason.path);
    }
    );
}

function minifyJson(content) {
  try {
    return JSON.stringify(JSON.parse(content));
  } catch (e) {
    throw new InvalidJsonString();
  }
}
