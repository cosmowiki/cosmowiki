import React from 'react';

const Logo = () => {
  return (
    <div id="branding" className="pure-u-1">
      <div id="logo" className="pure-u-1-3">
        <a href="/" title="CosmoWiki.de" rel="home">
          <img src="/img/cosmowiki_30px.jpg" id="CosmoWikiLogo" alt="CosmoWiki"/>
        </a>
      </div>
      <div id="search" className="pure-u-1-3 center">
        Suche
      </div>
      <div id="menu" className="pure-u-1-3 right">
        Men&uuml;
      </div>
    </div>
  );
};

export default Logo;
