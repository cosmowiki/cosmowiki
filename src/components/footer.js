import React from 'react';

const Footer = ({appUrl}) => {
  return (
    <footer className="module pure-u-1 center">
      <div id="sitemap" className="left">
        <ul className="pure-u-1 pure-u-lg-1-6">
          {[
            {url: appUrl.eventsSite(), name: 'Chronik'},
          ].map(link =>
            <li key={link.url}>
              <a href={ link.url }>{ link.name }</a>
            </li>
          )}
        </ul>
        <ul className="pure-u-1 pure-u-lg-1-6">
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
        <ul className="pure-u-1 pure-u-lg-1-6">
          {[
            {url: '', name: 'Orte'},
          ].map(link =>
            <li key={link.url}>
              <a href={ link.url }>{ link.name }</a>
            </li>
          )}
        </ul>
        <ul className="pure-u-1 pure-u-lg-1-6">
          {[
            {url: appUrl.objectsSite(), name: 'Objekte'},
            {url: appUrl.peopleSite(), name: 'Sonnensystem'},
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
        <ul className="pure-u-1 pure-u-lg-1-6">
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
        <ul className="pure-u-1 pure-u-lg-1-6">
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
          {[
            {url: appUrl.aboutSite() + '#whatis', name: 'Über uns'},
            {url: appUrl.aboutSite() + '#license', name: 'Lizenz'},
            {url: appUrl.aboutSite() + '#contribute', name: 'Beitragen'},
            {url: appUrl.aboutSite() + '#thanks', name: 'Danke'},
            {url: appUrl.aboutSite() + '#contact', name: 'Kontakt'},
            {url: appUrl.aboutSite() + '#imprint', name: 'Impressum'},
          ].map(link =>
            <a className="pure-u-lg-1-6" href={ link.url } target="_self" title={ link.name }>{ link.name }</a>
          )}
        </div>
        <div id="extrasSocial" className="pure-u-1 pure-u-lg-1-2">
          <a id="Twitter" href="https://twitter.com/cosmowiki" title="CosmoWiki.org bei Twitter"></a>
          <a id="Facebook" href="https://www.facebook.com/CosmoWiki.org/" title="CosmoWiki.org bei Facebook"></a>
          <a id="GooglePlus" title="CosmoWiki.org bei Google Plus"></a>
          <a id="Github" href="https://github.com/cosmowiki/cosmowiki" title="CosmoWiki.org bei Github"></a>
        </div>
      </div>
      <div id="version" className="center">
        <p>v. 1.0.0</p>
      </div>
    </footer>
  )
};

export default Footer;

//<a className="footerLink" rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank"><img
//                  title="CC-BY-SA" src="/img/cc-by-sa-88x31.png" alt="CC-By-SA"/></a>
