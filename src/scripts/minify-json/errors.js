export class InvalidFile extends Error {
  constructor(fileName) {
    super();
    this.message = `Invalid file "${fileName}".`;
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
  constructor() {
    super();
    this.message = 'No valid JSON content.';
  }
}
