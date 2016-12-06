import React from 'react';
import {ConstellationNotes} from './notes';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="constellations">
        <h1>Sternbilder</h1>
        <h3>Figuren am Firmament</h3>
        <div id="todo">
          please add a function to leave the div constellationImg empty if constellation.imageUrl doesn't exist<br/>
          pls replace the constellationNotes with Notes, footnotes can be placed in the vcard if necessary
        </div>
      </div>
      <div id="filter" className="constellations">
        <form id="filterNorthSouth">
          <span>filtern nach Halbkugel:</span>
          <select name="northsouth">
            <option>beide</option>
            <option>nördlich</option>
            <option>südlich</option>
          </select>
        </form>
      </div>
      <div id="dataArea" className="constellations">
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
    <div className="constellationRow pure-u-1">
      <div className="constellationImg pure-u-1 pure-u-sm-1-3 center">
        <a href={item.wikipediaUrl}><img src={item.imageUrl} alt={item.name} /></a>
        <small>Bild: {item.imageSrc}</small>
      </div>
      <div className="constellationInfo pure-u-1 pure-u-sm-1-3 center">
        <a href={item.wikipediaUrl}>{item.name}</a><br />
        ({item.latinName})
      </div>
    </div>
  );
};
