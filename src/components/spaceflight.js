import React from 'react';

const SpaceflightComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="pure-u-1 spaceflight">
        <h1>Raumfahrt</h1>
        <h3>der Aufbruch in unendliche Weiten</h3>
      </div>
      <div id="pageSubMenuContainer">
        <ul id="pageSubMenu" className="pure-u-1 center">
          {[
            {url: appUrl.astronautsSite(), name: 'Raumfahrer'},
            {url: appUrl.missionsSite(), name: 'Missionen'},
            {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},

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

export default SpaceflightComponent;
