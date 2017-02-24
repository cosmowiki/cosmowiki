import React from 'react';
import {ConstellationNotes} from './notes';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="constellations pure-u-1 center">
        <h1>Sternbilder</h1>
        <h3>Figuren am Firmament</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram pls replace the form filterConstellationsByVisibility with a FilterRow as in stars-site</p>
        <p>@all open the large constellation image in a pop-up?</p>
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
        <a href={item.imageLargeUrl}><img src={item.imageSmallUrl} alt={item.name} /></a>
        <small>
          Bild: {item.imageSrc}<br />
          <a href={item.imageLicenceUrl}>{item.imageLicence}</a>
        </small>
      </div>
      <div className="constellation-info pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 center">
        <p className="constellation-name"><a href={item.wikipediaUrl}>{item.name}</a></p>
        <p className="constellation-latin-name">({item.latinName})</p>
        <p className="constellation-data">sichtbar von {item.visibleFrom} bis {item.visibleTo}</p>
        <p className="constellation-data">im Jahr {item.namedYear} von {item.astronomer} benannt</p>
        <p className="constellation-data">hellster Stern ist {item.brightestUrl ? <a href={item.brightestUrl}>{item.brightest}</a> : `${item.brightest}`} mit {item.highestBrightness} mag</p>
      </div>
    </div>
  );
};
