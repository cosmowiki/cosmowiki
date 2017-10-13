import React from 'react';
import {ConstellationNotes} from './notes';
import {Summary} from './chunks/summary';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="constellations pure-u-1 center">
        <div id="siteTitleContainer">
          <h1>Sternbilder</h1>
          <h3>Figuren am Firmament</h3>
        </div>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: pls make the filter work with FilterRows as in stars-site</p>
      </div>
      <Summary>
        <p className="summary-text">
          <em>Orion</em>, <em>Kassiopeia</em> oder die beiden <em>Zwillinge</em> <em>Castor</em> und <em>Pollux</em> -
          wir alle kennen mindestens ein Sternbild (Konstellation) und können es
          aus dem Stehgreif am Nachthimmel finden. Die Figuren weisen seit Jahrhunderten
          Reisenden den Weg.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/constellations/Ursa_Major_(Bode).jpg" title="Großer Bär, Kupferstich aus dem Sternatlas von Johann Elert Bode - Großansicht">
            <img src="/img/constellations/Ursa_Major_(Bode).jpg" alt="Großer Bär, Kupferstich aus dem Sternatlas von Johann Elert Bode" />
          </a>
          <p className="summary-img-text">
            Großer Bär, Johann Elert Bode
          </p>
        </div>
        <p className="summary-text">
          Auf der Nordhalbkugel helfen <em>Großer Wagen</em> und <em>Kleiner Wagen</em> den
          Polarstern zu finden, wobei der Große Wagen als Asterismus kein eigenes
          Sternbild ist, sondern nur ein Teil des <em>Großen Bären</em>. Auch
          die <em>Kassiopeia</em>, das "Himmels-W" zieht nach Norden hin geöffnet
          am Firmament entlang.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/constellations/Dunhuang_star_map_lg.jpg" title="Sternenkarte von Dunhuang, China - Großansicht">
            <img src="/img/constellations/Dunhuang_star_map_sm.jpg" alt="Sternenkarte von Dunhuang, China" />
          </a>
          <p className="summary-img-text">
            Dunhuang Sternenkarte
          </p>
        </div>
        <p className="summary-text">
          Die Bewohner der südlichen Hemisphäre orientieren sich am <em>Kreuz des
          Südens</em>, dessen Name von christlichen Seefahrern geprägt wurde.
          Schon <em>Amerigo Vespucci</em>, nach dem die Neue Welt ihren Namen Amerika
          erhielt, nutzte das Kreuz des Südens Anfang des 16. Jahrhunderts zur Orientierung
          auf seinen Reisen entlang der Ostküste Südamerikas.
        </p>
        <p className="summary-text">
          Sternbilder dürften schon in vielen frühgeschichtlichen Kulturen bekannt
          gewesen sein. Die heute verwendeten haben ihren Ursprung in den 12 Tierkreiszeichen
          aus Babylonien und dem Ägypten des Altertums. Mitte des 2. Jahrhunderts
          n. Chr. erstellte <em>Claudius Ptolemäus</em> dann mit dem <em>Almagest</em> eines
          der größten Werke der antiken Astronomie. Dieses für die folgenden 1500
          Jahre prägende Lehrbuch enthielt auch einen Sternenkatalog mit Angaben
          zu 1025 Sternen in 48 Sternbildern.
        </p>
        <div className="summary-img">
          <a href="/img/constellations/Planisphaerium_Coeleste_lg.jpg" title="Planisphaerium Coeleste von Georg Christoph Eimmart, 1705 - Großansicht">
            <img src="/img/constellations/Planisphaerium_Coeleste_sm.jpg" alt="Planisphaerium Coeleste von Georg Christoph Eimmart, 1705" />
          </a>
          <p className="summary-img-text">
            Planisphaerium Coeleste,<br />
            Georg Christoph Eimmart
          </p>
        </div>
        <p className="summary-text">
          <em>Johann Bayer</em> übernahm dann 1603 in seiner <em>Uranometria</em> einige
          Konstellationen aus Himmelsgloben des <em>Petrus Plancius</em>, die auf
          die niederländischen Navigatoren <em>Pieter Dirkszoon Keyser</em> und <em>Frederick
          de Houtman</em> zurückgingen. Der Astronomen <em>Johannes
          Hevelius</em> und <em>Nicolas-Louis de Lacaille</em> fügten weitere hinzu.
        </p>
        <p className="summary-text">
          Religiöse Motive führten zur Umbenennung und Ersetzung heidnischer Sternbilder.
          Zu Ehren zeitgenössischer Herrscher oder aus astronomischer Notwendigkeit
          heraus wurde der Kanon immer wieder reformiert und erweitert. Durch die
          Erfindung des Teleskopes war die Zahl der bekannten Sterne schnell gewachsen
          und die Kreativität bei der "Erfindung" neuer Konstellationen wuchs mit
          dem Zwang nach Zuordnung.
        </p>
        <div className="summary-img size-sm">
          <a href="/img/constellations/Papua_New_Guinea_lg.png" title="Flagge von Papua Neuguinea - Großansicht">
            <img src="/img/constellations/Papua_New_Guinea_sm.png" alt="Flagge von Papua Neuguinea" />
          </a>
          <p className="summary-img-text">
            Papua-Neuguinea
          </p>
        </div>
        <p className="summary-text">
          Nach einem Vorschlag des amerikanischen Astronomen <em>Henry Norris Russell</em> legte
          dann 1922 die <em>Internationale Astronomische Union</em> (IAU) auf ihrer ersten
          Generalversammlung 88 Sternbilder fest, deren Grenzen sechs Jahre später
          exakt definiert wurden.
        </p>
        <p className="summary-text">
          Weltweit am bekanntesten dürfte das Kreuz des Südens sein, das auf vielen
          Flaggen abgebildet ist und auch das Logo der <em>Europäischen
          Südsternwarte</em> (ESO) ziert. Der Große Wagen prangt gemeinsam mit dem
          Polarstern auf der Flagge des US-Bundesstaates Alaska.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Durch die <em>Präzessionsbwegung der Erde</em> war das Kreuz des Südens in
            der Antike auch im Mittelmeerraum sichtbar.
          </li>
          <li>
            Das Kreuz des Südens ist auf den Staatsflaggen von Australien, Brasilien,
            Neuseeland, Papua-Neuguinea und Samoa zu sehen.
          </li>
          <li>
            Die Namen von Sternbildern wie <em>Chemischer Ofen</em> oder <em>Luftpumpe</em> symbolisieren
            den technischen Fortschritt des 18. Jahrhunderts.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="constellations module pure-u-1">
        <div id="controlArea" className="constellations pure-u-1">
          <div id="controllers" className="pure-u-1">
            <div id="filter" className="constellations pure-u-1-2 right">
              <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
              <div id="filterArea">
                <form id="filterConstellationsByVisibility" className="filter-form">
                  <label>Sichtbarkeit:</label>
                  <select name="constellationsVisibilities" defaultValue="showAllConstellations">
                    <option value="showAllConstellations">alle</option>
                    <option value="showConstellationsNorth">nur nördlich</option>
                    <option value="showConstellationsNorthsouth">nördlich, teils südlich</option>
                    <option value="showConstellationsMid">mittig</option>
                    <option value="showConstellationsSouthnorth">südlich, teils nördlich</option>
                    <option value="showConstellationsSouth">nur südlich</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="constellationsTable">
          {constellations.map((constellation, idx) => <ConstellationComponent constellation={constellation} key={idx}/>)}
        </div>
      </div>
      <ConstellationNotes />
    </main>
  );
};

