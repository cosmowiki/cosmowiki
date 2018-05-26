import React from 'react';

const Footer = ({appUrl}) => {
  return (
    <footer className="pure-u-1 center">
      <div id="footerContainer">
        <div id="sitemap" className="left">
          <ul className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-6">
            {[
              {url: appUrl.eventsSite(), name: 'Chronik'},
            ].map(link =>
              <li key={link.url}>
                <a href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
          <ul className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-6">
            {[
              {url: appUrl.peopleSite(), name: 'Personen'},
              {url: appUrl.scientistsSite(), name: 'Wissenschaftler'},
              {url: appUrl.astronautsSite(), name: 'Raumfahrer'},
            ].map(link =>
              <li key={link.url}>
                <a href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
          <ul className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-6">
            {[
              {url: appUrl.placesSite(), name: 'Orte'},
              {url: appUrl.groundstationsSite(), name: 'Bodenstationen'},
              {url: appUrl.artifactsSite(), name: 'Fundorte'},
              {url: appUrl.observatoriesSite(), name: 'Observatorien'},
              {url: appUrl.launchpadsSite(), name: 'Startplätze'},
            ].map(link =>
              <li key={link.url}>
                <a href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
          <ul className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-6">
            {[
              {url: appUrl.objectsSite(), name: 'Objekte'},
              {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
              {url: appUrl.constellationsSite(), name: 'Sternbilder'},
              {url: appUrl.starsSite(), name: 'Sterne'},
              {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
              {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},
            ].map(link =>
              <li key={link.url}>
                <a href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
          <ul className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-6">
            {[
              {url: appUrl.astronomySite(), name: 'Astronomie'},
              {url: appUrl.scientistsSite(), name: 'Wissenschaftler'},
              {url: appUrl.solarSystemSite(), name: 'Sonnensystem'},
              {url: appUrl.constellationsSite(), name: 'Sternbilder'},
              {url: appUrl.starsSite(), name: 'Sterne'},
              {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},
            ].map(link =>
              <li key={link.url}>
                <a href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
          <ul className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-6">
            {[
              {url: appUrl.spaceflightSite(), name: 'Raumfahrt'},
              {url: appUrl.astronautsSite(), name: 'Raumfahrer'},
              {url: appUrl.missionsSite(), name: 'Missionen'},
              {url: appUrl.spacewalksSite(), name: 'Weltraumausstiege'},
              {url: appUrl.spaceStationsSite(), name: 'Raumstationen'},
              {url: appUrl.spaceTelescopesSite(), name: 'Weltraumteleskope'},
            ].map(link =>
              <li key={link.url}>
                <a href={ link.url }>{ link.name }</a>
              </li>
            )}
          </ul>
        </div>
  	    <div id="extras">
          <div id="extrasSelf" className="pure-u-1 pure-u-lg-1-2">
            <ul>
              {[
                {url: appUrl.aboutSite() + '#whatis', name: 'Über uns'},
                {url: appUrl.aboutSite() + '#license', name: 'Lizenz'},
                {url: appUrl.aboutSite() + '#contribute', name: 'Beitragen'},
                {url: appUrl.aboutSite() + '#thanks', name: 'Danke'},
                {url: appUrl.aboutSite() + '#contact', name: 'Kontakt'},
                {url: appUrl.aboutSite() + '#imprint', name: 'Impressum'},
              ].map(link =>
                <li key={link.url}>
                  <a href={ link.url } target="_self" title={ link.name }>{ link.name }</a>
                </li>
              )}
            </ul>
          </div>
          <div id="extrasSocial" className="pure-u-1 pure-u-lg-1-2">
            <ul>
              <li><a id="Twitter" href="https://twitter.com/cosmowiki" title="CosmoWiki.org bei Twitter"></a></li>
              <li><a id="Facebook" href="https://www.facebook.com/CosmoWiki.org/" title="CosmoWiki.org bei Facebook"></a></li>
              <li><a id="GooglePlus" href="https://plus.google.com/u/0/+CosmoWikide" title="CosmoWiki.org bei Google Plus"></a></li>
              <li><a id="Github" href="https://github.com/cosmowiki/cosmowiki" title="CosmoWiki.org bei Github"></a></li>
            </ul>
          </div>
        </div>
        <div id="version" className="pure-u-1-3 center">
          <p>v. 1.0.0</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
