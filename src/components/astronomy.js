import React from 'react';

const AstronomyComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="astronomy">
        <h1>Astronomie</h1>
        <h3>der Blick zu den Sternen</h3>
      </div>
      <div id="subItemsContainer">
        <a className="pure-u-1 subItem astronomy astronomers center" href={appUrl.astronomersSite()}>Astronomen</a>
        <a className="pure-u-1 subItem astronomy solsys center" href={appUrl.solarSystemSite()}>Sonnensystem</a>
        <a className="pure-u-1 subItem astronomy const center" href={appUrl.constellationsSite()}>Sternbilder</a>
        <a className="pure-u-1 subItem astronomy stars center" href={appUrl.starsSite()}>Sterne</a>
      </div>
    </main>
  )
};

export default AstronomyComponent;
