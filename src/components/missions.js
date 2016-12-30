import React from 'react';
import Notes from './notes';

const MissionsComponent = ({missions}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="pure-u-1 missions">
        <h1>Missionen</h1>
        <h3>auf zu neuen Ufern</h3>
      </div>
      <div id="todo" className="pure-u-1">
        @wolfram pls make the sorter and filters work<br />
        @wolfram pls set the "Ende:" and "Land:" <b>bold</b> too (f***ing syntax)<br />
        @wolfram pls make the toggle-switches for sort and filter work on small screens
      </div>
      <div id="functionArea" className="missions">
        <div id="sort" className="missions">
          <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
          <div id="sortArea">
            <form className="sort-form">
              <label>Sortieren:</label>
              <select name="sortMission">
                <option value="sortMissionLaunchUp" selected>Startdatum - aufsteigend</option>
                <option value="sortMissionLaunchDown">Startdatum - absteigend</option>
                <option value="sortMissionEndUp">Missionsende - aufsteigend</option>
                <option value="sortMissionEndDown">Missionsende - absteigend</option>
                <option value="sortMissionDurationUp">Missionsdauer - aufsteigend</option>
                <option value="sortMissionDurationDown">Missionsdauer - absteigend</option>
                <option value="sortMissionNameUp">alphabetisch - aufsteigend</option>
                <option value="sortMissionNameDown">alphabetisch - absteigend</option>
              </select>
            </form>
          </div>
        </div>
        <div id="filter" className="missions right">
          <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
          <div id="filterArea">
            <form id="filterCategory" className="filter-form">
              <label>Kategorie:</label>
              <select name="filterMissionCategory">
                <option value="all" selected>alle</option>
                <option value="manned">bemannte Missionen</option>
                <option value="satellite">Satelliten</option>
                <option value="space-probe">Raumsonden</option>
                <option value="space-station">Raumstationen</option>
                <option value="space-telescope">Weltraumteleskope</option>
              </select>
            </form>
            <form id="filterCountry" className="filter-form">
              <label>Land:</label>
              <select name="filterMissionCountry">
                <option value="all" selected>alle</option>
                <option value="ausgewähltes Land">Länder</option>
              </select>
            </form>
            <form id="filterDestination" className="filter-form">
              <label>Ziel:</label>
              <select name="filterMissionDestination">
                <option value="all" selected>alle</option>
                <option value="ausgewähltes Ziel">Ziele</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div id="dataArea" className="pure-u-1  missions">
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
      <div className="missionName pure-u-1 pure-u-sm-9-24">
        <a href={mission.link}>{mission.name}</a>
      </div>
      <div className="missionDates pure-u-1-2 pure-u-sm-6-24">
        <p className="missionLaunch pure-u-lg-1-2"><b>Start:</b> {mission.launchDate}</p>
        <p className="missionEnd">{mission.endDate ? `Ende: ${mission.endDate}` : `Status: ${mission.status}`}</p>
      </div>
      <div className="missionInfo pure-u-1-2 pure-u-sm-9-24">
        <p className="missionOperator">{mission.operator ? `Betreiber: ${mission.operator} - ${mission.country}` : `Land: ${mission.country}`}</p>
        <p className="missionDestination"><b>Ziel:</b> {mission.destination}</p>
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
