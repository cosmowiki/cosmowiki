import React from 'react';

export default class ObjectsComponent {
  
  render() {
    
    let appUrl = this.props.appUrl;
    
    return (
      <main role="main" className="pure-u-1">
        <div id="featured" className="objects center">
          <h1>Objekte</h1>
          <h3>Himmelsk&ouml;rper, Raumfahrzeuge, Instrumente</h3>
        </div>
        <div id="subItemsContainer">
          <a className="pure-u-1 subItem objects solsys center" href={appUrl.solarSystemSite()}>Sonnensystem</a>
          <a className="pure-u-1 subItem objects constellations center" href={appUrl.constellationsSite()}>Sternbilder</a>
          <a className="pure-u-1 subItem objects stars center" href={appUrl.starsSite()}>Sterne</a>
          <a className="pure-u-1 subItem objects stations center" href={appUrl.spaceStationsSite()}>Raumstationen</a>
        </div>
      </main>
    );
  }
  
}