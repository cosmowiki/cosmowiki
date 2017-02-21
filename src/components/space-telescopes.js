import React from 'react';

const SpaceTelescopesComponent = ({ telescopes }) => {

  return (
    <main role="main" className="pure-u-2-3">
      <div id="featured" className="spacetele">
        <h1>Weltraumteleskope</h1>
        <p>Augen und Ohren im All</p>
      </div>
      <div id="dataArea" className="spacetele">
        {telescopes.map((telescope, idx) => <TelescopeComponent telescope={ telescope } key={idx}/>)}
      </div>
    </main>
  );
};

export default SpaceTelescopesComponent;

const TelescopeComponent = ({ telescope }) => {
  return (
    <div>
      {telescope.name}
    </div>
  );
};
