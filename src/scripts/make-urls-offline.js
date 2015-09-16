export function useOfflineUrls(s) {
  return s
    .replace('//cdnjs.cloudflare.com/ajax/libs/', '../vendor/')
    .replace('//yui.yahooapis.com/', '../vendor/');
}

