import {readFileSync} from '../../src/_external-deps/read-file-sync';
import {firstCommandLineArgument} from '../../src/_external-deps/command-line-arguments';

export default class MinifyJson {
  
  constructor(readFileFunction = readFileSync, firstCommandLineArgumentFunction = firstCommandLineArgument) {
    this.readFileFunction = readFileFunction;
    this.firstCommandLineArgumentFunction = firstCommandLineArgumentFunction;
  }
  
  fromFile(fileName = this.firstCommandLineArgumentFunction()) {
    const fileContent = this.readFileFunction(fileName);
    return MinifyJson.fromString(fileContent);
  }
  
  static fromString(data) {
    return JSON.stringify(JSON.parse(data));
  }
  
}