import React from 'react';
import Notes from './notes';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="constellations">
        <h1>Sternbilder</h1>
        <h3>Figuren am Firmament</h3>
        <div id="todo">
          please add a function to leave the div constellationImg empty if constellation.imageUrl doesn't exist
        </div>
      </div>
      <div id="filter" className="constellations">
        <form id="filterNorthSouth">
          <p>Sichtbarkeit nach Halbkugel:</p>
          <select name="visibility">
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
      <Notes />
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
