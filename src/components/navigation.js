import React from 'react';
export default class Navigation {
  
  render() {
    
    let appUrl = this.props.appUrl;
    
    return (
      <nav className="center pure-u-1 pure-menu pure-menu-horizontal">
        <ul id="menu" className="pure-menu-list">
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item chronicle" href={appUrl.eventsSite()}>Chronik</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item persons" href={appUrl.peopleSite()}>Personen</a>
            <ul className="pure-menu-children sub-menu persons">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item persons" href={appUrl.astronomersSite()}>Astronomen</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item persons" href={appUrl.astronautsSite()}>Raumfahrer</a>
              </li>
            </ul>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item places" href="places.php">Orte</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item objects" href={appUrl.objectsSite()}>Objekte</a>
            <ul className="pure-menu-children sub-menu objects">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href={appUrl.solarSystemSite()}>Sonnensystem</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href={appUrl.constellationsSite()}>Sternbilder</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href={appUrl.starsSite()}>Sterne</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item objects" href={appUrl.spaceStationsSite()}>Raumstationen</a>
              </li>
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item astronomy" href={appUrl.astronomySite()}>Astronomie</a>
            <ul className="pure-menu-children sub-menu astronomy">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href={appUrl.astronomersSite()}>Astronomen</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href={appUrl.solarSystemSite()}>Sonnensystem</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href={appUrl.constellationsSite()}>Sternbilder</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item astronomy" href={appUrl.starsSite()}>Sterne</a>
              </li>
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item spaceflight" href={appUrl.spaceflightSite()}>Raumfahrt</a>
            <ul className="pure-menu-children sub-menu spaceflight">
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item spaceflight" href={appUrl.astronautsSite()}>Raumfahrer</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item spaceflight" href={appUrl.missionsSite()}>Missionen</a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link sub-menu-item spaceflight" href={appUrl.spaceStationsSite()}>Raumstationen</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
  
}
          //<li className="pure-menu-item">
          //  <a className="pure-menu-link menu-item register" href="register.php">Register</a>
          //</li>