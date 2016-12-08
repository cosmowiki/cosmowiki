const jsdom = require('jsdom');

const f = (context, cb) => {
  const wikipediaUrl = context.data['article-url'];
  jsdom.env({
    url: `${ wikipediaUrl }?printable=yes`,
    scripts: ['http://code.jquery.com/jquery.js'],
    done: (err, window) => {
      const $ = window.$;

      $('script').remove(); // remove all scripts
      $('.thumb').remove(); // remove all images
      $('#toc').remove(); // remove the TOC
      $('.mw-editsection').remove(); // remove the edit controls
      $('.reference').remove(); // remove all foot notes
      $('table').remove(); // inline tables are useless

      cb(null, $('#mw-content-text').text());
    }
  });
};

module.exports = f;
