import React from 'react';
import {StarNotes} from './notes';
import LetterLinks from './chunks/letter-links';
import {Summary} from './chunks/summary';

const StarsComponent = ({groupedStars, constellations}) => {
  const allFirstLetters = Object.keys(groupedStars);
  const starsIterable = allFirstLetters.map(key => groupedStars[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="stars pure-u-1 center">
        <div id="siteTitleContainer">
          <h1>Sterne</h1>
          <h3>strahlende Objekte im All</h3>
        </div>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: pls make the sorter and filter work</p>
        <p>@wolfram: pls let the toggle-switches for sort and filter hide each other on hover on small screens</p>
      </div>
      <Summary>
        <p className="summary-text">
          Sie sind kleine helle Punkte am Nachthimmel und dennoch ist alles an ihnen
          gigantisch - Größe, Masse und Temperatur. Sterne sind riesige und unglaublich
          heiße Kraftwerke. Die Oberflächentemperaturen der meisten Sterne reichen
          von etwa 2200 K bis 45000 K, ihre Massen von 0,07 bis 120 Sonnenmassen
          und ihre Größen von 0,1 bis 25 Sonnenradien.
        </p>
        <div className="summary-img size-sm">
          <a href="/img/stars/star-sizes_lg.jpg" title="Größenvergleich - Großansicht">
            <img src="/img/stars/star-sizes_sm.jpg" alt="Größenvergleich" />
          </a>
          <p className="summary-img-text">
            Größenvergleich<br />
            Quelle: <a href="http://www.davidjarvis.ca/" title="Dave Jarvis">Dave Jarvis</a><br />
            <a href="http://creativecommons.org/licenses/by-sa/3.0" title="CC-BY-SA 3.0">CC-BY-SA 3.0</a>
          </p>
        </div>
        <p className="summary-text">
          In ihnen liefert die <em>stellare Kernfusion</em> durch die Verschmelzung
          von zumeist Wasserstoff zu Helium gewaltige Energiemengen, die ebenso
          wie ihre kräftigen Magnetfelder weit ins All hinein wirken. Befinden sich
          in stabilen Umlaufbahnen um einen Stern sogar Planeten, deren Materie 
          ohne frühere, bereits gestorbene Sterne nicht existieren würde, kann die
          abgestrahlte Energie dort Leben ermöglichen oder auch dauerhaft verhindern.
          Sonnensysteme mit nur einem Zentralstern wie das unsere sind eher die Seltenheit.
          Schätzungsweise zwei Drittel aller Sterne haben einen oder sogar mehrere Geschwister,
          die oft um ein gemeinsames Zentrum kreisen.
        </p>
        <div className="summary-img">
          <a href="/img/stars/cluster_ngc1783_lg.jpg" title="Sternhaufen NGC 1783 - Großansicht">
            <img src="/img/stars/cluster_ngc1783_sm.jpg" alt="Sternhaufen NGC 1783" />
          </a>
          <p className="summary-img-text">
            Sternhaufen NGC 1783<br />
            Quelle: ESA/Hubble & NASA<br />
            <a href="https://creativecommons.org/licenses/by/4.0/" title="CC-BY 4.0">CC-BY 4.0</a>
          </p>
        </div>
        <p className="summary-text">
          Auch in kosmischen Dimensionen gesehen sind Sterne selten Einzelgänger.
          Sie konzentrieren sich in <em>Sternhaufen</em> und zu Millionen oder sogar
          Milliarden in <em>Galaxien</em>, die widerum in <em>Galaxienhaufen</em> auftreten.
          Astronomen schätzen die Zahl der Sterne im sichtbaren Universum auf etwa 70 Trilliarden.
          Allein in unserer Heimatgalaxie, der Milchstraße, existieren ca. 100 Milliarden Sonnen.
        </p>
        <p className="summary-text">
          Mit bloßem Auge sind von der Erde aus höchstens 5000 bis 6000 Sterne zu
          erkennen. Der Mensch sah in ihnen Götter, er verband sie zu Sternbildern
          und nutzt sie bis heute zur Navigation. Die ersten Namen von Sternen,
          die heute noch gebräuchlich sind, stammen oft aus der arabischen oder
          griechisch-hellenistischen Antike, so zum Beispiel Beteigeuze oder Sirius.
          Neuere Bezeichnungen entstanden mit der Erstellung großer <em>Himmelsatlanten</em> und <em>Sternenkataloge</em>,
          wie der <em>Uranometria</em> von <em>Johann Bayer</em> (1603) oder dem <em>Hipparcos-Katalog</em> (HIP).
        </p>
        <div className="summary-img size-md">
          <a href="/img/stars/E-ELT_lg.jpg" title="European Extremely Large Telescope - Großansicht">
            <img src="/img/stars/E-ELT_sm.jpg" alt="European Extremely Large Telescope" />
          </a>
          <p className="summary-img-text">
            European Extremely Large Telescope<br />
            Quelle: ESO, <a href="https://creativecommons.org/licenses/by/4.0/" title="CC-BY 4.0">CC-BY 4.0</a>
          </p>
        </div>
        <p className="summary-text">
          Von der Frühgeschichte des Menschen bis heute beobachten, katalogisieren
          und vermessen wir also Sterne. Schon im Altertum wurden dazu von China
          über Ägypten bis nach Südamerika große Observatorien errichtet. Heute
          bauen wir riesige <em>Radioteleskope</em>, wie zum Beispiel das <em>Very
          Large Array</em> (VLA) in New Mexico, oder wir schicken Weltraumteleskope
          ins All, die Röntgenstrahlen, Mikrowellen oder einen großen Bereich des
          Lichtspektrums beobachten können, wie das <em>Hubble Space Telescope</em> (HST).
        </p>
        <div className="summary-img size-xl">
          <a href="/img/stars/milky_way_center_lg.jpg" title="Zentrum der Milchstraße - Großansicht">
            <img src="/img/stars/milky_way_center_sm.jpg" alt="Zentrum der Milchstraße" />
          </a>
          <p className="summary-img-text">
            Zentrum der Milchstraße
          </p>
        </div>
        <p className="summary-text">
          Mit ihnen entstehen nicht nur phantastische Aufnahmen, die uns begeistern.
          Vor allem geht es um die Bestimmung von Eigenschaften wie Leuchtkraft
          und Alter, Größe, Masse, Zusammensetzung und Bewegung. Der Lebenszyklus
          von Sternen kann heute schon gut beschrieben werden. Astronomen setzen
          die gewonnenen Informationen zueinander ins Verhältnis und teilen Sterne
          danach in verschiedene Klassen ein. Daraus gingen wichtige Darstellungen
          wie beispielsweise das <em>Hertzsprung-Russell-Diagramm</em> (HDR) hervor,
          mit dem sich die Entwicklungszustände abbilden lassen.
        </p>
        <p className="summary-text">
          Mittlerweile sind nicht nur massearme- und reiche, große und kleine, helle
          und weniger helle Sterne bekannt. Drei verschiedene <em>Sternenpopulationen</em>,
          eingeteilt nach ihrer Lebensdauer in der Entwicklung des Universums, werden
          unterschieden. Weiterhin differenziert man Sterne anhand ihres individuellen
          Alters, ihrer Zugehörigkeit zu Regionen und Sternhaufen, teilt sie in
          Größen- und <em>Spektralklassen</em> ein. Ihre extremsten Erscheinungsformen
          und Phänomene, wie zum Beispiel <em>Neutronensterne</em>, <em>Supernovae</em>, <em>Schwarze Löcher</em> oder <em>Pulsare</em> geben
          den Forschern bis heute noch viele Rätsel auf und bleiben dadurch absolut spannend.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Alle von der Erde aus mit bloßem Auge sichtbaren Sterne gehören zu
            unserer Heimatgalaxie, der Milchstraße.
          </li>
          <li>
            Als aktuell größter bekannter Stern gilt der Rote Überriese <em>UY
            Scuti</em> im <em>Sternbild Schild</em> mit 1708 ± 192 Sonnenradien.
          </li>
          <li>
            Der Stern Castor im Sternbild Zwillinge ist eigentlich ein System aus
            drei Sternpaaren, also sechs Sternen insgesamt.
          </li>
          <li>
            Sirius, der schon vor 5000 Jahren in Ägypten eine kalendarische Funktion
            hatte, ist mit −1,46 mag der hellste Stern am Nachthimmel.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="stars module pure-u-1">
        <div id="controlArea" className="stars pure-u-1">
          <div id="controllers" className="pure-u-1">
            <div id="sort" className="stars pure-u-1-2 left">
              <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
              <div id="sortArea">
                <form id="sortStars" className="sort-form">
                  <select name="sortStars" defaultValue="sortStarsHistoricalName">
                    <option value="sortStarsHistoricalName">historischer Name</option>
                    <option value="sortStarsConstellation">Sternbild</option>
                    <option value="sortStarsMagUp">Helligkeit</option>
                    <option value="sortStarsDistanceUp">Entfernung</option>
                    <option value="sortStarsMassUp">Masse</option>
                    <option value="sortStarsRadiusUp">Radius</option>
                  </select>
                </form>
                <form id="sortAscDesc">
                  <input type="radio" id="sortAsc" name="sortAscDesc" value="sortAsc" checked="checked" />
                  <label for="sortAsc"></label>
                  <input type="radio" id="sortDesc" name="sortAscDesc" value="sortDesc" />
                  <label for="sortDesc"></label>
                </form>
              </div>
            </div>
            <div id="filter" className="missions pure-u-1-2 right">
              <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
              <div id="filterArea">
                <FilterRow constellations={constellations} />
              </div>
            </div>
          </div>
          <LetterLinks letters={allFirstLetters} />
        </div>
        <div id="starsTable">
          {starsIterable.map((group, idx) => <StarsGroupComponent group={group} key={idx} />)}
        </div>
      </div>
      <StarNotes />
    </main>
  );
};

export default StarsComponent;

const FilterRow = ({constellations}) => {
  return (
            <form id="filterStarsByConstellation" className="filter-form">
              <label>Sternbild:</label>
              <select name="starsConstellations" defaultValue="showAllConstellations">
                <option value="showAllConstellations">alle</option>
                {constellations.map((constellation, idx) => <option key={idx}>{constellation}</option>)}
              </select>
            </form>
  );
};

const StarsGroupComponent = ({group}) => {
  const groupKey = group.key;
  const stars = group.data;

  return (
          <div id={groupKey} className="letter-section pure-u-1">
            <div className="leading-letter pure-u-1 center">
              <p name={`#${groupKey}`}>{groupKey}</p>
            </div>
            {stars.map((star, idx) => <StarComponent star={star} key={idx} />)}
          </div>
  );
};

const StarComponent = ({star}) => {
  const starMass = (mass) => {
    return mass
      ? <p title="Masse in Sonnenmassen">{mass} M<sub>&#9737;</sub></p>
      : <p title="Masse in Sonnenmassen"/>
    ;
  };
  const starRadius = (radius) => {
    return radius
      ? <p title="Radius in Sonnenradien">{radius} R<sub>&#9737;</sub></p>
      : <p title="Radius in Sonnenradien" />
  };

  return (
            <div className="star-row data-row pure-u-1">
              <div className="star-name pure-u-1 pure-u-md-1-3 center">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <p><a href={star.link}>{star.name.toString()}</a></p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <p><a href={star.link}>{star.name.bayer ? star.name.bayer : ''}</a></p>
                </div>
              </div>
              <div className="star-data1 pure-u-1 pure-u-md-1-3">
                <div className="star-constellation pure-u-1-2 center">
                  {star.constellation ? <p title="Sternbild"><a href={star.constLink}>{star.constellation}</a></p> : ''}
                </div>
                <div className="star-distance pure-u-1-2 center">
                  {star.distance ? <p title="Entfernung">{star.distance} Lj</p> : ''}
                </div>
              </div>
              <div className="star-data2 pure-u-1 pure-u-md-1-3">
                <div className="star-app-mag pure-u-1-3 center">
                  <p title="scheinbare Helligkeit">{star.appmagnitude && `${star.appmagnitude} mag`}</p>
                </div>
                <div className="star-mass pure-u-1-3 center">
                  { starMass(star.mass) }
                </div>
                <div className="star-radius pure-u-1-3 center">
                  { starRadius(star.radius) }
                </div>
              </div>
            </div>
  );
};
