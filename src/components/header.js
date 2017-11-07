import React from 'react'
import Navigation from './navigation'
import Search from './search'

const Header = ({appUrl}) => {
  return (
    <header className="pure-u-1">
      <div id="brand" className="pure-u-1-6 pure-u-md-1-4 pure-u-lg-1-6">
        <a href="/" title="CosmoWiki.de" rel="home"></a>
      </div>
      <Navigation appUrl={appUrl} />
      <Search/>
      <div id="navToggle" className="pure-u-1-6 pure-u-md-1-4 pure-u-lg-1-6 right">
        <a href="#" title="Navigation"></a>
      </div>
    </header>
  )
};

export default Header;
