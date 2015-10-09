import React from 'react';
export default class SocialButtons {
  
  render() {
    const {appUrl} = this.props;
    
    return (
      <div id="social" className="pure-u-1 pure-u-md-1-2 pure-menu pure-menu-horizontal">
        <ul>
          <li className="social-button facebook center">
            <a target="_blank" title="CosmoWiki.de bei Facebook" href="https://www.facebook.com/pages/CosmoWikide/120878727989418"></a>
          </li>
          <li className="social-button googleplus center">
            <a target="_blank" title="CosmoWiki.de bei Google Plus" href="https://plus.google.com/u/0/+CosmoWikide/posts"></a>
          </li>
          <li className="social-button twitter center">
            <a target="_blank" title="CosmoWiki.de bei Twitter" href="http://www.twitter.com/CosmoWiki_de"></a>
          </li>
          <li className="social-button github center">
            <a target="_blank" title="CosmoWiki.de bei Github" href="https://github.com/cosmowiki/cosmowikide"></a>
          </li>
          <li className="social-button info center">
            <a target="_self" title="&Uuml;ber CosmoWiki.de" href={appUrl.aboutSite()}></a>
          </li>
        </ul>
      </div>
    );
    
  }
  
}