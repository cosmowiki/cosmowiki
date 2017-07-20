import React from 'react';

const Logo = () => {
  return (
    <div id="homeBranding" className="pure-u-1">
      <div id="logo" className="pure-u-1-8 pure-u-sm-1-4 pure-u-md-1-3">
        <a href="/" title="CosmoWiki.de" rel="home">
          <img src="/img/cosmowiki_30px.jpg" id="CosmoWikiLogo" alt="CosmoWiki"/>
          <img src="/img/cw_icon_30px.jpg" id="CosmoWikiIcon" alt="CosmoWiki"/>
        </a>
      </div>
      <div id="searchArea" className="pure-u-3-4 pure-u-sm-1-2 pure-u-md-1-3 center">
        <form id="searchForm" role="search" method="get" action="">
          <input id="search" className="pure-u-1" name="search" type="text" placeholder="CosmoWiki durchsuchen" required />
        </form>
      </div>
      <div id="menuToggle" className="pure-u-1-8 pure-u-sm-1-4 pure-u-md-1-3 right">
        <a href="#"></a>
      </div>
    </div>
  );
};

export default Logo;

// submit button for search form if needed:
// <input id="searchSubmit" type="button" value="Go" />
