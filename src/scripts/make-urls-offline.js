export const OFFLINE_PATH_PREFIX = '/for-offline';

export function useOfflineUrls(s) {
  const pathPrefix = OFFLINE_PATH_PREFIX + '/';
  return s
    .replace('//cdnjs.cloudflare.com/ajax/libs/', pathPrefix)
    .replace('//yui.yahooapis.com/', pathPrefix);
}

