import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const SpaceTelescopesComponent = ({ telescopes }) => {

  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="spacetelescopes pure-u-1 center">
        <div id="siteTitleContainer">
          <h1>Weltraumteleskope</h1>
          <h3>Augen und Ohren im All</h3>
        </div>
      </div>
      <Summary>
        <div className="summary-img size-xl">
          <a href="/img/spacetelescopes/Hubble_Extreme_Deep_Field_lg.jpg" title="Hubble Extreme Deep Field (XDF) - Großansicht">
            <img src="/img/spacetelescopes/Hubble_Extreme_Deep_Field_sm.jpg" alt="Hubble Extreme Deep Field (XDF)" />
          </a>
          <p className="summary-img-text">
            Hubble Extreme Deep Field (XDF)
          </p>
        </div>
        <p className="summary-text">
          Mit der Aufnahme <em>Hubble Ultra Deep Field</em> (HUDF) gelang
          dem <em>Hubble-Weltraumteleskop</em> (HST) im Jahr 2004 der Blick in 13
          Milliarden Lichtjahre entfernte Regionen des Weltraums und damit in eine
          Zeit, in der das Universum gerade einmal 800 Millionen Jahre alt war.
          Es zeigte auf spektakuläre Weise die Leistungsfähigkeit von Teleskopen
          im All - einer Technologie, die bereits im Jahr 1946 von dem US-amerikanischen
          Astrophysiker <em>Lyman Spitzer</em> konzipiert worden war.
        </p>
        <p className="summary-text">
          Weltraumteleskope, die in die extreme Tiefe des Alls blicken, können also
          Zeitmaschinen sein. Ungestört von atmosphärischen Einflüssen blicken sie
          zurück in die Kindheit unseres Universums und zeigen uns, wie kosmische
          Strukturen entstehen. Doch nicht nur die zeitliche und räumliche Tiefe
          ist ein wichtiges Forschungsfeld der Astronomen. Nahgelegene Objekte
          können mit einer enormen Detailgenauigkeit untersucht werden.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/spacetelescopes/Electromagnetic_spectrum_lg.png" title="elektromagnetisches Spektrum - Großansicht">
            <img src="/img/spacetelescopes/Electromagnetic_spectrum_sm.png" alt="elektromagnetisches Spektrum" />
          </a>
          <p className="summary-img-text">
            elektromagnetisches Spektrum, Horst Frank / Phrood / Anony, <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="CC BY-SA 3.0">CC BY-SA 3.0</a>
          </p>
        </div>
        <p className="summary-text">
          Dabei ist sichtbares Licht nur ein kleiner Bereich im elektromagnetischen
          Spektrum. Das erste Weltraumteleskop - <em>Radio Astronomy Explorer A</em> (1968)
          erforschte Radioquellen in unserer Heimatgalaxie, der Milchstraße. Auch
          die Weltraumteleskope der folgenden 20 Jahre arbeiteten nicht nur im Bereich
          des sichtbaren Lichtes, sondern zeichneten ultraviolettes oder infrarotes
          Licht, Röntgen- oder Gammastrahlung auf.
        </p>
        <div className="summary-img">
          <a href="/img/spacetelescopes/COBE_cmb_fluctuations_lg.png" title="COBE - kosmische Hintergrundstrahlung - Großansicht">
            <img src="/img/spacetelescopes/COBE_cmb_fluctuations_sm.png" alt="COBE - kosmische Hintergrundstrahlung" />
          </a>
          <p className="summary-img-text">
            COBE - kosmische Hintergrundstrahlung
          </p>
        </div>
        <p className="summary-text">
          Herausragend unter diesen ersten Weltraumteleskopen war sicherlich <em>COBE</em>.
          Das 1989 gestartete, von der <em>NASA</em> betriebene Teleskop arbeitete
          im Mikrowellen-Bereich und lieferte unter anderem Daten, mit denen eine
          360°-Karte der <em>kosmischen Hintergrundstrahlung</em> erstellt werden konnte,
          die Aufschluss über die Massenverteilung im frühen Universum kurz nach
          dem Urknall gab.
        </p>
        <p className="summary-text">
          Doch nicht nur die verschiedenen Bereiche des Spektrums sind interessant.
          Weltraumteleskope helfen auch, das Weltall zu kartieren, wie zum Beispiel
          das von der <em>ESA</em> betriebene Teleskop <em>HIPPARCOS</em> (ebenfalls 1989).
          Mit seinen Instrumenten durchmusterte es das All und lieferte Daten über
          Position, Entfernung und Bewegung von über 1 Million Sternen. So entstanden
          mit dem <em>Hipparcos-Katalog</em> (HIP) sowie dem <em>Tycho-Katalog</em> zwei
          Standardwerke für die großen Observatorien der Welt, aber auch für Hobbyastronomen.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/spacetelescopes/STEREO_overlap.png" title="STEREO - Großansicht">
            <img src="/img/spacetelescopes/STEREO_overlap.png" alt="STEREO" />
          </a>
          <p className="summary-img-text">
            STEREO
          </p>
        </div>
        <p className="summary-text">
          Damit Weltraumteleskope auch von kosmischen Effekten weitestgehend ungestört
          arbeiten können, müssen sie häufig an besonderen Orten im All platziert
          werden, zum Beispiel in einem Orbit um einen so genannten <em>Lagrange-Punkt</em> des
          Sonne-Erde-Systems herum. Dort heben sich die Anziehungskräfte von Sonne
          und Erde auf, so dass sehr stabile Beobachtungspositionen ohne umfangreiche
          Bahnkorrekturen besetzt werden können.
        </p>
        <div className="summary-img size-sm">
          <a href="/img/spacetelescopes/Lagrange_very_massive.svg_lg.png" title="Lagrange-Punkte - Großansicht">
            <img src="/img/spacetelescopes/Lagrange_very_massive.svg_sm.png" alt="Lagrange-Punkte" />
          </a>
          <p className="summary-img-text">
            Lagrange-Punkte
          </p>
        </div>
        <p className="summary-text">
          Teleskope, die im infraroten Bereich arbeiten, sind auf der Erde eher
          selten, da die Atmosphäre Licht dieser Wellenlänge stark absorbiert.
          Nur an hoch gelegenen und besonders trockenen Standorten können brauchbare
          Ergebnisse erzielt werden. Ideal für die IR-Astronomie sind Teleskope
          im All. Doch selbst dort sind Vorkehrungen gegen störende Einflüsse nötig.
          So mussten die Instrumente des <em>Spitzer Space Telescope</em> (SST)
          auf 2 Kelvin heruntergekühlt werden, die von <em>Planck</em> zum Teil
          bis auf 0,1 Kelvin. Der Lagrange-Punkt L2 bietet hier den zusätzlichen
          Vorteil des Erdschattens und ist somit bestens für die IR-Astronomie geeignet.
        </p>
        <p className="summary-text">
          Die ESA stationierte deshalb nicht nur Planck, sondern auch das nach dem
          Entdecker der Infrarotstrahlung Wilhelm Herschel benannte <em>Herschel Space Observatory</em> sowie
          die Raumsonde <em>Gaia</em> dort. Auch das <em>James Webb Space Telescope</em> (JWST)
          der NASA wird dort plaziert werden.
        </p>
        <p className="summary-text">
          Von Teleskopen im Weltraum sind auch in der Zukunft spektakuläre Ergebnisse
          zu erwarten. Wissenschaftler auf der ganzen Welt sind gespannt und hoffen
          auf einzigartige Daten von Projekten wie dem <em>JWST</em> und dem für
          das Jahr 2020 geplanten Weltraumteleskop der ESA mit dem Namen <em>Euclid</em>.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Das vom <em>DLR</em> betriebene Weltraumteleskop <em>ROSAT</em> war mit fast 2,5 Tonnen
            Gewicht der bisher schwerste deutsche Satellit.
          </li>
          <li>
            Mit dem Röntgenteleskop <em>Chandra</em> konnte im Mai 2007 die bislang
            energiereichste Supernova-Explosion beobachtet werden.
          </li>
          <li>
            Die zwei Sonden des <em>Solar TErrestrial RElations Observatory</em> (STEREO)
            ermöglichen eine dreidimensionale Beobachtung der Sonne.
          </li>
          <li>
            Das Weltraumteleskop <em>Kepler</em> entdeckte in ca. 600 Lj Entfernung
            mit <em>Kepler 22b</em> den ersten Exoplaneten in einer habitablen Zone.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="spacetelescopes module pure-u-1">
        <div id="controlArea" className="spacetelescopes pure-u-1">
          <div id="controllers" className="pure-u-1">
            <div id="sort" className="spacetelecopes pure-u-1-2 left">
              <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
              <div id="sortArea">
                <form id="sortSpacetelecopes" className="sort-form">
                  <select name="sortSpacetelecopes" defaultValue="sortSpacetelecopesLaunch">
                    <option value="sortSpacetelecopesLaunch">Startdatum</option>
                    <option value="sortSpacetelecopesName">Name</option>
                    <option value="sortSpacetelecopesEnd">Missionsende</option>
                    <option value="sortSpacetelecopesDuration">Dauer</option>
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
        <div id="spacetelescopesTable">
          {telescopes.map((telescope, idx) => <TelescopeComponent telescope={ telescope } key={idx}/>)}
        </div>
      </div>
      <Notes/>
    </main>
  );
};

