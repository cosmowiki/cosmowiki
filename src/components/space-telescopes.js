import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const SpaceTelescopesComponent = ({ telescopes }) => {

  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="spacetelecopes pure-u-1 center">
        <h1>Weltraumteleskope</h1>
        <h3>Augen und Ohren im All</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: pls edit the month in endDate to appear as word when there is no endday (to use it on demand for all dates in all pages)</p>
      </div>
      <Summary>
        <p className="summary-text">
          Mit der Aufnahme <em>Hubble Ultra Deep Field</em> (HUDF) gelang
          dem <em>Hubble-Weltraumteleskop</em> (HST) im Jahr 2004 der Blick in 13
          Milliarden Lichtjahre entfernte Regionen des Weltraums und damit in eine
          Zeit, in der das Universum geade einmal 800 Millionen Jahre alt war.
          Es zeigte auf spektakuläre Weise die Leistungsfähigkeit von Teleskopen
          im All und wurde 2012 vom <em>Hubble Extreme Deep Field</em> (XDF)
          noch um 200 Millionen Lichtjahre übertroffen.
        </p>
        <div className="summary-img size-xl">
          <a href="/img/spacetelescopes/Hubble_Extreme_Deep_Field_lg.jpg" title="Hubble Extreme Deep Field (XDF) - Großansicht">
            <img src="/img/spacetelescopes/Hubble_Extreme_Deep_Field_sm.jpg" alt="Hubble Extreme Deep Field (XDF)" />
          </a>
          <p className="summary-img-text">
            Hubble Extreme Deep Field (XDF)
          </p>
        </div>
        <p className="summary-text">
          Weltraumteleskope, die in extreme Tiefe des Alls blicken, können also
          Zeitmaschinen sein. Ungestört von atmosphärischen Einflüssen enthüllen
          sie zum Beispiel, welche Eigenschaften die frühen Galaxien aufwiesen.
          Doch nicht nur die enorme zeitliche und räumliche Tiefe ist ein wichtiges
          Forschungsfeld der Astronomen. Auch nicht so extrem weit entfernte,
          beziehungsweise alte Objekte können Dank der enormen Detailgenauigkeit
          unserer Augen und Ohren im All genauestens untersucht werden.
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
          Sichtbares Licht ist nur ein Bereich von vielen im elektromagnetischen
          Spektrum, der hohen Erkenntnisgewinn verspricht. Das erste Weltraumteleskop
          in der Geschichte - <em>Radio Astronomy Explorer A</em> (1968) erforschte Radioquellen
          in unserer Heimatgalaxie, der Milchstraße. Auch die Teleskope der folgenden
          20 Jahre arbeiteten nicht im Bereich des sichtbaren Lichtes, sondern
          zeichneten ultraviolettes oder infrarotes Licht, Röntgen- oder Gammastrahlung auf.
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
          Weltraumteleskope helfen auch, Sternenkataloge zu erstellen, so zum
          Beispiel <em>HIPPARCOS</em> (1989). Mit seinen Instrumenten - in der Hauptsache ein
          Spiegelteleskop für sichtbares Licht - durchmusterte es das Weltall
          und lieferte Daten über Position, Entfernung und Bewegung von Sternen.
          So entstanden mit dem <em>Hipparcos-Katalog</em> (HIP) sowie dem <em>Tycho-Katalog</em> zwei
          Standardwerke für die großen Observatorien der Welt, aber auch für
          Hobbyastronomen, die Informationen über 1 Million Sterne enthalten.
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
          Damit Weltraumteleskope auch von kosmischen Effekten ungestört arbeiten
          können, müssen sie häufig an speziellen Orten im All, den <em>Lagrange-Punkten</em> des
          Sonne-Erde-Systems, genauer im Orbit um diese Punkte herum, platziert
          werden. An diesen Punkten heben sich die Anziehungskräfte von Sonne und
          Erde auf, so dass sehr stabile Beobachtungspositionen ohne umfangreiche
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
          selten, da die Atmosphäre dieses Licht stark absorbiert. Nur an hohen,
          besonders trockenen Standorten können brauchbare Ergebnisse erzielt werden.
          Ideal für die IR-Astronomie sind dagegen Weltraumteleskope. Doch selbst
          im All sind Vorkehrungen gegen störende Einflüsse nötig. Die Instrumente
          des <em>Spitzer Space Telescope</em> (SST) mussten auf 2 Kelvin heruntergekühlt
          werden, die des Weltraumteleskopes <em>Planck</em> zum Teil bis 0,1 Kelvin.
        </p>
        <p className="summary-text">
          Von Teleskopen im Weltraum sind auch in der Zukunft spektakuläre Ergebnisse
          zu erwarten. Wissenschaftler auf der ganzen Welt warten gespannt auf Daten
          des <em>James Web Space Telescopes</em> (JWST), dem Nachfolger von Hubble, und
          des <em>Euclid</em> genannten und für das Jahr 2020 geplanten Weltraumteleskops
          der <em>ESA</em>.
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
      <div id="controlArea" className="spacetelecopes pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="spacetelecopes pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortSpacetelecopes" className="sort-form">

                <select name="sortSpacetelecopes" defaultValue="sortSpacetelecopesLaunchUp">
                  <option value="sortSpacetelecopesLaunchUp">Startdatum &uarr;</option>
                  <option value="sortSpacetelecopesLaunchDown">Startdatum &darr;</option>
                  <option value="sortSpacetelecopesNameUp">Name &uarr;</option>
                  <option value="sortSpacetelecopesNameDown">Name &darr;</option>
                  <option value="sortSpacetelecopesEndUp">Missionsende &uarr;</option>
                  <option value="sortSpacetelecopesEndDown">Missionsende &darr;</option>
                  <option value="sortSpacetelecopesDurationUp">Dauer &uarr;</option>
                  <option value="sortSpacetelecopesDurationDown">Dauer &darr;</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="dataArea" className="spacetelescopes pure-u-1">
        <div id="spacetelescopesTable">
          {telescopes.map((telescope, idx) => <TelescopeComponent telescope={ telescope } key={idx}/>)}
        </div>
      </div>
      <Notes/>
    </main>
  );
};

