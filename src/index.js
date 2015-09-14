import React from 'react';

import Logo from './components/logo'
import SocialButtons from './components/social-buttons'
import Navigation from './components/navigation'
import Home from './components/home'

class Page {
  render() {
    return (
      <div id="wrapper" className="pure-g">
        <header className="pure-u-2-3">
          <Logo/>
          <SocialButtons/>
          <Navigation />
        </header>
        <Home/>
      </div>
    )
  }
}

React.render(<Page/>, document.getElementById('app'));
