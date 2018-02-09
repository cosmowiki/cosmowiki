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

      // remove the coordinates, which some articles have
      $('#coordinates').remove();
      $('.geo.noexcerpt').remove();

      $('.mw-editsection').remove(); // remove the edit controls
      $('.reference').remove(); // remove all foot notes
      $('table').remove(); // inline tables are useless

      // remove content at the bottom which we dont need
      $('.printfooter').remove();
      $('#catlinks').remove();
      $('noscript').remove();

      cb(null, $('#mw-content-text'));
    }
  });
};

module.exports = f;
