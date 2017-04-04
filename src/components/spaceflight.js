import React from 'react';

const SpaceflightComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="spaceflight pure-u-1 center">
        <h1>Raumfahrt</h1>
        <h3>der Aufbruch in unendliche Weiten</h3>
      </div>
      <div id="todo" className="pure-u-1">
        @wolfram how to 100% height including the footer if site is smaller than 100%?
      </div>
      <div id="pageSubMenuContainer">
        <ul id="pageSubMenu" className="pure-u-1 center">
          {[
            {url: appUrl.astronautsSite(), name: 'Raumfahrer'},
            {url: appUrl.missionsSite(), name: 'Missionen'},
            {url: appUrl.spacewalksSite(), name: 'Weltraumausstiege'},
            {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
            {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

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
