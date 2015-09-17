import assert from 'assert';
import {useOfflineUrls, OFFLINE_PATH_PREFIX} from '../../src/scripts/make-urls-offline';
import hamjest from 'hamjest';

describe('modify the dist/index.html file to work offline', function() {

  let indexHtmlContent;
  beforeEach(function() {
    indexHtmlContent = `
  <title>ES6 workshop</title>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.js"></script>
  <title>CosmoWiki.de | die Online-Enzyklop&auml;die &uuml;ber Astronomie und Raumfahrt</title>
  <link rel="stylesheet" href="//yui.yahooapis.com/pure/0.6.0/pure-min.css">
  <link rel="stylesheet" href="//yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
`;
  });
  describe('replace `//cdnjs...` with `../for-offline/`', function() {
    let replaced;
    beforeEach(function() {
      replaced = useOfflineUrls(indexHtmlContent);
    });
    it('removes `cdnjs` URLs', function() {
      hamjest.assertThat(replaced, hamjest.not(hamjest.containsString('//cdnjs.cloudflare')));
    });
    it('puts `../vendor/` in its place', function() {
      hamjest.assertThat(replaced, hamjest.containsString(OFFLINE_PATH_PREFIX + '/react/0.13.3'));
    });
  });

  describe('replaces `yui.yahooapis...` with `../for-offline/`', function() {
    let replaced;
    beforeEach(function() {
      replaced = useOfflineUrls(indexHtmlContent);
    });
    it('removes the YUI URL', function() {
      hamjest.assertThat(replaced, hamjest.not(hamjest.containsString('//yui.yahooapis.com/')));
    });
    it('puts `../for-offline/` in its place', function() {
      hamjest.assertThat(replaced, hamjest.containsString(OFFLINE_PATH_PREFIX + '/pure/0.6.0'));
    });
  });

  describe('replace `//maxcdn.bootstrapcdn.com`', function() {
    let replaced;
    beforeEach(function() {
      replaced = useOfflineUrls(indexHtmlContent);
    });
    it('contains no online URL anymore', function() {
      hamjest.assertThat(replaced, hamjest.not(hamjest.containsString('//maxcdn.bootstrapcdn.com/font-awesome/4.4.0')));
    });
    it('replaces the online with the offline url', function() {
      hamjest.assertThat(replaced, hamjest.containsString(OFFLINE_PATH_PREFIX + '/font-awesome/4.4.0'));
    });
  });
  
});
