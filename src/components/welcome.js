import React from 'react';

const WelcomeComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="pure-u-1 welcome center">
        <h1>Willkommen</h1>
        <h3>auf CosmoWiki.org</h3>
      </div>
      
    </main>
  )
};

export default WelcomeComponent;
