import React from 'react';

const PlacesComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="pure-u-1 places center">
        <div id="siteTitleContainer">
          <h1>Orte</h1>
          <h3>der Blick zu den Sternen</h3>
        </div>
      </div>
      <div id="pageSubMenuContainer">
        <ul id="pageSubMenu" className="pure-u-1 center">
          {[
            {url: appUrl.artifactsSite(), style: 'artifacts', name: 'Fundorte'},
            {url: appUrl.groundstationsSite(), style: 'groundstations', name: 'Bodenstationen'},
            {url: appUrl.observatoriesSite(), style: 'observatories', name: 'Observatorien'},
            {url: appUrl.launchpadsSite(), style: 'launchpads', name: 'Startplätze'},

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

export default PlacesComponent;