export default SpaceTelescopesComponent;
const flags = (countries) => {
  const flagimages = countries.map(country => <img src={"/img/flags/" + country + ".png"} alt={country} title={country} key={country} />);
  return <p className="spacetelescope-country">{flagimages}</p>
};

const TelescopeComponent = ({ telescope }) => {
  return (
    <div className="spacetelescope-row data-row pure-u-1">
      <div className="spacetelescope-img pure-u-1 pure-u-sm-1-3 center">
        {telescope.imageUrl ? <a href={telescope.imageUrl} title={telescope.name}><img src={telescope.imageSmallUrl} alt={telescope.name} /></a> : ''}
        {telescope.imageUrl ? <small>Bild: {telescope.imageSrc}</small> : ''}
        {telescope.imageLicenseUrl ? <small><a href={telescope.imageLicenseUrl}>{telescope.imageLicence}</a></small> : ''}
      </div>
      <div className="spacetelescope-info pure-u-1 pure-u-sm-2-3 center">
        <div className="spacetelescope-info1 pure-u-1 pure-u-md-1-2">
          <p className="spacetelescope-name"><a href={telescope.wikipediaUrl} title={telescope.name}>{telescope.name}</a></p>
          {telescope.alternativename ? <p className="spacetelescope-alternative-name">({telescope.alternativename})</p> : ''}
          {telescope.countries.length == 0 ? '' : flags(telescope.countries)}
        </div>
        <div className="spacetelescope-info2 pure-u-1 pure-u-md-1-2">
          {telescope.purpose ? <p className="spacetelescope-data">{telescope.purpose}</p> : ''}
          <p className="spacetelescope-data">{telescope.endDate ? `von ${telescope.launchDate} bis ${telescope.endDate}` : `Start: ${telescope.launchDate}`}</p>
          {telescope.status ? <p className="spacetelescope-data">Status: {telescope.status}</p> : ''}
        </div>
      </div>
    </div>
  );
};
