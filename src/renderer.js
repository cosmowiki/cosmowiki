import React from 'react'
import AppUrl from './appurl'

let appUrl = new AppUrl();

const rerender = (siteComponent) => {
  const rendered = React.renderToString(<PageComponent siteComponent={siteComponent} appUrl={appUrl} />);
  return rendered;
};

import {parse as parseUrl} from 'url';
import PageComponent from './components/page';

import Home from './components/home';
import Chronicle from './lexicon/chronicle';
import People from './lexicon/people';
import Astronomers from './lexicon/astronomers';
import Astronauts from './lexicon/astronauts';

//window.addEventListener('hashchange', ({newURL: newUrl}) => {
//  renderSite(newUrl);  
//});

function renderSite(path, onDone) {
  const urlToComponent = {
    '/chronicle': Chronicle,
    '/people': People,
    '/astronomers': Astronomers,
    '/astronauts': Astronauts,
  };

  for (let urlStart in urlToComponent) {
    if (path.startsWith(urlStart)) {
      const componentClass = urlToComponent[urlStart];
      componentClass.componentWithData((component) => {
        onDone(rerender(component));
      });
      return;
    }
  }
  onDone(rerender(<Home appUrl={appUrl} />));
}

import fs from 'fs';
import mkdirp from 'mkdirp';
import {join as pathJoin} from 'path';

function renderAndStoreSite(path) {
  renderSite(path, renderedSite => {
    const pathToFile = pathJoin(__dirname, '../dist', path);
    mkdirp(pathToFile);
    fs.writeFileSync(pathJoin(pathToFile, 'index.html'), placeInsideIndexHtml(renderedSite));
  });
}

function placeInsideIndexHtml(content) {
  const indexHtml = fs.readFileSync(pathJoin(__dirname, 'index.html'), 'utf8');
  return indexHtml.replace('<div id="app"></div>', content);
}

renderAndStoreSite('/');
renderAndStoreSite('/chronicle');
renderAndStoreSite('/people');
renderAndStoreSite('/astronauts');
renderAndStoreSite('/astronomers');