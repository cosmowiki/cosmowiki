import React from 'react';
import 'babel/polyfill';

import Logo from './components/logo'
import SocialButtons from './components/social-buttons'
import Navigation from './components/navigation'
import Home from './components/home';
import Footer from './components/footer';

import AppUrl from './appurl'

let appUrl = new AppUrl();

class Page {
  render() {
    
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

const rerender = (siteComponent) => {
  React.render(<Page siteComponent={siteComponent} />, document.getElementById('app'));
};

import {parse as parseUrl} from 'url';
import Chronicle from './lexicon/chronicle';
import People from './lexicon/people';
import Astronomers from './lexicon/astronomers';
import Astronauts from './lexicon/astronauts';
import ObjectsComponent from './components/objects';

window.addEventListener('hashchange', ({newURL: newUrl}) => {
  processUrl(newUrl);  
});

function processUrl(url) {
  const parsedUrl = parseUrl(url);
  if (parsedUrl && parsedUrl.hash && parsedUrl.hash.startsWith('#/')) {
    if (parsedUrl.hash.match(/^#\/chronicle/)) {
      Chronicle.componentWithData((chronicleComponent) => {
        rerender(chronicleComponent);
      });
    }
    if (parsedUrl.hash.match(/^#\/people/)) {
      People.componentWithData((peopleComponent) => {
        rerender(peopleComponent);
      });
    }
    if (parsedUrl.hash.match(/^#\/astronomers/)) {
      Astronomers.componentWithData((component) => {
        rerender(component);
      });
    }
    if (parsedUrl.hash.match(/^#\/astronauts/)) {
      Astronauts.componentWithData((component) => {
        rerender(component);
      });
    }
    if (parsedUrl.hash.match(/^#\/objects/)) {
      rerender(<ObjectsComponent appUrl={appUrl} />);
    }
  } else {
    rerender(<Home appUrl={appUrl} />);
  }
}

processUrl(window.location.href);
