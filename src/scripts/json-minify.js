function minifyJson(data) {
  return JSON.stringify(JSON.parse(data));
}

export function minifyJsonFile(readFileFn, fileName) {
  return minifyJson(readFileFn(fileName));
}