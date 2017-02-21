import React from 'react';

const SpaceTelescopesComponent = () => {

  return (
    <main role="main" className="pure-u-2-3">
      <div id="featured" className="spacetele">
        <h1>Weltraumteleskope</h1>
        <p>Augen und Ohren im All</p>
      </div>
      <div id="dataArea" className="spacetele">
        <div style={ { textAlign: 'center', position: 'relative', top: '10px'} }>
          <img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/><br />
          Bitte warten, Daten werden geladen.
        </div>
      </div>
    </main>
  );
};

export default SpaceTelescopesComponent;
