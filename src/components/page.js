import React from 'react'
import Header from './header'
import Footer from './footer';

const PageComponent = ({children, appUrl}) => {
  return (
    <div id="wrapper" className="pure-g">
      <div id="sideButtons">
        <ul>
          <li id="scrollUp">
            <a href="javascript:self.scrollTo(0,0);"></a>
          </li>
          <li id="toggleShariff">
            <a id="toggleShariffLink" href="#"></a>
            <ShareButtons />
          </li>
          <li id="scrollDown">
            <a href="javascript:self.scrollTo(0,document.body.scrollHeight);"></a>
          </li>
        </ul>
      </div>
      <Header appUrl={appUrl} />
      {children}
      <Footer appUrl={appUrl} />
    </div>
  )
};

export default PageComponent;

class ShareButtons extends React.Component {
    shouldComponentUpdate() {
        return false; // we want shariff to control this component, so dont react to updates ;) (fingers crossed)
    }
    render() {
        return (
          <div className="shariff pure-u-1"
          data-services="twitter, facebook, googleplus, info"
          data-twitter-via="cosmowiki"
          />
      );
    }
}
