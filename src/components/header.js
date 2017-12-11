import React from 'react';
import Navigation from './navigation';

const Header = ({appUrl}) => {
  return (
    <header className="pure-u-1">
      <div id="brand" className="pure-u-lg-1-6">
        <a href="/" title="CosmoWiki.de" rel="home">
          <img src="/img/cw_name_30px.jpg" alt="CosmoWiki Title" />
        </a>
      </div>
      <Navigation appUrl={appUrl} />
    </header>
  )
};

export default Header;
