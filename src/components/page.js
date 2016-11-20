import React from 'react'
import Logo from './logo'
import Navigation from './navigation'
import Footer from './footer';

const PageComponent = ({children, appUrl}) => {
  return (
    <div id="wrapper" className="pure-g">
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