export default SpaceTelescopesComponent;

const TelescopeComponent = ({ telescope }) => {
  return (
    <div className="spacetelescope-row data-row pure-u-1">
      <div className="spacetelescope-img pure-u-1 pure-u-sm-1-4 pure-u-md-1-3 center">
        {telescope.imageUrl ? <a href={telescope.imageUrl} title={telescope.name}><img src={telescope.imageSmallUrl} alt={telescope.name} /></a> : ''}
        {telescope.imageUrl ? <small>Bild: {telescope.imageSrc}</small> : ''}
        {telescope.imageLicenseUrl ? <small><a href={telescope.imageLicenseUrl}>{telescope.imageLicence}</a></small> : ''}
      </div>
      <div className="spacetelescope-info pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 center">
        <div className="spacetelescope-name pure-u-1 pure-u-md-1-2">
          <p className="spacetelescope-name"><a href={telescope.wikipediaUrl} title={telescope.name}>{telescope.name}</a></p>
          {telescope.alternativename ? <p className="spacetelescope-alternative-name">({telescope.alternativename})</p> : ''}
        </div>
        <div className="spacetelescope-data pure-u-1 pure-u-md-1-2">
          {telescope.operator ? <p className="spacetelescope-data">Betreiber: {telescope.operator}</p> : ''}
          {telescope.purpose ? <p className="spacetelescope-data">{telescope.purpose}</p> : ''}
          <p className="spacetelescope-data">{telescope.endDate ? `von ${telescope.launchDate} bis ${telescope.endDate}` : `Start: ${telescope.launchDate}`}</p>
          {telescope.status ? <p className="spacetelescope-data">Status: {telescope.status}</p> : ''}
        </div>
      </div>
    </div>
  );
};
