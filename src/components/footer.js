import React from 'react';
export default class Footer {

  render() {

    let appUrl = this.props.appUrl;

    return (
      <footer className="center pure-u-1">
        <div id="footerContainer" className="pure-u-1">
          <div id="footerMainPages" className="footerPart pure-u-1-2 pure-u-sm-1-5">
            <h3>Hauptseiten</h3>
            <ul>
              {[
                {url: appUrl.astronomySite(), name: 'Astronomie'},    
                {url: appUrl.spaceflightSite(), name: 'Raumfahrt'},    
                {url: appUrl.eventsSite(), name: 'Chronik'},    
                {url: appUrl.peopleSite(), name: 'Personen'},    
                {url: '', name: 'Orte'},
                {url: appUrl.objectsSite(), name: 'Objekte'},
                
              ].map(link =>
                <li>
                  <a className="footerLink" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>          
          </div>
          <div id="footerSubPages" className="footerPart pure-u-1-2 pure-u-sm-1-5">
            <h3>Unterseiten</h3>
            <ul>
              {[
                {url: appUrl.astronomersSite(), name: 'Astronomen'},    
                {url: appUrl.astronautsSite(), name: 'Raumfahrer'},    
                {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},    
                {url: appUrl.constellationsSite(), name: 'Sternbilder'},    
                {url: appUrl.starsSite(), name: 'Sterne'},
                {url: appUrl.missionsSite(), name: 'Missionen'},
                {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
                
              ].map(link =>
                <li>
                  <a className="footerLink" href={ link.url }>{ link.name }</a>
                </li>
              )}
            </ul>          
          </div>
          <div id="footerNetworks" className="footerPart pure-u-1-2 pure-u-sm-1-5">
            <h3>Folgen</h3>
            <ul>
              <li>
                <a className="footerLink" target="_blank" title="CosmoWiki.de bei Twitter">Twitter</a>
              </li>
              <li>
                <a className="footerLink" target="_blank" title="CosmoWiki.de bei Facebook">Facebook</a>
              </li>
              <li>
                <a className="footerLink" target="_blank" title="CosmoWiki.de bei Google Plus">Google+</a>
              </li>
              <li>
                <a className="footerLink" target="_blank" title="CosmoWiki.de bei Github">Github</a>
              </li>
          </ul>         
          </div>
          <div id="footerShare" className="footerPart pure-u-1-2 pure-u-sm-1-5">
            <h3>Teilen</h3>
            <ul>
              <li>
                <div className="shariff" data-theme="grey" data-services="[&quot;twitter&quot;,&quot;googleplus&quot;,&quot;facebook&quot;,&quot;mail&quot;,&quot;info&quot;]"></div>
                SHARIFF!!!!
              </li>
              <li>
                Facebook
              </li>
              <li>
                Twitter
              </li>
              <li>
                Google+
              </li>
            </ul>
          </div>
          <div id="footerElse" className="footerPart pure-u-1-2 pure-u-sm-1-5">
            <h3>Sonstiges</h3>
            <ul>
              <li>
                <a className="footerLink" /*href={appUrl.aboutSite()}*/ target="_self" title="&Uuml;ber CosmoWiki.de">Über uns</a>
              </li>
              <li>
                <a className="footerLink" /*href={appUrl.aboutSite()}*/ target="_self" title="Beitragen">Beitragen</a>
              </li>
              <li>
                <a className="footerLink" /*href={appUrl.aboutSite()}*/ target="_self" title="Lizenz">Lizenz</a>
              </li>
              <li>
                <a className="footerLink" rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank"><img
                  title="CC-BY-SA" src="/img/cc-by-sa-88x31.png" alt="CC-By-SA"/></a>
              </li>
            </ul>
          </div>
        </div>
        <div id="footerFoot" className="center pure-u-1">
          v. 1.0
        </div>
      </footer>
    )
  }
}