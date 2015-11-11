import {allFilesInDirectory} from './minify-json/read-files';
import {convertManyFiles} from './minify-json/many-files';

const FROM_PATH_ARG = 2;
const TO_PATH_ARG = 3;
const fromPath = process.argv[FROM_PATH_ARG];
const toPath = process.argv[TO_PATH_ARG];

allFilesInDirectory(fromPath)
  .then(files => convertManyFiles(fromPath, files, toPath))
  .then(results => results.forEach(result => console.log(fromResult(result))))
  .catch(reason => console.log(reason));

const fromResult = result =>
  result instanceof Error ?
    `SKIP: ${result.fileName} (${result.message})`:
    `OK: ${result.fileName}`;