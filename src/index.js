import React from 'react';

import Logo from './components/logo'
import SocialButtons from './components/social-buttons'
import Navigation from './components/navigation'
import Home from './components/home';
import Footer from './components/footer';

import AppUrl from './appurl'

class Page {
  render() {
    
    let appUrl = new AppUrl();
    const siteComponent = this.props.siteComponent;
    
    return (
      <div id="wrapper" className="pure-g">
        <header className="pure-u-2-3">
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

const rerender = (siteComponent = <Home />) => {
  React.render(<Page siteComponent={siteComponent} />, document.getElementById('app'));
};

import {parse as parseUrl} from 'url';
import Chronicle from './lexicon/chronicle'

window.addEventListener('hashchange', ({newURL: newUrl}) => {
  const parsedUrl = parseUrl(newUrl);
  processUrl(parsedUrl);  
});

function processUrl(parsedUrl) {
  if (parsedUrl && parsedUrl.hash && parsedUrl.hash.startsWith('#/')) {
    if (parsedUrl.hash.match(/^#\/chronicle/)) {
      Chronicle.componentWithData((chronicleComponent) => {
        rerender(chronicleComponent);
      });
    }
  } else {
    rerender(<Home />);
  }
}

processUrl();
