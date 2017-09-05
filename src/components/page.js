import React from 'react'
import Logo from './logo'
import Navigation from './navigation'
import Footer from './footer';

const PageComponent = ({children, appUrl}) => {
  return (
    <div id="wrapper" className="pure-g">
      <a id="scrollUp" href="javascript:self.scrollTo(0,0);"></a>
      <a id="scrollDown" href="javascript:self.scrollTo(0,document.body.scrollHeight);"></a>
      <Logo/>
      <header className="pure-u-1 center">
        <Navigation appUrl={appUrl} />
      </header>
      {children}
      <Footer appUrl={appUrl} />
    </div>
  )
};

export default PageComponent;
