export function minifyJsonFile(readFileFn, fileName) {
  const minifyJson = new MinifyJson(readFileFn);
  return minifyJson.fromFile(fileName);
}

class MinifyJson {
  
  constructor(readFileFunction) {
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