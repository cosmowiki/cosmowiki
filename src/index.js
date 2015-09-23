import React from 'react';
import 'babel/polyfill';

const rerender = (siteComponent) => {
  React.render(<Page siteComponent={siteComponent} />, document.getElementById('app'));
};

import {parse as parseUrl} from 'url';
import Chronicle from './lexicon/chronicle';
import People from './lexicon/people';
import Astronomers from './lexicon/astronomers';
import Astronauts from './lexicon/astronauts';

window.addEventListener('hashchange', ({newURL: newUrl}) => {
  processUrl(newUrl);  
});

function processUrl(url) {
  const parsedUrl = parseUrl(url);
  if (parsedUrl && parsedUrl.hash && parsedUrl.hash.startsWith('#/')) {
    if (parsedUrl.hash.match(/^#\/chronicle/)) {
      Chronicle.componentWithData((chronicleComponent) => {
        rerender(chronicleComponent);
      });
    }
    if (parsedUrl.hash.match(/^#\/people/)) {
      People.componentWithData((peopleComponent) => {
        rerender(peopleComponent);
      });
    }
    if (parsedUrl.hash.match(/^#\/astronomers/)) {
      Astronomers.componentWithData((component) => {
        rerender(component);
      });
    }
    if (parsedUrl.hash.match(/^#\/astronauts/)) {
      Astronauts.componentWithData((component) => {
        rerender(component);
      });
    }
  } else {
    rerender(<Home appUrl={appUrl} />);
  }
}

processUrl(window.location.href);
