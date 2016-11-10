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
        <div id="subItemsContainer">
          <a className="pure-u-1 subItem spaceflight astronauts center" href={appUrl.astronautsSite()}>Raumfahrer</a>
          <a className="pure-u-1 subItem spaceflight missions center" href={appUrl.missionsSite()}>Missionen</a>
          <a className="pure-u-1 subItem spaceflight stations center" href={appUrl.spaceStationsSite()}>Raumstationen</a>
        </div>
      </main>
    )
  }
}