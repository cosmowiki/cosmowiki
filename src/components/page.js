import React from 'react'
import Logo from './logo'
import Navigation from './navigation'
import Footer from './footer';

const PageComponent = ({children, appUrl}) => {
  return (
    <div id="wrapper" className="pure-g"><div id="share"></div>
      <div id="shareButtons">
        <a id="shareTwitter" href="#"></a>
        <a id="shareFacebook" href="#"></a>
        <a id="shareGoogle" href="#"></a>
      </div>
      <a id="scrollUp" href="javascript:self.scrollTo(0,0);"></a>
      <a id="scrollDown" href="javascript:self.scrollTo(0,document.body.scrollHeight);"></a>
      <a id="menuToggle" href="#"></a>
      <div id="searchArea" className="pure-u-1-2 center">
        <form className="pure-u-1-2" role="search" method="get" action="">
          <input name="search" type="text" placeholder="CosmoWiki durchsuchen" required />
          <button name="search"></button>
        </form>
      </div>
      <header className="pure-u-1">
        <Logo/>
        <Navigation appUrl={appUrl} />
      </header>
      {children}
      <Footer appUrl={appUrl} />
    </div>
  )
};

export default PageComponent;
