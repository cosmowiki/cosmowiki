import React from 'react';
import Search from './search';

const Navigation = ({ appUrl }) => {
  return (
    <div id="menus" className="pure-u-1 pure-u-lg-5-6">
      <nav id="mobileMenu" className="pure-menu custom-restricted-width pure-u-1-6">
        <a id="mobileMenuToggle" className="menu-link" href="#" title="Navigation"><span></span></a>
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
          <li id="toggleShariff" className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a href="#" className="pure-menu-link menu-item"></a>
            <ul className="pure-menu-children sub-menu">
              <li className="pure-menu-item">
                <ShareButtons className="pure-menu-children sub-menu" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav id="desktopMenu" className="pure-menu pure-menu-horizontal pure-u-lg-5-6 center">
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
      </nav>
      <div id="sideMenu" className="pure-u-5-6 pure-u-lg-1-6">
        <ul>
          <li className="pure-u-4-5 center">
            <Search />
          </li>
          <li id="toggleShariff">
            <a href="#"></a>
            <ShareButtons />
          </li>
          <li id="logo">
            <a href="/" title="CosmoWiki.de" rel="home"></a>
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
