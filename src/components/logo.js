import React from 'react';

const Logo = () => {
  return (
    <div id="logo" className="pure-u-1-6">
      <a href="/" title="CosmoWiki.de" rel="home">
        <img src="/img/cosmowiki_30px.jpg" id="CosmoWikiLogo" alt="CosmoWiki"/>
        <img src="/img/cw_icon_30px.jpg" id="CosmoWikiIcon" alt="CosmoWiki"/>
      </a>
    </div>
  );
};

export default Logo;

// submit button for search form if needed:
// <input id="searchSubmit" type="button" value="Go" />
