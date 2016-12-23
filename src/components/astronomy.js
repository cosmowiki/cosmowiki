import React from 'react';

const AstronomyComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="pure-u-1 astronomy">
        <h1>Astronomie</h1>
        <h3>der Blick zu den Sternen</h3>
      </div>
      <div id="pageSubMenuContainer">
        <ul id="pageSubMenu" className="pure-u-1 center">
          {[
            {url: appUrl.astronomersSite(), name: 'Astronomen'},
            {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
            {url: appUrl.constellationsSite(), name: 'Sternbilder'},
            {url: appUrl.starsSite(), name: 'Sterne'},

          ].map(link =>
            <li className={ link.name } key={link.url+link.name}>
              <a href={ link.url }>{ link.name }</a>
            </li>
          )}
        </ul>
      </div>
    </main>
  )
};

export default AstronomyComponent;
