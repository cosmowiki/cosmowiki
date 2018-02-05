import React from 'react';
import Header from './header';
import Footer from './footer';

const PageComponent = ({children, appUrl}) => {
  return (
    <div id="wrapper" className="pure-g">
      <div id="sideButtons">
        <ul>
          <li id="scrollUp">
            <a href="javascript:self.scrollTo(0,0);" title="scroll zum Anfang"></a>
          </li>
          <li id="scrollDown">
            <a href="javascript:self.scrollTo(0,document.body.scrollHeight);" title="scroll zum Ende"></a>
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
