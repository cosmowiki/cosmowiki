import fs from 'fs';
import path from 'path';

import {
  FeatureMatcher
} from 'hamjest';


export function makeFileInDestPath(destPath) {
  const fileExistsInDestPath = fileName => fs.existsSync(path.join(destPath, fileName));
  return matcherOrValue => new FeatureMatcher(matcherOrValue, 'file in destPath', 'is file', fileExistsInDestPath);
}
