import React from 'react';
import Notes from './notes';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="constellations pure-u-1 center">
        <h1>Sternbilder</h1>
        <h3>Figuren am Firmament</h3>
      </div>
      <div id="todo" className="pure-u-1">
        @wolfram pls add a function to leave the div constellationImg empty if constellation.imageUrl doesn't exist<br />
        @all find a way for sorter and filter on small screens (toggle-buttons?)
      </div>
      <div id="functionArea" className="constellations pure-u-1">
        <div id="sortAndFilterArea" className="pure-u-1">
          <div id="filter" className="constellations pure-u-1-2 right">
            <form id="sortConstellationsVisibility" className="filter-form">
              <label>Sichtbarkeit:</label>
              <select name="filterConstellationsVisibility">//TODO depends on item.visibility
                <option value="sortConstellationsAll" selected>alle</option>
                <option value="sortConstellationsNorth">nur nördlich</option>
                <option value="sortConstellationsSouth">nur südlich</option>
                <option value="sortConstellationsMiddle">mittig</option>
                <option value="sortConstellationsNorthsouth">nördlich, teils südlich</option>
                <option value="sortConstellationsSouthnorth">südlich, teils nördlich</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div id="dataArea" className="constellations pure-u-1">
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
    <div className="constellation-row data-row pure-u-1">
      <div className="constellationImg pure-u-1 pure-u-sm-1-5 center">
        <a href={item.wikipediaUrl}><img src={item.imageUrl} alt={item.name} /></a>
        <small>Bild: {item.imageSrc}</small>
      </div>
      <div className="constellationInfo pure-u-1 pure-u-sm-3-5 center">
        <a href={item.wikipediaUrl}>{item.name}</a><br />
        ({item.latinName})
      </div>
    </div>
  );
};
