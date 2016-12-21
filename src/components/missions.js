import React from 'react';
import Notes from './notes';

const MissionsComponent = ({missions}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="missions">
        <h1>Missionen</h1>
        <h3>bemannte und unbemannte Raumfahrtmissionen</h3>
        <div id="todo">
          pls add functions for the filters
        </div>
      </div>
      <div id="filter" className="missions">
        <form id="filterCrew">
          <p>Art der Mission:</p>
          <select name="crew">
            <option>alle</option>
            <option>bemannt</option>
            <option>unbemannt</option>
          </select>
        </form>
        <form id="filterCountry">
          <p>Länder:</p>
          <select name="country">
            <option>Länder</option>
          </select>
        </form>
        <form id="filterDestination">
          <p>Ziele:</p>
          <select name="destination">
            <option>Ziele</option>
          </select>
        </form>
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
      <div className="missionInfo pure-u-1 pure-u-sm-1-3 center">
        <a href={mission.wikipediaUrl}>{mission.name}</a>
        <p>{mission.launchDate ? `Start: ${mission.launchDate}` : ''}</p>
        <p>{mission.endDate ? `Missionsende: ${mission.endDate}` : ''}</p>
        <p>{mission.reenterDate ? `Wiedereintritt: ${mission.reenterDate}` : ''}</p>
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

// <div className="missionImg pure-u-1 pure-u-sm-1-3 center">
//   <a href={mission.wikipediaUrl}><img src={mission.imageUrl} alt={mission.name} /></a>
//   <small>Bild: {mission.imageSrc}</small>
// </div>
