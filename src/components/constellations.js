import React from 'react';
import {ConstellationNotes} from './notes';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="constellations pure-u-1 center">
        <h1>Sternbilder</h1>
        <h3>Figuren am Firmament</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram pls replace the form filterConstellationsByVisibility with a FilterRow as in stars-site</p>
        <p>@all open the large constellation image in a pop-up?</p>
        <p>@Wolfram pls make the #summaryToggleSwitch work.</p>
      </div>
      <div id="summary" className="constellations pure-u-1 left">
        <a id="summaryToggleSwitch" className="expanded" href="#" title="Artikel anzeigen / schließen"></a>
        <div id="summaryContainer" className="constellations visible">
          <div className="summary-img float-right">
            <a href="/img/constellations/1_lg.jpg" title="Bildbeschreibung - Großansicht">
              <img src="/img/constellations/1_sm.jpg" alt="Bildbeschreibung" />
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
      <div id="dataArea" className="constellations pure-u-1">
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
          <p className="constellation-data">sichtbar von {item.visibleFrom} bis {item.visibleTo}</p>
          <p className="constellation-data">im Jahr {item.namedYear} von <a href={item.astronomerUrl} title={item.astronomer}>{item.astronomer}</a> benannt</p>
          <p className="constellation-data">hellster Stern: {item.brightestUrl ? <a href={item.brightestUrl} title={item.brightest}>{item.brightest}</a> : `${item.brightest}`} mit {item.highestBrightness} mag</p>
        </div>
      </div>
    </div>
  );
};
