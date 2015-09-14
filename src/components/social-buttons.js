export default class SocialButtons {
  
  render() {
    
    return (
      <div id="social">
        <ul>
          <li className="social-button facebook center">
            <a href="https://www.facebook.com/pages/CosmoWikide/120878727989418" target="_blank" title="CosmoWiki.de bei Facebook"></a>
          </li>
          <li className="social-button googleplus center">
            <a href="https://plus.google.com/u/0/+CosmoWikide/posts" target="_blank" title="CosmoWiki.de bei Google Plus"></a>
          </li>
          <li className="social-button twitter center">
            <a href="http://www.twitter.com/CosmoWiki_de" target="_blank" title="CosmoWiki.de bei Twitter"></a>
          </li>
          <li className="social-button github center">
            <a href="https://github.com/cosmowiki/cosmowikide" target="_blank" title="CosmoWiki.de bei Github"></a>
          </li>
          <li className="social-button info center">
            <a href="about.php" target="_self" title="&Uuml;ber CosmoWiki.de"></a>
          </li>
        </ul>
      </div>
    );
    
  }
  
}