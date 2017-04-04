import React from 'react';
import Notes from './notes';

const SpacewalksComponent = ({spacewalks}) => {
  return (
    <main role="main" className="spacewalks pure-u-1 center">
      <div id="featured" className="spacewalks pure-u-1">
        <h1>Weltraumausstiege</h1>
        <h3>frei im All</h3>
      </div>
      <div id="controlArea" className="spacewalks pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="spacewalks pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortSpacewalks" className="sort-form">
                <label>Sortieren nach:</label>
                <select name="sortSpacewalks" defaultValue="sortSpacewalksStartUp">
                  <option value="sortSpacewalksStartUp">Startdatum &uarr;</option>
                  <option value="sortSpacewalksStartDown">Startdatum &darr;</option>
                  <option value="sortSpacewalksDurationUp">Spacewalksdauer &uarr;</option>
                  <option value="sortSpacewalksDurationDown">Spacewalksdauer &darr;</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="dataArea" className="spacewalks pure-u-1">
        <div id="spacewalksTable">
          {spacewalks.map((spacewalk, idx) => <SpacewalkComponent spacewalk={spacewalk} key={idx}/>)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default SpacewalksComponent;

const SpacewalkComponent = ({spacewalk}) => {
  return (
    <div className="spacewalk-row data-row pure-u-1">
      <div className="spacewalk-name pure-u-1 pure-u-sm-9-24 center">
        <div className="pure-u-1">
          <p><a href={spacewalk.wikipediaUrl}>{spacewalk.name}</a></p>
        </div>
      </div>
      <div className="spacewalk-dates pure-u-1-2 pure-u-sm-6-24">
        <div className="spacewalk-start pure-u-lg-1-2">
          <p>Beginn: {spacewalk.start}</p>
        </div>
        <div className="spacewalk-end pure-u-lg-1-2">
          <p>Ende: {spacewalk.end}</p>
        </div>
      </div>
      <div className="spacewalk-info pure-u-1-2 pure-u-sm-9-24 left">
        <div className="spacewalk-astronauts">
          <p>{spacewalk.astronaut1}{spacewalk.astronaut2 ? `, ${spacewalk.astronaut2}` : ''}</p>
        </div>
      </div>
    </div>
  );
};
