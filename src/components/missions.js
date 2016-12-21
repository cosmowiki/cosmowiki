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
        <table id="missionsTable" className="tablesorter">
          <thead>
          <tr id="missionsHeader">
            <th className="missionLaunch center">Start</th>
            <th className="missionName left">Name</th>
            <th className="missionCountry left">Land</th>
            <th className="missionRocket left">Träger</th>
            <th className="missionPad left">Startplatz</th>
            <th className="missionDest left">Ziel</th>
            <th className="missionCrew center">Crew</th>
            <th className="missionDuration left">Dauer</th>
            <th className="missionEnd center">Ende</th>
          </tr>
          </thead>
          <tbody>
            {missions.map((mission, idx) => <MissionComponent mission={mission} key={idx}/>)}
          </tbody>
        </table>
      </div>
      <Notes />
    </main>
  );
};

export default MissionsComponent;

const MissionComponent = ({mission}) => {
  return (
    <tr className="missionsRow">
      <td className="missionLaunch center">{mission.launchDate}</td>
      <td className="missionName"><a href={mission.link}>{mission.name}</a></td>
      <td className="missionCountry">{mission.country}</td>
      <td className="missionRocket">{mission.rocket ? <RocketLink rocket={mission.rocket} /> : '-'}</td>
      <td className="missionPad">{mission.pad ? <PadLink pad={mission.pad} /> : '-'}</td>
      <td className="missionDest">{mission.destination}</td>
      <td className="missionCrew center">{mission.crew}</td>
      <td className="missionDuration">{mission.duration}</td>
      <td className="missionEnd center">{mission.endDate}</td>
    </tr>
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
