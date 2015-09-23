import React from 'react'
import Logo from './logo'
import SocialButtons from './social-buttons'
import Navigation from './navigation'
import Footer from './footer';

export default class PageComponent {
  render() {
    
    const {siteComponent, appUrl} = this.props;
    
    return (
      <div id="wrapper" className="pure-g">
        <header className="pure-u-2-3 pure-u-lg-1">
          <Logo/>
          <SocialButtons/>
          <Navigation appUrl={appUrl} />
        </header>
        {siteComponent}
        <Footer />
      </div>
    )
  }
}
