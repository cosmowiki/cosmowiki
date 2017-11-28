import React from 'react';
import Search from './search';

const Navigation = ({ appUrl }) => {
  return (
    <div id="desktopMenus" className="pure-u-lg-5-6">
      <div id="desktopMenu" className="pure-menu pure-menu-horizontal pure-u-lg-4-5 center">
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item chronicle" href={appUrl.eventsSite()}>Chronik</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item persons" href={appUrl.peopleSite()}>Personen</a>
            <ul className="pure-menu-children sub-menu persons">
              {[
                {url: appUrl.scientistsSite(), name: 'Wissenschaftler'},
                {url: appUrl.astronautsSite(), name: 'Raumfahrer'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item persons" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link menu-item places" href="places.php">Orte</a>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item objects" href={appUrl.objectsSite()}>Objekte</a>
            <ul className="pure-menu-children sub-menu objects">
              {[
                {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
                {url: appUrl.constellationsSite(), name: 'Sternbilder'},
                {url: appUrl.starsSite(), name: 'Sterne'},
                {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item objects" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item astronomy" href={appUrl.astronomySite()}>Astronomie</a>
            <ul className="pure-menu-children sub-menu astronomy">
              {[
                {url: appUrl.scientistsSite(), name: 'Wissenschaftler'},
                {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
                {url: appUrl.constellationsSite(), name: 'Sternbilder'},
                {url: appUrl.starsSite(), name: 'Sterne'},
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item astronomy" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link menu-item spaceflight" href={appUrl.spaceflightSite()}>Raumfahrt</a>
            <ul className="pure-menu-children sub-menu spaceflight">
              {[
                {url: appUrl.astronautsSite(), name: 'Raumfahrer'},
                {url: appUrl.missionsSite(), name: 'Missionen'},
                {url: appUrl.spacewalksSite(), name: 'Weltraumausstiege'},
                {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
                {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},

              ].map(link =>
                <li key={link.url} className="pure-menu-item">
                  <a className="pure-menu-link sub-menu-item spaceflight" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
      <div id="desktopMenu2" className="pure-menu pure-menu-horizontal pure-u-lg-1-5 right">
        <ul className="pure-menu-list">
          <li id="toggleSearch" className="pure-menu-item pure-menu-allow-hover">
            <a id="toggleSearchLink" className="pure-menu-link menu-item" href="#"></a>
            <Search />
          </li>
          <li id="toggleShariff" className="pure-menu-item  pure-menu-allow-hover">
            <a id="toggleShariffLink" className="pure-menu-link menu-item" href="#"></a>
            <ShareButtons />
          </li>
          <li id="logo" className="pure-menu-item">
            <a href="/" title="CosmoWiki.de" rel="home" className="pure-menu-link menu-item"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

class ShareButtons extends React.Component {
    shouldComponentUpdate() {
        return false; // we want shariff to control this component, so dont react to updates ;) (fingers crossed)
    }
    render() {
        return (
          <div className="shariff pure-u-1"
          data-services="twitter, facebook, googleplus, info"
          data-twitter-via="cosmowiki"
          />
      );
    }
}

export default Navigation;
