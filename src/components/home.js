import React from 'react';

const HomeComponent = ({appUrl}) => {
  return (
    <main className="home pure-u-1 center">
      <div id="todo" className="pure-u-1">
        how to center the nav vertically by keeping the page at 100% in height and the footer on bottom on big screens?
      </div>
      <div id="homeNav" className="pure-u-1 center">
        <ul className="main-menu pure-u-1 center">
          <li>
            <a href={appUrl.eventsSite()}>Chronik</a>
          </li>
          <li>
            <a href={appUrl.peopleSite()}>Personen</a>
            <ul className="sub-menu">
              {[
                {url: appUrl.astronomersSite(), name: 'Astronomen'},
                {url: appUrl.astronautsSite(), name: 'Raumfahrer'},

              ].map(link =>
                <li key={link.url+link.name}>
                  <a href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li>
            <a href="places.php">Orte</a>
          </li>
          <li>
            <a href={appUrl.objectsSite()}>Objekte</a>
            <ul className="sub-menu">
              {[
                {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
                {url: appUrl.constellationsSite(), name: 'Sternbilder'},
                {url: appUrl.starsSite(), name: 'Sterne'},
                {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},

              ].map(link =>
                <li key={link.url+link.name}>
                  <a href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li>
            <a href={appUrl.astronomySite()}>Astronomie</a>
            <ul className="sub-menu">
              {[
                {url: appUrl.astronomersSite(), name: 'Astronomen'},
                {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
                {url: appUrl.constellationsSite(), name: 'Sternbilder'},
                {url: appUrl.starsSite(), name: 'Sterne'},

              ].map(link =>
                <li key={link.url+link.name}>
                  <a href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li>
            <a href={appUrl.spaceflightSite()}>Raumfahrt</a>
            <ul className="sub-menu">
              {[
                {url: appUrl.astronautsSite(), name: 'Raumfahrer'},
                {url: appUrl.missionsSite(), name: 'Missionen'},
                {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},

              ].map(link =>
                <li key={link.url+link.name}>
                  <a href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </main>
  )
};

export default HomeComponent;
