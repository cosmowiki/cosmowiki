import React from 'react';
import Notes from './notes';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="pure-u-1 constellations">
        <h1>Sternbilder</h1>
        <h3>Figuren am Firmament</h3>
      </div>
      <div id="todo" className="pure-u-1">
        @wolfram pls add a function to leave the div constellationImg empty if constellation.imageUrl doesn't exist
        @all find a way for sorter and filter on small screens
      </div>
      <div id="functionArea" className="pure-u-1 missions">
        <div id="filter" className="constellations">
          <form id="filterVisibility">
            <label>Sichtbarkeit:</label>
            <select name="visibility">
              <option selected>alle</option>
              <option>N - nur nördlich</option>
              <option>S - nur südlich</option>
              <option>N S / S N  - mittig</option>
              <option>Ns - nördlich, teils südlich</option>
              <option>Sn - südlich, teils nördlich</option>
            </select>
          </form>
        </div>
      </div>
      <div id="dataArea" className="pure-u-1  constellations">
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
