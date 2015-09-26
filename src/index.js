import 'babel/polyfill';

//const rerender = (siteComponent) => {
//  React.render(<Page siteComponent={siteComponent} />, document.getElementById('app'));
//};
//
//import {parse as parseUrl} from 'url';
//import Chronicle from './lexicon/chronicle';
//import People from './lexicon/people';
//import Astronomers from './lexicon/astronomers';
//import Astronauts from './lexicon/astronauts';
//
//window.addEventListener('hashchange', ({newURL: newUrl}) => {
//  processUrl(newUrl);  
//});
//
//function processUrl(url) {
//  const parsedUrl = parseUrl(url);
//  if (parsedUrl && parsedUrl.hash && parsedUrl.hash.startsWith('#/')) {
//    if (parsedUrl.hash.match(/^#\/chronicle/)) {
//      Chronicle.componentWithData((chronicleComponent) => {
//        rerender(chronicleComponent);
//      });
//    }
//    if (parsedUrl.hash.match(/^#\/people/)) {
//      People.componentWithData((peopleComponent) => {
//        rerender(peopleComponent);
//      });
//    }
//    if (parsedUrl.hash.match(/^#\/astronomers/)) {
//      Astronomers.componentWithData((component) => {
//        rerender(component);
//      });
//    }
//    if (parsedUrl.hash.match(/^#\/astronauts/)) {
//      Astronauts.componentWithData((component) => {
//        rerender(component);
//      });
//    }
//  } else {
//    rerender(<Home appUrl={appUrl} />);
//  }
//}
//
//processUrl(window.location.href);

import React from 'react'
import {parse as parseUrl} from 'url';

import AppUrl from './appurl'
import PageComponent from './components/page';

import Home from './sites/home';
import Chronicle from './sites/chronicle';
import People from './sites/people';
import Astronomers from './sites/astronomers';
import Astronauts from './sites/astronauts';

let appUrl = new AppUrl();

const rerender = (siteComponent) => {
  const rendered = React.renderToString(<PageComponent siteComponent={siteComponent} appUrl={appUrl} />);
  return rendered;
};

const urlToComponent = {
  '/chronicle': Chronicle,
  '/people': People,
  '/astronomers': Astronomers,
  '/astronauts': Astronauts,
  '/': Home
};

function renderSite(path, onDone) {

  for (let urlStart in urlToComponent) {
    if (path.startsWith(urlStart)) {
      const componentClass = urlToComponent[urlStart];
      componentClass.componentWithData((component) => {
        onDone(rerender(component));
      }, appUrl);
      return;
    }
  }
}

import fs from 'fs';
import mkdirp from 'mkdirp';
import {join as pathJoin} from 'path';
import {useOfflineUrls} from './scripts/make-urls-offline';

function renderAndStoreSite(forOffline, path) {
  renderSite(path, renderedSite => {
    const pathToFile = pathJoin(__dirname, '../dist', path);
    mkdirp(pathToFile);
    const destFile = pathJoin(pathToFile, 'index.html');
    let htmlContent = placeInsideIndexHtml(renderedSite);
    if (forOffline) {
      htmlContent = useOfflineUrls(htmlContent);
    }
    fs.writeFileSync(destFile, htmlContent);
    console.log(`generated "${path}" into "${destFile}" (${Math.ceil(htmlContent.length / 1024)} kB)`);
  });
}

function placeInsideIndexHtml(content) {
  const indexHtml = fs.readFileSync(pathJoin(__dirname, 'index.html'), 'utf8');
  return indexHtml.replace('<div id="app"></div>', content);
}

const renderForOffline = process.argv.includes('--for-offline=1');
const createStaticSites = process.argv.includes('--makes-static-sites');
if (createStaticSites) {
  Object.keys(urlToComponent).forEach(renderAndStoreSite.bind(null, renderForOffline));
}