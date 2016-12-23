import React from 'react';

const ObjectsComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="pure-u-1 objects">
        <h1>Objekte</h1>
        <h3>Himmelsk&ouml;rper, Raumfahrzeuge, Instrumente</h3>
      </div>
      <div id="pageSubMenuContainer">
        <ul id="pageSubMenu" className="pure-u-1 center">
          {[
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
  );
};

export default ObjectsComponent;
