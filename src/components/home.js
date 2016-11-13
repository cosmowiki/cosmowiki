import React from 'react';
export default class HomeComponent {

  render() {

    let appUrl = this.props.appUrl;
    
    return (
      <main role="main" className="home pure-u-1">
        <div id="homeNav" className="pure-u-1 center">
          <ul id="home1stMenu" className="pure-u-1 center">
            <li className="pure-u-1 pure-u-md-1-2">
              <ul id="homeAstronomyMenu">
                <li>
                  <a id="homeAstronomyHead" className="home-link home-astronomy-link center" href={appUrl.astronomySite()}>Astronomie</a>
                  <ul id="homeAstronomySubMenu">
                    <li>
                      <a className="home-link home-astronomy-link center" href={appUrl.astronomersSite()}>Astronomen</a>
                    </li>
                    <li>
                      <a className="home-link home-astronomy-link center" href={appUrl.solarSystemSite()}>Sonnensystem</a>
                    </li>
                    <li>
                      <a className="home-link home-astronomy-link center" href={appUrl.constellationsSite()}>Sternbilder</a>
                    </li>
                    <li>
                      <a className="home-link home-astronomy-link center" href={appUrl.starsSite()}>Sterne</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="pure-u-1 pure-u-md-1-2">
              <ul id="homeSpaceflightMenu">
                <li>
                  <a id="homeSpaceflightHead" className="home-link home-spaceflight-link center" href={appUrl.spaceflightSite()}>Raumfahrt</a>
                  <ul id="homeSpaceflightSubMenu">
                    <li>
                      <a className="home-link home-spaceflight-link center" href={appUrl.astronautsSite()}>Raumfahrer</a>
                    </li>
                    <li>
                      <a className="home-link home-spaceflight-link center" href={appUrl.missionsSite()}>Missionen</a>
                    </li>
                    <li>
                      <a className="home-link home-spaceflight-link center" href={appUrl.spaceStationsSite()}>Raumstationen</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul id="home2ndMenu" className="pure-u-1 center">
            <li>
              <a id="homeChronicleLink" className="pure-u-1 pure-u-md-1-4 home-link center" href={appUrl.eventsSite()}>Chronik</a>
            </li>
            <li>
              <a id="homePeopleLink" className="pure-u-1 pure-u-md-1-4 home-link center" href={appUrl.peopleSite()}>Personen</a>
            </li>
            <li>
              <a id="homePlacesLink" className="pure-u-1 pure-u-md-1-4 home-link center" href="places.php">Orte</a>
            </li>
            <li>
              <a id="homeObjectsLink" className="pure-u-1 pure-u-md-1-4 home-link center" href={appUrl.objectsSite()}>Objekte</a>
            </li>
          </ul>
        </div>
      </main>
    )
  }
}

//<div id="featured" className="pure-u-1 home center">
//  <h1>CosmoWiki.de</h1>
//  <h3>Astronomie + Raumfahrt = ein Lexikon</h3>
//</div>
//<div id="infoArea" className="pure-u-1 center">
//  <div id="infoText" className="pure-u-1 pure-u-lg-3-4 justify">
//    <h2>CosmoWiki.de &#8211; die Enzyklop&auml;die</h2>
//    <p>Seit Jahrtausenden blicken die Menschen in den Himmel und versuchen zu ergr&uuml;nden, was uns umgibt und
//      woher wir kommen.
//      So wurde unser Weltbild immer wieder durch neue Erkenntnisse entwickelt und erweitert.
//      Doch der Mensch wollte das All nicht nur betrachten, er wollte es bereisen.
//      Die Raumfahrt bereicherte den menschlichen Erfahrungsschatz um viele sch&ouml;ne und interessante Momente,
//      aber auch um einige Trag&ouml;dien.</p>
//    <p>So lie&szlig;en Generationen von Wissenschaftlern und Pionieren der Astronomie und Raumfahrt
//      den kollektiven Wissensspeicher der Menschheit immer weiter wachsen.
//      Dieses Lexikon bietet einen &Uuml;berblick &uuml;ber die Entwicklung von Astronomie und Raumfahrt von der
//      Vergangenheit &uuml;ber die Gegenwart bis hinein in die Zukunft. Es erm&ouml;glicht dem Nutzer einen Einblick in die
//      faszinierende Welt von Wissenschaft und Technik.</p>
//  </div>
//</div>
//          <div id="news" className="pure-u-1 pure-u-sm-1-3 justify">
//            <h2>Twitter</h2>
//            <a className="twitter-timeline" href="https://twitter.com/CosmoWiki_de" width="310" height="180"
//               data-widget-id="558644819544010752" data-link-color="#55f"
//               data-chrome="noheader nofooter noborders transparent">Tweets von @CosmoWiki_de </a>
//          </div>
//          <a href={appUrl.eventsSite()} title="Chronik" target="_self" className="liimagelink"><img
//              title="Stonehenge, Wigulf, Quelle: Wikipedia" src="/img/past.jpg"
//              name="Chronik" alt="Chronik"/></a>
//          <a href={appUrl.peopleSite()} title="Personen" target="_self" className="liimagelink"><img
//              title="Personen" src="/img/persons.jpg" name="Personen" alt="Personen"/></a>
//              <a href="http://cosmowiki.de/de1/places.php" title="Orte" target="_self" className="liimagelink"><img
//              title="Orte" src="/img/places.jpg" name="Orte" alt="Orte"/></a>
//<h3><a href={appUrl.eventsSite()} title="Chronik" target="_self" className="liinternal">Chronik</a>
//            </h3>
//            <p>Die Astronomie gilt als die &auml;lteste Wissenschaft. Bereits in der Steinzeit begannen Menschen zu
//              forschen und noch heute k&uuml;nden pr&auml;zise Kalender, riesige Observatorien und fantastische Instrumente vom
//              Wissensdrang unserer Vorfahren.</p>
//<h3><a href={appUrl.peopleSite()} title="Personen" target="_self" className="liinternal">Personen</a>
//            </h3>
//            <p>Naturwissenschaftler und Raumfahrer &#8211; seit Jahrtausenden entdecken und erobern sie neue Welten und
//              R&auml;ume, sie erkennen Zusammenh&auml;nge und Naturgesetze. Als Pioniere erweitern sie st&auml;ndig die Grenzen
//              unserer Existenz.</p>
//<h3><a href="http://cosmowiki.de/de1/places.php" title="Orte" target="_self" className="liinternal">Orte</a>
//            </h3>
//            <p>Besuchen Sie die Orte des Geschehens auf der Karte: Tempel und Megalithanlagen, Observatorien und
//              Sternwarten, die Wirkungsst&auml;tten ber&uuml;hmter Wissenschaftler, Universit&auml;ten, Institute und Labore,
//              Testgel&auml;nde und Weltraumbahnh&ouml;fe!</p>
//<h3><a href="http://cosmowiki.de/de1/objects.php" title="Objekte" target="_self" className="liinternal">Objekte</a>
//            </h3>
//            <p>Arch&auml;ologische Fundst&uuml;cke, historische Apparaturen und Instrumente - 
//              Raketen, Satelliten, Raumsonden - Planeten, Sterne oder Galaxien: Sie alle sind Objekte der Faszination
//              f&uuml;r Tausende von Wissenschaftlern - und f&uuml;r uns.</p>