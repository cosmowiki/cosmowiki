import React from 'react';

export default class ObjectsComponent {
  
  render() {
    
    let appUrl = this.props.appUrl;
    
    return (
      <main role="main" className="pure-u-2-3 pure-u-lg-1">
        <div id="featured" className="objects center">
          <h1>Objekte</h1>
          <h3>Planeten und Sterne, Satelliten und Sonden</h3>
        </div>
        <div className="pure-u-1 cw-page-links objects solsys center">
          <a href={appUrl.solarSystemSite()}>Sonnensystem</a>
        </div>
        <div className="pure-u-1 cw-page-links objects const center">
          <a href={appUrl.constellationsSite()}>Sternbilder</a>
        </div>
        <div className="pure-u-1 cw-page-links objects stars center">
          <a href={appUrl.starsSite()}>Sterne</a>
        </div>
        <div className="pure-u-1 cw-page-links objects stations center">
          <a href={appUrl.spaceStationsSite()}>Raumstationen</a>
        </div>
      </main>
    );
  }
  
}