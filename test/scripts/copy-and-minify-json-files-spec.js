describe('given, a set of files', function() {

  let originalFiles;
  beforeEach(function() {
    const jsonFilePromise = Promise.resolve({fileName: '/file/name.json', content: '{}'});
    const txtFilePromise = Promise.resolve({fileName: '/file/name.txt', content: ' '});
    originalFiles = [
      jsonFilePromise,
      txtFilePromise
    ];
  });
  
  it('only the JSON files are returned', function() {
    
  });
  
  it('all JSON files get minified', function() {
    
  });
  
});