import {readFileSync} from '../../src/_external-deps/read-file-sync';

export default class MinifyJson {
  
  constructor(readFileFunction = readFileSync) {
    this.readFileFunction = readFileFunction;
  }
  
  fromFile(fileName) {
    const fileContent = this.readFileFunction(fileName);
    return MinifyJson.fromString(fileContent);
  }
  
  static fromString(data) {
    return JSON.stringify(JSON.parse(data));
  }
  
}