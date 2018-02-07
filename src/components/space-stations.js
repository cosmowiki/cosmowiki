import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const SpaceStationsComponent = ({spaceStations:stations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="stations pure-u-1 center">
        <div id="siteTitleContainer">
          <h1>Raumstationen</h1>
          <h3>künstliche Habitate im All</h3>
        </div>
      </div>
      <Summary>
        <p className="summary-text">
          Schon lange sahen Visionäre die Notwendigkeit, das Leben im All zu erproben.
          Langfristig werden wir wohl längere Reisen durch den Kosmos unternehmen,
          ob zum Mond oder Mars oder später sogar über die Grenzen unseres Sonnensystems
          hinaus. Der Aufenthalt im Weltall wird Teil der menschlichen Zukunft sein.
          Doch wir sind nicht für ein Überleben im All geschaffen. Dort
          draußen fehlt es an Luft, Wasser und Nahrung, die Strahlung ist hochgradig
          zellschädigend, und Mikrometeoriten sind eine reale Gefahr. Nach den ersten
          bemannten Raumflügen der 1960er Jahre wollten wir nun Astronauten auch
          für längere Zeit in den Weltraum schicken.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/spacestations/Von_Braun_1952_Space_Station_Concept_lg.jpg" title="Konzept einer Raumstation, v. Braun - Großansicht">
            <img src="/img/spacestations/Von_Braun_1952_Space_Station_Concept_sm.jpg" alt="Konzept einer Raumstation, v. Braun" />
          </a>
          <p className="summary-img-text">
            Konzept einer Raumstation, v. Braun
          </p>
        </div>
        <p className="summary-text">
          Man nehme also Luft zum Atmen, ausreichend Trinkwasser und getrocknete
          oder auf anderem Weg konservierte Nahrung und Treibstoff, umhülle alles
          mit einigen Millimetern Aluminiumblech und einer Isolierung gegen die
          Kälte des Alls und transportiere dieses Gebilde mit einer Rakete auf
          in einen Orbit um die Erde. Fertig ist das Habitat im All.
        </p>
        <div className="summary-img">
          <a href="/img/spacestations/Salyut_1_lg.png" title="Saljut 1 mit Sojus-Raumschiff - Großansicht">
            <img src="/img/spacestations/Salyut_1_sm.png" alt="Saljut 1 mit Sojus-Raumschiff" />
          </a>
          <p className="summary-img-text">
            Saljut 1 mit Sojus-Raumschiff
          </p>
        </div>
        <p className="summary-text">
          Ganz so einfach ist es natürlich nicht. Raumstationen zählen zu den teuersten
          Raumfahrtprojekten überhaupt. Sie sind so aufwändig, dass sich zur Zeit
          14 Nationen mit ihren Raumfahrtagenturen an der <em>Internationalen
          Raumstation</em> (ISS) beteiligen. Die ersten Stationen waren einzelne Raumschiffe,
          für eine Besatzung von zwei bis drei Raumfahrern ausgelegt, während sich auf der
          ISS, die inzwischen aus einer Vielzahl von Modulen besteht, bis zu sechs
          Astronauten gleichzeitig aufhalten können.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/spacestations/Skylab_(SL-4)_lg.jpg" title="Skylab - Großansicht">
            <img src="/img/spacestations/Skylab_(SL-4)_sm.jpg" alt="Skylab" />
          </a>
          <p className="summary-img-text">
            Skylab
          </p>
        </div>
        <p className="summary-text">
          Nachdem die Amerikaner viel Arbeit und Energie in das <em>Apollo-Programm</em> investiert
          und so den Wettlauf zum Mond gewonnen hatten, konzentrierten
          sich die Sowjets ab Mitte der 1960er Jahre wieder mehr auf bemannte Raumfahrt
          im Erdorbit. Mit <em>Saljut 1</em> (1971) bis <em>Saljut 7</em> (1982 bis 1986)
          sammelten sie enorm wichtige Erfahrungen über Langzeitaufenthalte und den Bau komplexer
          Strukturen im All. Die erste und bisher einzige US-amerikanische Raumstation
          war <em>Skylab</em> (1973 bis 1979).
        </p>
        <p className="summary-text">
          Eine der wichtigsten Erkenntnisse aus Skylab war die Notwendigkeit, eine
          Raumstation mit Treibstoff auf einfache Weise wiederzubefüllen.
          Auch in einer Höhe von 300 bis 400 Kilometern wird das Raumfahrzeug durch
          die zwar sehr dünne, aber immer noch existierende Erdatmosphäre so stark
          gebremst, dass die Umlaufbahn in gewissen zeitlichen Abständen angehoben
          werden muss um einen Absturz zu verhindern.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/spacestations/Mir_lg.jpg" title="Raumstation Mir - Großansicht">
            <img src="/img/spacestations/Mir_sm.jpg" alt="Raumstation Mir" />
          </a>
          <p className="summary-img-text">
            Raumstation Mir
          </p>
        </div>
        <p className="summary-text">
          Ein weiterer, essentieller Bestandteil einer Raumstation sind die Andockstellen.
          Raumtransporter müssen an die Station andocken können, um die Besatzungen
          auszutauschen, Material zu liefern und Abfall zu entsorgen oder um weitere
          Module hinzu zu fügen.
        </p>
        <div className="summary-img size-xxl">
          <a href="/img/spacestations/ISS_June_1999_lg.jpg" title="ISS 1999, Sarja und Unity - Großansicht">
            <img src="/img/spacestations/ISS_June_1999_sm.jpg" alt="ISS 1999, Sarja und Unity" />
          </a>
          <p className="summary-img-text">
            ISS 1999, Sarja und Unity
          </p>
        </div>
        <p className="summary-text">
          Die erste, wirklich große Station war die <em>Mir</em>. Von der UdSSR 1986
          gestartet, blieb sie 15 Jahre lang im All. Nach einer rein sowjetischen
          Nutzung in den ersten zwei Jahren, ermöglichten die Sowjets auch Raumfahrern
          anderer Nationen Besuche auf der Mir, darunter Syrien, Afghanistan,
          Frankreich und Deutschland. Auf der Station wurden zahlreiche Rekorde
          aufgestellt, darunter der noch heute geltende für den längsten Aufenthalt
          im Weltraum von <em>Waleri Poljakow</em> mit 437 Tagen.
        </p>
        <p className="summary-text">
          Nach beinahe 20 Jahren Planung war es dann soweit. <em>Sarja</em> - das erste Modul
          für die Internationale Raumstation ISS aus russischer Produktion wurde
          Ende 1998 gestartet und legte den Grundstein für das größte aller bisherigen
          Raumfahrtprojekte. Seit dem ist viel passiert.
        </p>
        <div className="summary-img">
          <a href="/img/spacestations/ISS_configuration_2017-06_de.svg_lg.png" title="ISS, Stand 2017 - Großansicht">
            <img src="/img/spacestations/ISS_configuration_2017-06_de.svg_sm.png" alt="ISS, Stand 2017" />
          </a>
          <p className="summary-img-text">
            ISS, Stand 2017
          </p>
        </div>
        <p className="summary-text">
          Die ISS wurde kontinuierlich ausgebaut und verfügt heute über mehrere
          Labor-, Wohn- und Servicemodule, Verbindungsknoten, Luftschleusen für
          Außenbordeinsätze, Solarmodule mit insgesamt 4500 m² Fläche, einen
          Roboterarm und mehrere Kräne sowie die berühmte Aussichtskuppel Cupola.
          Weiterhin existieren etliche Plattformen an den äußeren Strukturen der
          Station für Experimente im luftleeren Raum.
        </p>
        <p className="summary-text">
          Für den Betrieb und die Versorgung großer Habitate im All ist internationale
          Kooperation nötig. Russland (<em>Roskosmos</em>), die USA (<em>NASA</em>),
          Japan (<em>JAXA</em>) und die EU (<em>ESA</em>) sind die Hauptbetreiber
          der ISS. Inzwischen hat die <em>Nationale Weltraumbehörde Chinas</em> (CNSA)
          ebenfalls eigene Raumstationen gestartet - <em>Tiangong 1</em> war die
          erste, und weitere werden folgen. Auch private Raumfahrtunternehmen steigen
          zunehmend in diese gewaltigen Projekte mit ein.
        </p>
        <p className="summary-text">
          Eines Tages wird die ISS durch einen Nachfolger abgelöst werden, und
          in noch fernerer Zukunft werden Menschen große Raumstationen im Orbit um andere
          Himmelskörper, auf oder sogar unter ihrer Oberfläche errichten. Vielleicht
          wird es sogar irgendwann einmal die schon 1976 vorgestellten <em>O’Neill-Kolonien</em> geben.
          Bis dahin ist es noch ein weiter und vor allem teurer Weg, den die Menschheit
          hoffentlich gemeinsam gehen wird.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Die sowjetischen Saljut-Raumstationen dienten auch der militärischen
            Aufklärung und gingen aus dem <em>Almaz-Programm</em> hervor.
          </li>
          <li>
            Der Start von Skylab war gleichzeitig auch der letzte Start einer <em>Saturn
            V</em> Rakete - in diesem Fall mit nur zwei Stufen.
          </li>
          <li>
            <em>Alexander Wolkow</em> und <em>Sergei Krikaljow</em> betraten 1991
            als Sowjetbürger die Mir und kehrten 1992 als russische Bürger zurück.
          </li>
          <li>
            Der russische Kosmonaut <em>Sergei Wassiljewitsch Awdejew</em> feierte
            drei seiner Geburtstage im Weltraum - alle auf der Station Mir.
          </li>
          <li>
            Der humanoide Roboter <em>Robonaut 2</em> startete im Februar 2011
            mit <em>STS-133</em> (Discovery) zur Internationalen Raumstation ISS.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="stations module pure-u-1">
        <div id="controlArea" className="stations pure-u-1">
          <div id="controllers" className="pure-u-1">
            <div id="sort" className="stations pure-u-1-2 left">
              <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
              <div id="sortArea">
                <form id="sortStations" className="sort-form">
                  <select name="sortStations" defaultValue="sortStationsLaunch">
                    <option value="sortStationsLaunch">Startdatum</option>
                    <option value="sortStationsName">Name</option>
                    <option value="sortStationsEnd">Missionsende</option>
                    <option value="sortStationsDuration">Dauer</option>
                  </select>
                </form>
                <div id="toggleAscDesc">
                  <label>
                    <input className="switch" type="checkbox" />
                    <span className="slider"></span>
                    <span className="text"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="stationsTable">
          {stations.map((station, idx) => <StationComponent spaceStation={station} key={idx}/>)}
        </div>
      </div>
      <Notes/>
    </main>
  );
};

