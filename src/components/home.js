export default class Home {

  render() {

    let appUrl = this.props.appUrl;
    
    return (
      <main role="main" className="pure-u-2-3">
        <div id="featured" className="pure-u-1-1 home">
          <h1>CosmoWiki.de &#8211; das Online-Lexikon</h1>
          <p>Die Enzyklop&auml;die &uuml;ber Astronomie und Raumfahrt<br />
            Vergangenheit, Gegenwart und Zukunft, bedeutende Orte und Ereignisse,<br />
            Ph&auml;nomene und Naturgesetze, herausragende Personen und Institutionen, Organisationen und ihre Programme
          </p>
        </div>
        <div id="infoArea" className="pure-u-1">
          <div id="infoText" className="pure-u-2-3 justify">
            <h2>CosmoWiki.de &#8211; die Enzyklop&auml;die</h2>
            <p>Seit Jahrtausenden blicken die Menschen in den Himmel und versuchen zu ergr&uuml;nden, was uns umgibt und
              woher wir kommen.
              So wurde unser Weltbild immer wieder durch neue Erkenntnisse entwickelt und erweitert.
              Doch der Mensch wollte das All nicht nur betrachten, er wollte es bereisen.
              Die Raumfahrt bereicherte den menschlichen Erfahrungsschatz um viele sch&ouml;ne und interessante Momente,
              aber auch um einige Trag&ouml;dien.</p>
            <p>So lie&szlig;en Generationen von Wissenschaftlern und Pionieren der Astronomie und Raumfahrt
              den kollektiven Wissensspeicher der Menschheit immer weiter wachsen.
              Dieses Lexikon bietet einen &Uuml;berblick &uuml;ber die Entwicklung von Astronomie und Raumfahrt von der
              Vergangenheit
              &uuml;ber die Gegenwart bis hinein in die Zukunft. Es erm&ouml;glicht dem Nutzer einen Einblick in die
              faszinierende Welt von Wissenschaft und Technik.</p>
          </div>
          <div id="news" className="pure-u-1-3 justify">
            <h2>Twitter</h2>
            <a className="twitter-timeline" href="https://twitter.com/CosmoWiki_de" width="310" height="180"
               data-widget-id="558644819544010752" data-link-color="#55f"
               data-chrome="noheader nofooter noborders transparent">Tweets von @CosmoWiki_de </a>
          </div>
        </div>
        <div id="boxContainer" className="pure-u-1">
          <div id="boxLeft" className="pure-u-1-3 box justify">
            <a href={appUrl.chronicleSite()} title="Chronik" target="_self" className="liimagelink"><img
              title="Stonehenge, Wigulf, Quelle: Wikipedia" src="/img/past.jpg"
              alt="Stonehenge, Wigulf, Quelle: Wikipedia"/></a>
            <h3><a href={appUrl.chronicleSite()} title="Chronik" target="_self" className="liinternal">Chronik</a>
            </h3>
            <p>Die Astronomie gilt als die &auml;lteste Wissenschaft. Bereits in der Steinzeit begannen Menschen zu
              forschen
              und noch heute k&uuml;nden pr&auml;zise Kalender, riesige Observatorien und fantastische Instrumente vom
              Wissensdrang unserer Vorfahren.</p>
          </div>
          <div id="boxMid" className="pure-u-1-3 box justify">
            <a href={appUrl.peopleSite()} title="Personen" target="_self" className="liimagelink"><img
              title="Personen" src="/img/persons.jpg" alt="Personen"/></a>
            <h3><a href={appUrl.peopleSite()} title="Personen" target="_self" className="liinternal">Personen</a>
            </h3>
            <p>Naturwissenschaftler und Raumfahrer &#8211; seit Jahrtausenden entdecken und erobern sie neue Welten und
              R&auml;ume,
              sie erkennen Zusammenh&auml;nge und Naturgesetze. Als Pioniere erweitern sie st&auml;ndig die Grenzen
              unserer Existenz.</p>
          </div>
          <div id="boxRight" className="pure-u-1-3 box justify">
            <a href="http://cosmowiki.de/de1/places.php" title="Orte" target="_self" className="liimagelink"><img
              title="Orte" src="/img/places.jpg" alt="Orte"/></a>
            <h3><a href="http://cosmowiki.de/de1/places.php" title="Orte" target="_self" className="liinternal">Orte</a>
            </h3>
            <p>Besuchen Sie die Orte des Geschehens auf der Karte: Tempel und Megalithanlagen, Observatorien und
              Sternwarten,
              die Wirkungsst&auml;tten ber&uuml;hmter Wissenschaftler, Universit&auml;ten, Institute und Labore,
              Testgel&auml;nde und Weltraumbahnh&ouml;fe!</p>
          </div>
        </div>
      </main>
    )
  }
}