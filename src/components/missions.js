import React from 'react';
import Notes from './notes';

const MissionsComponent = ({missions}) => {
  return (
    <main role="main" className="missions pure-u-1 center">
      <div id="featured" className="missions pure-u-1">
        <h1>Missionen</h1>
        <h3>3 ... 2 ... 1 ... Lift-off!</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram pls replace the filter forms with FilterRows as in stars-site</p>
        <p>@wolfram pls make the sorter and filters work</p>
        <p>@wolfram pls let the toggle-switches for sort and filter hide each other on hover on small screens</p>
      </div>
      <div id="controlArea" className="missions pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="missions pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortMissions" className="sort-form">
                <select name="sortMissions" defaultValue="sortMissionsLaunchUp">
                  <option value="sortMissionsLaunchUp">Startdatum &uarr;</option>
                  <option value="sortMissionsLaunchDown">Startdatum &darr;</option>
                  <option value="sortMissionsEndUp">Missionsende &uarr;</option>
                  <option value="sortMissionsEndDown">Missionsende &darr;</option>
                  <option value="sortMissionsDurationUp">Missionsdauer &uarr;</option>
                  <option value="sortMissionsDurationDown">Missionsdauer &darr;</option>
                  <option value="sortMissionsNameUp">alphabetisch &uarr;</option>
                  <option value="sortMissionsNameDown">alphabetisch &darr;</option>
                </select>
              </form>
            </div>
          </div>
          <div id="filter" className="missions pure-u-1-2 right">
            <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
            <div id="filterArea">
              <form id="filterMissionsByCategory" className="filter-form">
                <label>Kategorie:</label>
                <select name="missionsCategories" defaultValue="showAllCategories">
                  <option value="showAllCategories">alle</option>
                  <option value="showManned">bemannte Missionen</option>
                  <option value="showUnmanned">unbemannte Missionen</option>
                  <option value="showSatellites">Satelliten</option>
                  <option value="showSpaceprobes">Raumsonden</option>
                  <option value="showSpacestations">Raumstationen</option>
                  <option value="showSpacetelescopes">Weltraumteleskope</option>
                </select>
              </form>
              <form id="filterMissionsByCountry" className="filter-form">
                <label>Land:</label>
                <select name="missionsCountries" defaultValue="all">
                  <option value="all">alle</option>
                </select>
              </form>
              <form id="filterMissionsByDestination" className="filter-form">
                <label>Ziel:</label>
                <select name="missionsDestinations" defaultValue="all">
                  <option value="all">alle</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="dataArea" className="missions pure-u-1">
        <div id="missionsTable">
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
    <div className="mission-row data-row pure-u-1">
      <div className="mission-name pure-u-1 pure-u-sm-9-24 center">
        <div className="pure-u-1">
          <p><a href={mission.link}>{mission.name}</a></p>
        </div>
      </div>
      <div className="mission-dates pure-u-1-2 pure-u-sm-6-24">
        <div className="mission-launch pure-u-lg-1-2">
          <p><b>Start:</b> {mission.launchDate}</p>
        </div>
        <div className="mission-end pure-u-lg-1-2">
          {mission.endDate ? <p><b>Ende:</b> {mission.endDate}</p> : <p><b>Status:</b> {mission.status}</p>}
        </div>
      </div>
      <div className="mission-info pure-u-1-2 pure-u-sm-9-24 left">
        <div className="mission-operator">
          {mission.operator ? <p><b>Betreiber:</b> {mission.operator} - ${mission.country}</p> : <p><b>Land:</b> {mission.country}</p>}
        </div>
        <div className="mission-destination">
          <p><b>Ziel:</b> {mission.destination}</p>
        </div>
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
