export class InvalidSourceFile extends Error {
  constructor(fileName) {
    super();
    this.message = `Invalid source file "${fileName}".`;
    this.fileName = fileName;
  }
}

export class InvalidDestinationFile extends Error {
  constructor(fileName) {
    super();
    this.message = `Can not write to "${fileName}".`;
  }
}

export class InvalidDirectory extends Error {
  constructor(directoryName) {
    super();
    this.message = `Invalid directory "${directoryName}"`;
  }
}

export class InvalidJsonString extends Error {
  constructor(fileName) {
    super();
    this.message = 'No valid JSON content.';
    this.fileName = fileName;
  }
}
