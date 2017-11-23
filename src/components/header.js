import React from 'react'
import Navigation from './navigation'
import Search from './search'

const Header = ({appUrl}) => {
  return (
    <header className="pure-u-1">
      <div id="brand" className="pure-u-lg-1-6">
        <a href="/" title="CosmoWiki.de" rel="home"></a>
      </div>
      <div id="secondaryNavContainer" className="pure-u-1-6 pure-u-md-1-4">
        <div id="secondaryNavToggle" className="pure-u-1">
          <a href="#" title="Navigation"></a>
          <nav id="secondaryNav" className="pure-u-1">
            <ul className="pure-u-1">
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
            </ul>
          </nav>
        </div>
      </div>
      <Navigation appUrl={appUrl} />
      <Search/>
      <div id="logo" className="pure-u-md-1-4 pure-u-lg-1-6 right">
        <a href="/" title="CosmoWiki.de" rel="home"></a>
      </div>
    </header>
  )
};

export default Header;
