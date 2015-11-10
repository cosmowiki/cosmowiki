export class InvalidFile {
  constructor(fileName) {
    this.message = `Invalid file "${fileName}".`;
  }
}

export class InvalidDirectory extends Error {
  constructor(directoryName) {
    super();
    this.message = `Invalid directory "${directoryName}"`;
  }
}