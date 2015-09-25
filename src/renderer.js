import React from 'react'
import AppUrl from './appurl'

let appUrl = new AppUrl();

const rerender = (siteComponent) => {
  const rendered = React.renderToString(<PageComponent siteComponent={siteComponent} appUrl={appUrl} />);
  return rendered;
};

import {parse as parseUrl} from 'url';
import PageComponent from './components/page';

import Home from './sites/home';
import Chronicle from './sites/chronicle';
import People from './sites/people';
import Astronomers from './sites/astronomers';
import Astronauts from './sites/astronauts';

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
Object.keys(urlToComponent).forEach(renderAndStoreSite.bind(null, renderForOffline));