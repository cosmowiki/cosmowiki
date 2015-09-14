import React from 'react';

import Logo from './components/logo'
import SocialButtons from './components/social-buttons'
import Navigation from './components/navigation'

class Page {
  render() {
    return (
      <div>
        <div id="wrapper" className="pure-g">
          <header className="pure-u-2-3">
            <Logo/>
            <SocialButtons/>
            <Navigation />
          </header>
        </div>

        Hello cosmowiki
      </div>
    )
  }
}

React.render(<Page/>, document.getElementById('app'));
