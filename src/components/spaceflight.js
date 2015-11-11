import React from 'react';

export default class SpaceflightComponent {

  render() {
    const {appUrl} = this.props;
    return (
      <main role="main" className="pure-u-2-3 pure-u-lg-1">
        <div id="featured" className="spaceflight center">
          <h1>Raumfahrt</h1>
          <h3>der Aufbruch in unendliche Weiten</h3>
        </div>
        <div className="pure-u-1 cw-page-links spaceflight astronauts center">
          <a href={appUrl.astronautsSite()}>Raumfahrer</a>
        </div>
        <div className="pure-u-1 cw-page-links spaceflight missions center">
          <a href={appUrl.missionsSite()}>Missionen</a>
        </div>
        <div className="pure-u-1 cw-page-links spaceflight stations center">
          <a href={appUrl.spaceStationsSite()}>Raumstationen</a>
        </div>
      </main>
    )
  }
}