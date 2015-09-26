import React from 'react';

export default class AstronomyComponent {

  render() {
    const {appUrl} = this.props;
    return (
      <main role="main" className="pure-u-2-3">
        <div id="featured" className="astronomy center">
          <h1>Astronomie</h1>
          <p>der Blick zu den Sternen</p>
        </div>
        <div className="cw-page-links astronomy astronomers center">
          <a href={appUrl.astronomersSite()}>Astronomen</a>
        </div>
        <div className="cw-page-links astronomy solsys center">
          <a href={appUrl.solarSystemSite()}>Sonnensystem</a>
        </div>
        <div className="cw-page-links astronomy const center">
          <a href={appUrl.constellationsSite()}>Sternbilder</a>
        </div>
        <div className="cw-page-links astronomy stars center">
          <a href={appUrl.starsSite()}>Sterne</a>
        </div>
      </main>
    )
  }
}