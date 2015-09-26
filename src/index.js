import 'babel/polyfill';
import React from 'react'
import {parse as parseUrl} from 'url';
import {loadRemoteFile} from './_external-deps/http-get';

import AppUrl from './appurl'
import PageComponent from './components/page';

import Home from './sites/home';
import Events from './sites/events';
import People from './sites/people';
import Astronomers from './sites/astronomers';
import Astronauts from './sites/astronauts';
import Objects from './sites/objects';
import SolarSystem from './sites/solar-system';
import Constellations from './sites/constellations';

const createStaticSites = process.argv.includes('--makes-static-sites');
const renderForOffline = process.argv.includes('--for-offline=1');

function loadViaHttp(fileName, onDone, onError) {
  loadRemoteFile(`/${fileName}`, (err, data) => {
    if (err) {
      console.log(`Error loading data from ${fileName}, ${err}`);
    } else {
      onDone(JSON.parse(data));
    }
  });
}

function loadFromFs(fileName, onDone, onError) {
  const data = JSON.parse(fs.readFileSync(`./${fileName}`));
  onDone(data);
}

const loadFunction = createStaticSites ? loadFromFs : loadViaHttp;
let appUrl = new AppUrl();

const rerender = siteComponent => {
  const site = <PageComponent siteComponent={siteComponent} appUrl={appUrl} />;
  if (createStaticSites) {
    return React.renderToString(site);
  }
  React.render(site, document.getElementById('app'));
};

const urlToComponent = {
  '/chronicle': {klass: Events, fileName: 'data/chronicle.json'},
  '/people': {klass: People, fileName: 'data/people.json'},
  '/astronomers': {klass: Astronomers, fileName: 'data/people.json'},
  '/astronauts': {klass: Astronauts, fileName: 'data/people.json'},
  '/solar-system': {klass: SolarSystem},
  '/constellations': {klass: Constellations, fileName: 'data/constellations.json'},
  '/objects': {klass: Objects},
  '/': {klass: Home}
};

function renderSite(path, onDone) {

  function withRawData(componentClass, rawData) {
    const data = componentClass.fromRawData(rawData);
    const component = componentClass.componentWithData(data, appUrl);
    const renderedContent = rerender(component);
    onDone && onDone(renderedContent);
  }
  
  for (let urlStart in urlToComponent) {
    if (path.startsWith(urlStart)) {
      const curItem = urlToComponent[urlStart];
      const componentClass = curItem.klass;
      const fileName = curItem.fileName;
      if (fileName) {
        loadFunction(fileName, withRawData.bind(null, componentClass));
      } else {
        withRawData(componentClass);
      }
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
  return indexHtml.replace('<div id="app"></div>', `<div id="app">${content}</div>`);
}

if (createStaticSites) {
  Object.keys(urlToComponent).forEach(renderAndStoreSite.bind(null, renderForOffline));
} else {
  renderSite(window.location.pathname);
}