export default ConstellationsComponent;

const ConstellationComponent = ({constellation:item}) => {
  return (
    <div className="constellation-row data-row pure-u-1">
      <div className="constellation-img pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 center">
        <a href={item.imageLargeUrl} title={item.name}><img src={item.imageSmallUrl} alt={item.name} /></a>
        <small>
          Bild: {item.imageSrc}<br />
          <a href={item.imageLicenceUrl}>{item.imageLicence}</a>
        </small>
      </div>
      <div className="constellation-info pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 center">
        <div className="constellation-name pure-u-1 pure-u-md-1-2">
          <p className="constellation-name"><a href={item.wikipediaUrl} title={item.name}>{item.name}</a></p>
          <p className="constellation-latin-name">({item.latinName})</p>
        </div>
        <div className="constellation-data pure-u-1 pure-u-md-1-2">
          <p className="constellation-data1">sichtbar von {item.visibleFrom} bis {item.visibleTo}</p>
          <p className="constellation-data2">Fläche: {item.squareDegrees} deg²</p>
          <p className="constellation-data3">hellster Stern:<br />{item.brightestUrl ? <a href={item.brightestUrl} title={item.brightest}>{item.brightest}</a> : `${item.brightest}`} ({item.highestBrightness} mag)</p>
          <p className="constellation-data4">benannt {item.namedYear} von <a href={item.astronomerUrl} title={item.astronomer}>{item.astronomer}</a></p>
        </div>
      </div>
    </div>
  );
};
