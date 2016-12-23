import React from 'react';
import Notes from './notes';

const MissionsComponent = ({missions}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="missions">
        <h1>Missionen</h1>
        <h3>auf zu neuen Ufern</h3>
      </div>
      <div id="todo">
        pls add functions for the sorter and filters
      </div>
      <div id="functionArea" className="missions">
        <div id="sort" className="missions">
          <form id="sortDate">
            <label>Sortieren:</label>
            <select name="sort">
              <option value="launchUp" selected>Startdatum - aufsteigend</option>
              <option value="launchDown">Startdatum - absteigend</option>
              <option value="endUp">Missionsende - aufsteigend</option>
              <option value="endDown">Missionsende - absteigend</option>
              <option value="durationUp">Missionsdauer - aufsteigend</option>
              <option value="durationDown">Missionsdauer - absteigend</option>
              <option value="nameUp">alphabetisch - aufsteigend</option>
              <option value="nameDown">alphabetisch - absteigend</option>
            </select>
          </form>
        </div>
        <div id="filter" className="missions">
          <form id="filterCategory">
            <label>Kategorie:</label>
            <select name="category">
              <option value="all" selected>alle</option>
              <option value="manned">bemannte Mission</option>
              <option value="satellite">Satellit</option>
              <option value="space-probe">Raumsonde</option>
              <option value="space-station">Raumstation</option>
              <option value="space-telescope">Weltraumteleskop</option>
            </select>
          </form>
          <form id="filterCountry">
            <label>Land:</label>
            <select name="country">
              <option value="all" selected>alle</option>
              <option value="ausgewähltes Land">Länder</option>
            </select>
          </form>
          <form id="filterDestination">
            <label>Ziel:</label>
            <select name="destination">
              <option value="all" selected>alle</option>
              <option value="ausgewähltes Ziel">Ziele</option>
            </select>
          </form>
        </div>
      </div>
      <div id="dataArea" className="missions">
        <div id="missionsTable" className="tablesorter">
          {missions.map((mission, idx) => <MissionComponent mission={mission} key={idx}/>)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default MissionsComponent;

const MissionComponent = ({mission}) => {
  return (
    <div className="missionsRow pure-u-1">
      <div className="missionName pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-9-24 center">
        <a href={mission.link}>{mission.name}</a>
      </div>
      <div className="missionLaunch pure-u-1-2 pure-u-sm-1-4 pure-u-md-1-3 pure-u-lg-3-24 center">
        <p>Start: {mission.launchDate}</p>
      </div>
      <div className="missionEnd pure-u-1-2 pure-u-sm-1-4 pure-u-md-1-3 pure-u-lg-3-24 center">
        <p>{mission.endDate ? `Ende: ${mission.endDate}` : `Status: ${mission.status}`}</p>
      </div>
      <div className="missionOperator pure-u-1-2 pure-u-sm-1-4 pure-u-md-1-3 pure-u-lg-4-24 center">
        {mission.operator ? <p>Betreiber: {mission.operator} - {mission.country}</p> : <p>Land: {mission.country}</p>}
      </div>
      <div className="missionDestination pure-u-1-2 pure-u-sm-1-4 pure-u-md-1-3 pure-u-lg-5-24 center">
        <p>Ziel: {mission.destination}</p>
      </div>
    </div>
  );
};

const RocketLink = ({rocket}) => {
  return (
    <a href={rocket.wikipediaUrl}>{rocket.name}</a>
  );
};

const PadLink = ({pad}) => {
  return (
    <a href={pad.wikipediaUrl}>{pad.name}</a>
  );
};

// <div className="missionImg pure-u-1 pure-u-sm-1-5 center">
//   <a href={mission.wikipediaUrl}><img src={mission.imageUrl} alt={mission.name} /></a>
//   <small>Bild: {mission.imageSrc}</small>
// </div>
