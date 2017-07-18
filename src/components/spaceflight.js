import React from 'react';

const SpaceflightComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="spaceflight pure-u-1 center">
        <h1>Raumfahrt</h1>
        <h3>der Aufbruch in unendliche Weiten</h3>
      </div>
      <div id="pageSubMenuContainer">
        <ul id="pageSubMenu" className="pure-u-1 center">
          {[
            {url: appUrl.astronautsSite(), style: 'astronauts', name: 'Raumfahrer'},
            {url: appUrl.missionsSite(), style: 'missions', name: 'Missionen'},
            {url: appUrl.spacewalksSite(), style: 'spacewalks', name: 'Weltraumausstiege'},
            {url: appUrl.spaceStationsSite(), style: 'spacestations', name: 'Raumstationen'},
            {url: appUrl.spaceTelescopesSite(), style: 'spacetelescopes', name: 'Weltraumteleskope'},

          ].map(link =>
            <li className={ link.style } key={link.url+link.name}>
              <a href={ link.url }>{ link.name }</a>
            </li>
          )}
        </ul>
      </div>
    </main>
  );
};

export default SpaceflightComponent;
