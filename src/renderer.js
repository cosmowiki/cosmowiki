import React from 'react'
import AppUrl from './appurl'

let appUrl = new AppUrl();

const rerender = (siteComponent) => {
  const rendered = React.renderToString(<PageComponent siteComponent={siteComponent} appUrl={appUrl} />);
  return rendered;
};

import {parse as parseUrl} from 'url';
import PageComponent from './components/page';

import HomeComponent from './components/home';
import Chronicle from './lexicon/chronicle';
import People from './lexicon/people';
import Astronomers from './lexicon/astronomers';
import Astronauts from './lexicon/astronauts';

class Home {
  static componentWithData(onDone) {
    onDone(<HomeComponent appUrl={appUrl} />);
  }
}

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
      });
      return;
    }
  }
}

import fs from 'fs';
import mkdirp from 'mkdirp';
import {join as pathJoin} from 'path';

function renderAndStoreSite(path) {
  renderSite(path, renderedSite => {
    const pathToFile = pathJoin(__dirname, '../dist', path);
    mkdirp(pathToFile);
    const destFile = pathJoin(pathToFile, 'index.html');
    const htmlContent = placeInsideIndexHtml(renderedSite);
    fs.writeFileSync(destFile, htmlContent);
    console.log(`generated "${path}" into "${destFile}" (${Math.ceil(htmlContent.length / 1024)} kB)`);
  });
}

function placeInsideIndexHtml(content) {
  const indexHtml = fs.readFileSync(pathJoin(__dirname, 'index.html'), 'utf8');
  return indexHtml.replace('<div id="app"></div>', content);
}

Object.keys(urlToComponent).forEach(renderAndStoreSite);