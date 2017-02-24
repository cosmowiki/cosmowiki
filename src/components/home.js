import React from 'react';

const HomeComponent = ({appUrl}) => {
  return (
    <main className="home pure-u-1 center">
      <div id="homeNav" className="pure-u-1 pure-u-sm-3-4 pure-u-md-1-2 pure-u-lg-1 center">
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
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

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
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

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
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

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
