import React from 'react'
import Logo from './logo'
import Homefooter from './homefooter';

const ContentOnlyComponent = ({children, appUrl}) => {
  return (
    <div id="wrapper" className="home pure-g">
      <Logo/>
      {children}
      <Homefooter appUrl={appUrl} />
    </div>
  )
};

export default ContentOnlyComponent;
