import React from 'react';

const Footer = ({appUrl}) => {
  return (
    <footer className="pure-u-1 center">
      <div id="todo" className="pure-u-1">
        <p>@wolfram pls insert the shariff-button</p>
      </div>
      <div id="footerContainer" className="pure-u-1">
        <div id="footerMainPages" className="footer-part pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
          <h4>Hauptseiten</h4>
          <ul>
            {[
              {url: appUrl.eventsSite(), name: 'Chronik'},
              {url: appUrl.peopleSite(), name: 'Personen'},
              {url: '', name: 'Orte'},
              {url: appUrl.objectsSite(), name: 'Objekte'},
              {url: appUrl.astronomySite(), name: 'Astronomie'},
              {url: appUrl.spaceflightSite(), name: 'Raumfahrt'},

            ].map(link =>
              <li key={link.url}>
                <a className="footerLink" href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
        </div>
        <div id="footerSubPages" className="footer-part pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
          <h4>Unterseiten</h4>
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
              <li key={link.url}>
                <a className="footerLink" href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
        </div>
        <div id="footerNetworks" className="footer-part pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
          <h4>Folgen</h4>
          <ul>
            <li>
              <a className="footerLink" href="https://twitter.com/cosmowiki" target="_blank" title="CosmoWiki.org bei Twitter">Twitter</a>
            </li>
            <li>
              <a className="footerLink" href="https://www.facebook.com/CosmoWiki.org/" target="_blank" title="CosmoWiki.org bei Facebook">Facebook</a>
            </li>
            <li>
              <a className="footerLink" target="_blank" title="CosmoWiki.org bei Google Plus">Google+</a>
            </li>
            <li>
              <a className="footerLink" href="https://github.com/cosmowiki/cosmowiki" target="_blank" title="CosmoWiki.org bei Github">Github</a>
            </li>
        </ul>
        </div>
        <div id="footerShare" className="footer-part pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
          <h4>Teilen</h4>
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
        <div id="footerElse" className="footer-part pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
          <h4>Wir &uuml;ber uns</h4>
          <ul>
            <li>
              <a className="footerLink" href={appUrl.aboutSite()} target="_self" title="Was ist CosmoWiki.org?">Was ist CosmoWiki.org?</a>
            </li>
            <li>
              <a className="footerLink" href={appUrl.aboutSite()} target="_self" title="Lizenz">Lizenz</a>
            </li>
            <li>
              <a className="footerLink" href={appUrl.aboutSite()} target="_self" title="Beitragen">Beitragen</a>
            </li>
            <li>
              <a className="footerLink" href={appUrl.aboutSite()} target="_self" title="Danksagungen">Danksagungen</a>
            </li>
            <li>
              <a className="footerLink" /*href={appUrl.contactSite()}*/ target="_self" title="Kontakt">Kontakt</a>
            </li>
            <li>
              <a className="footerLink" href={appUrl.aboutSite()} target="_self" title="Impressum">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="footerFoot" className="pure-u-1 center">
        <p>v. 1.0</p>
      </div>
    </footer>
  )
};

export default Footer;

//<a className="footerLink" rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank"><img
//                  title="CC-BY-SA" src="/img/cc-by-sa-88x31.png" alt="CC-By-SA"/></a>
