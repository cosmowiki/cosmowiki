import 'babel/polyfill';
import React from 'react'
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {loadRemoteFile} from './_external-deps/http-get';

import AppUrl from './appurl'
import PageComponent from './components/page';
import ContentOnlyComponent from './components/content-only';

import Home from './sites/home';
import Welcome from './sites/welcome';
import Events from './sites/events';
import People from './sites/people';
import Scientists from './sites/scientists';
import Astronauts from './sites/astronauts';
import Objects from './sites/objects';
import SolarSystem from './sites/solar-system';
import Constellations from './sites/constellations';
import Stars from './sites/stars';
import SpaceStations from './sites/space-stations';
import SpaceTelescopes from './sites/space-telescopes';
import Missions from './sites/missions';
import Spacewalks from './sites/spacewalks';
import Astronomy from './sites/astronomy';
import Spaceflight from './sites/spaceflight';
import About from './sites/about';

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

const rerender = (surroundingComponent, content) => {
  const site = React.createElement(surroundingComponent, {appUrl: appUrl}, content);
  if (createStaticSites) {
    return ReactDOMServer.renderToString(site);
  }
  ReactDOM.render(site, document.getElementById('app'));
};

const urlToComponent = {
  '/welcome': {klass: Welcome},
  '/chronicle': {klass: Events, fileName: 'data/chronicle.json'},
  '/people': {klass: People, fileName: 'data/people.json'},
  '/scientists': {klass: Scientists, fileName: 'data/scientists.json'},
  '/astronauts': {klass: Astronauts, fileName: 'data/astronauts.json'},
  '/solar-system': {klass: SolarSystem, fileName: 'data/solarsystem.json'},
  '/constellations': {klass: Constellations, fileName: 'data/constellations.json'},
  '/stars': {klass: Stars, fileName: 'data/stars.json'},
  '/space-stations': {klass: SpaceStations, fileName: 'data/spacestations.json'},
  '/space-telescopes': {klass: SpaceTelescopes, fileName: 'data/spacetelescopes.json'},
  '/missions': {klass: Missions, fileName: 'data/missions.json'},
  '/spacewalks': {klass: Spacewalks, fileName: 'data/spacewalks.json'},
  '/astronomy': {klass: Astronomy},
  '/spaceflight': {klass: Spaceflight},
  '/objects': {klass: Objects},
  '/about': {klass: About},
  '/': {klass: Home, surroundingComponent: ContentOnlyComponent}
};

const renderSite = (path, onDone) => {

  const withData = (componentClass, surroundingComponent, data) => {
    const component = componentClass.componentWithData(data, appUrl);
    const renderedContent = rerender(surroundingComponent, component);
    onDone && onDone(renderedContent);
  };

  const withRawData = (componentClass, surroundingComponent, rawData) => {
    const data = componentClass.fromRawData(rawData);
    withData(componentClass, surroundingComponent, data);
  };

  const withoutData = (componentClass, surroundingComponent) => {
    const data = null;
    withData(componentClass, surroundingComponent, data);
  };

  for (let urlStart in urlToComponent) {
    if (path.startsWith(urlStart)) {
      const curItem = urlToComponent[urlStart];
      const surroundingComponent = curItem.surroundingComponent || PageComponent;
      const componentClass = curItem.klass;
      const fileName = curItem.fileName;
      if (fileName) {
        loadFunction(fileName, (data) => withRawData(componentClass, surroundingComponent, data));
      } else {
        withoutData(componentClass, surroundingComponent);
      }
      return;
    }
  }
};

import fs from 'fs';
import mkdirp from 'mkdirp';
import {join as pathJoin} from 'path';
import {useOfflineUrls} from './scripts/make-urls-offline';

const preapreDestFile = (path) => {
  const pathToFile = pathJoin(__dirname, '../dist', path);
  mkdirp.sync(pathToFile);
  return pathJoin(pathToFile, 'index.html');
};

const prepareForOffline = (contentInsideHtml, forOffline) => {
  if (forOffline) {
    return useOfflineUrls(contentInsideHtml);
  }
  return contentInsideHtml;
};

const storeSiteContent = (renderedSite, forOffline, path) => {
  const destFile = preapreDestFile(path);
  const contentInsideHtml = placeInsideIndexHtml(renderedSite);
  const htmlContent = prepareForOffline(contentInsideHtml, forOffline);
  fs.writeFileSync(destFile, htmlContent);
  console.log(`generated "${path}" into "${destFile}" (${Math.ceil(htmlContent.length / 1024)} kB)`);
};

function renderAndStoreSite(forOffline, path) {
  const withSiteContent = (content) =>
    storeSiteContent(content, forOffline, path);
  renderSite(path, withSiteContent);
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
