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

function minifyJson(content) {
  return JSON.stringify(JSON.parse(content));
}
