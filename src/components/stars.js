import React from 'react';
import {StarNotes} from './notes';
import LetterLinks from './chunks/letter-links';

const StarsComponent = ({groupedStars, constellations}) => {
  const allFirstLetters = Object.keys(groupedStars);
  const starsIterable = allFirstLetters.map(key => groupedStars[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="stars pure-u-1 center">
        <h1>Sterne</h1>
        <h3>strahlende Objekte im All</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram pls make the sorter and filter work</p>
        <p>@wolfram pls let the toggle-switches for sort and filter hide each other on hover on small screens</p>
        <p>find a solution for the greek letters / bayer names vs. historical names</p>
        <p>@Wolfram pls make the #summaryToggleSwitch work.</p>
      </div>
      <div id="summary" className="stars pure-u-1 left">
        <a id="summaryToggleSwitch" className="expanded" href="#" title="Artikel anzeigen / schließen"></a>
        <div id="summaryContainer" className="stars visible">
          <div className="summary-img float-left">
            <a href="/img/stars/1_lg.jpg" title="Bildbeschreibung - Großansicht">
              <img src="/img/stars/1_sm.jpg" alt="Bildbeschreibung" />
            </a>
            <p className="summary-img-src small"></p>
          </div>
          <p className="summary-text">
          </p>
          <h4>Wussten Sie schon?</h4>
          <ul className="summary-list">
            <li>

            </li>
          </ul>
        </div>
      </div>
      <div id="controlArea" className="stars pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="stars pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortStars" className="sort-form">
                <label>Sortieren nach:</label>
                <select name="sortStars" defaultValue="sortStarsHistoricalName">
                  <option value="sortStarsHistoricalName">historischer Name</option>
                  <option value="sortStarsBayerName">Bayer-Name</option>
                  <option value="sortStarsConstellationName">Sternbild</option>
                  <option value="sortStarsMagUp">Helligkeit &uarr;</option>
                  <option value="sortStarsMagDown">Helligkeit &darr;</option>
                  <option value="sortStarsDistanceUp">Entfernung &uarr;</option>
                  <option value="sortStarsDistanceDown">Entfernung &darr;</option>
                  <option value="sortStarsMassUp">Masse &uarr;</option>
                  <option value="sortStarsMassDown">Masse &darr;</option>
                  <option value="sortStarsRadiusUp">Radius &uarr;</option>
                  <option value="sortStarsRadiusDown">Radius &darr;</option>
                </select>
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
      <div id="dataArea" className="stars pure-u-1">
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
          <div className="letter-section-header pure-u-1">
            <div className="scroll-up-link pure-u-11-24">
              <p className="left"><a id="scrollUpArrow" href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
            </div>
            <div className="first-letter pure-u-1-12 center">
              <p name={`#${groupKey}`}>{groupKey}</p>
            </div>
            <div className="scroll-up-link pure-u-11-24">
              <p className="right"><a id="scrollUpArrow" href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
            </div>
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
                  <p><a href={star.link}>{star.name.name}</a></p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <p><a href={star.link}>{star.name.historical ? star.name.bayer : ''}</a></p>
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

// old lines of code
// <tr className="starsRow">
//   <td className="starName">
//     <a href={star.link} onMouseOver={noop} onMouseOut={noop}>{star.name.name}</a>
//     <div className="starInfoBox">
//       <p>
//         <strong>alternative Namen:</strong> {star.name.alternative}</p>
//       <p>
//         <strong>Bezeichnung nach:</strong><br />
//         <a href="https://de.wikipedia.org/wiki/Bright-Star-Katalog" target="_blank" title="Bright-Star-Katalog">Bright-Star-Katalog</a>: HR {star.hr}<br />
//         <a href="https://de.wikipedia.org/wiki/Henry-Draper-Katalog" target="_blank" title="Henry-Draper-Katalog">Henry-Draper-Katalog</a>: HD {star.hd}<br />
//         <a href="https://de.wikipedia.org/wiki/Hipparcos-Katalog" target="_blank" title="Hipparcos-Katalog">Hipparcos-Katalog</a>: HIP {star.hip}<br />
//         <a href="https://de.wikipedia.org/wiki/SAO-Katalog" target="_blank" title="SAO-Katalog">SAO-Katalog</a>: SAO {star.sao}<br />
//         <a href="https://de.wikipedia.org/wiki/Flamsteed-Bezeichnung" target="_blank" title="Flamsteed-Bezeichnung">SAO-Katalog</a>: Flamsteed {star.flamsteed}
//       </p>
//     </div>
//   </td>
//   <td className="starBay">{star.name.bayer || '-'}</td>
//   <td className="starShort">{star.name.short || '-'}</td>
//   <td className="starConst"><a href={star.constLink}>{star.constellation || '-'}</a></td>
//   <td className="starRekt">{star.rekt || '-'}</td>
//   <td className="starDekli">{star.dekli || '-'}</td>
//   <td className="starAppMag">{star.appMag || '-'}</td>
//   <td className="starSpectrClass">{star.spectrClass || '-'}</td>
//   <td className="starDist">{star.dist || '-'}</td>
//   <td className="starMass">{star.mass || '-'}</td>
//   <td className="starRadius">{star.radius || '-'}</td>
// </tr>