export default SpaceStationsComponent;

const StationComponent = ({spaceStation:station}) => {
  return (
    <div className="station-row data-row pure-u-1">
      <div className="station-img pure-u-1 pure-u-sm-1-4 pure-u-md-1-3 center">
        {station.imageUrl ? <a href={station.imageUrl} title={station.name}><img src={station.imageSmallUrl} alt={station.name} /></a> : ''}
        {station.imageUrl ? <small>Bild: {station.imageSrc}</small> : ''}
        {station.imageLicenseUrl ? <small><a href={station.imageLicenseUrl}>{station.imageLicence}</a></small> : <small>{station.imageLicence}</small>}
      </div>
      <div className="station-info pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 center">
        <div className="station-name pure-u-1 pure-u-md-1-2">
          <p className="station-name"><a href={station.wikipediaUrl} title={station.name}>{station.name}</a></p>
          {station.operator ? <p className="station-operator">Betreiber: {station.operator}</p> : ''}
          </div>
        <div className="station-data pure-u-1 pure-u-md-1-2">
          {station.duration ? <p className="station-data">Zeit im All: {station.duration}</p> : ''}
          <p className="station-data">{station.reenterDate ? `von ${station.launchDate} bis ${station.reenterDate}` : `Start: ${station.launchDate} - ${station.status}`}</p>
          {station.volume ? <p className="station-data">Masse: {station.mass}, Volumen (unter Druck): {station.volume}</p> : ''}
        </div>
      </div>
    </div>
  );
};
