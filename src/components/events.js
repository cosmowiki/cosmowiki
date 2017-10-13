import React from 'react';
import Notes from './notes';
import VcardComponent from './vcard';
import {Summary} from './chunks/summary';

export default class ChronicleComponent extends React.Component {

  constructor() {
    super();
    this.state = { itemInOverlay: null };
  }

  render() {
    const items = this.props.items;

    const itemForOverlay = (item) => {
      return { description: `${ item.date } in ${ item.place }`, ...item };
    };
    const showOverlay = (item) => {
      this.setState({ itemInOverlay: itemForOverlay(item) });
    };
    const hideOverlay = () => {
      this.setState({ itemInOverlay: null });
    };
    const overlay = this.state.itemInOverlay
      ? <VcardComponent item={ this.state.itemInOverlay } onClose={ hideOverlay } />
      : null;

    return (
      <main role="main" className="pure-u-1">
        <div id="siteTitle" className="events pure-u-1 center">
          <div id="siteTitleContainer">
            <h1>Chronik</h1>
            <h3>Meilensteine der Astronomie und Raumfahrt</h3>
          </div>
        </div>
        <div id="todo" className="pure-u-1">
          <p>@wolfram: pls hide the span id="coordinates" from embedded article in vcard (i.e. Lascaux)</p>
          <p>@wolfram: pls hide the img src="//de.wikipedia.org/wiki/Special:CentralAuto..." on bottom of embedded article in vcard</p>
        </div>
        <Summary>
          <p className="summary-text">
            Seit Jahrtausenden blicken wir in den Himmel und versuchen zu ergründen,
            was uns umgibt und woher wir kommen. Auch die frühen Menschen stellten
            sich wohl schon die große Frage: Was ist dort draußen?
          </p>
          <div className="summary-img float-left size-md">
            <a href="/img/events/nebra_lg.jpg" title="Himmelsscheibe von Nebra - Großansicht">
              <img src="/img/events/nebra_sm.jpg" alt="Himmelsscheibe von Nebra" />
            </a>
            <p className="summary-img-text">
              Himmelsscheibe<br />
              Quelle: Dbachmann<br />
              <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="CC BY-SA 3.0">CC BY-SA 3.0</a>
            </p>
          </div>
          <p className="summary-text">
            Täglich ziehen Sonne und Mond am Firmament entlang und bestimmen den Rhythmus
            des Lebens auf der Erde. Schon in den ersten menschlichen Gesellschaften
            erkannten Priester und Schamanen kosmische Zyklen und nutzten
            ihr Wissen. Aussaat und Ernte richteten sich danach, kultische Riten entstanden.
          </p>
          <p className="summary-text">
            Rund um den Globus besaßen die Erbauer der ersten Observatorien
            schon verblüffend genaue astronomische Kenntnisse. Die Sonnenwenden
            und Mondphasen, das Erscheinen von besonders hellen Planeten, Sternen
            und deren Konstellationen bildeten die Grundlagen für die ersten Kalender.
          </p>
          <div className="summary-img float-right size-xl">
            <a href="/img/events/herschel_telescope_lg.jpg" title="Wilhelm Herschels 40-Fuß-Teleskop - Großansicht">
              <img src="/img/events/herschel_telescope_sm.jpg" alt="Wilhelm Herschels 40-Fuß-Teleskop" />
            </a>
            <p className="summary-img-text">
              Herschels 40-Fuß-Teleskop
            </p>
          </div>
          <p className="summary-text">
            Seefahrer und Händler teilten die Beobachtungen, die sie auf ihren
            Reisen gewonnen hatten. Mathematiker und Philosophen berechneten bereits
            in der Antike geografische und astronomische Größen und stellten erste Theorien
            über die Beschaffenheit des Größten wie des Kleinsten im Universum auf.
          </p>
          <p className="summary-text">
            Zeit und Raum waren bestimmbar geworden. Die große Frage der Himmelskunde
            nach dem Zentrum der Welt bewegte die Astronomen des Mittelalters.
            Im Spannungsfeld zwischen Wissenschaft und kulturell-religiösen
            Traditionen setzten sich bahnbrechende Erkenntnisse jedoch nur langsam durch.
          </p>
          <p className="summary-text">
            Vor 500 Jahren sprengte dann das <em>Fernrohr</em> die Grenzen des
            menschlichen Auges. Nach und nach offenbarten sich die Gesetze der Natur,
            unser Weltbild wurde präziser. <em>Planetenbahnen</em> und
            die <em>Gravitation</em> wurden in der Sprache der Mathematik beschrieben.
          </p>
          <div className="summary-img float-left size-lg">
            <a href="/img/events/Columbia_sts-1_lg.jpg" title="Space Shuttle Columbia STS-1 - Großansicht">
              <img src="/img/events/Columbia_sts-1_sm.jpg" alt="Space Shuttle Columbia STS-1" />
            </a>
            <p className="summary-img-text">
              Space Shuttle Columbia, STS-1
            </p>
          </div>
          <p className="summary-text">
            Doch der Mensch wollte den Himmel nicht nur betrachten, er wollte ihn
            bereisen. Erkenntnisse in der Physik und Chemie ermöglichten das Reisen
            per Ballon, später im Flugzeug. Wir wollten mehr
            - schneller, höher, weiter!
          </p>
          <p className="summary-text">
            Die Raumfahrt beförderte dann den Menschen erstmals in den Kosmos.
            Sie bereicherte unseren Erfahrungsschatz um viele schöne und interessante
            Momente, aber auch um einige Tragödien. So ließen Generationen von
            Wissenschaftlern und Pionieren den kollektiven Wissensspeicher der
            Menschheit immer weiter anwachsen.
          </p>
          <p className="summary-text">
            <em>Urknall</em>, <em>Raumzeit</em> und <em>Quantenmechanik</em>, die Kräfte
            im <em>Atom</em>, <em>Schwarze Löcher</em> und <em>Dunkle Materie</em> - immer
            weiter dringt die Menschheit in die Geheimnissefen des Universums vor.
            Mit Augen, Ohren und Raumsonden greifen wir nach den Sternen, und jedes
            gelöste Rätsel wirft neue Fragen auf. Willkommen in der Gegenwart!
          </p>
          <h4>Wussten Sie schon?</h4>
          <ul className="summary-list">
            <li>
              Die ca. 4000 Jahre alte <em>Himmelsscheibe von Nebra</em> ist eines
              der ältesten Zeugnisse astronomischer Darstellungen der Menschheit.
            </li>
            <li>
              Chinesische Astonomen beschrieben bereits 613 v. Chr. den 2300 Jahre
              später nach <em>Edmund Halley</em> benannten Kometen.
            </li>
            <li>
              Schon 1917 entwickelte der deutsche Raumfahrtpionier <em>Hermann Oberth</em> eine
              mit Ethanol und Sauerstoff betriebene Rakete.
            </li>
          </ul>
        </Summary>
        <div id="dataArea" className="events pure-u-1">
          <div id="timeline">
            {items.map((item, idx) => <ItemComponent item={item} key={idx} onClick={() => showOverlay(item)} />)}
          </div>
        </div>
        {overlay}
        <Notes />
      </main>
    )
  }
}

const ItemComponent = ({item, onClick}) => {
  return (
    <div className="event-row data-row pure-u-1">
      <div className="event-data1 pure-u-1 pure-u-lg-9-24">
        <div className="event-date pure-u-1 pure-u-sm-11-24 pure-u-lg-1-3">
          <p>{item.date}</p>
        </div>
        <div className="event-dash pure-u-sm-1-12 pure-u-lg-1-24">
          <p>{item.place ? `-` : ''}</p>
        </div>
        <div className="event-place pure-u-1 pure-u-sm-11-24 pure-u-lg-15-24">
          <p>{item.place ? item.place : ''}</p>
        </div>
      </div>
      <div className="event-data2 pure-u-1 pure-u-lg-15-24">
        <div className="event-name pure-u-7-8 pure-u-md-1" onClick={onClick}>
          <p><a name={item.name}>{item.name}</a></p>
        </div>
      </div>
    </div>
  )
};

// <div id="timelineHeader"></div>
// {items.map((item, idx) => <ItemComponent item={item} key={idx} onClick={() => showOverlay(item)} />)}
// <div id="timelineFooter"></div>
