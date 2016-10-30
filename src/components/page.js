import React from 'react'
import Logo from './logo'
import Navigation from './navigation'
import Footer from './footer';

export default class PageComponent {
  render() {
    
    const {siteComponent, appUrl} = this.props;
    
    return (
      <div id="wrapper" className="pure-g">
        <Logo/>
        <header className="pure-u-1">
          <Navigation appUrl={appUrl} />
        </header>
        {siteComponent}
        <Footer appUrl={appUrl} />
      </div>
    )
  }
}
