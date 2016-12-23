import React from 'react';
import Notes from './notes';

const SpaceStationsComponent = ({spaceStations:stations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="pure-u-1 stations">
        <h1>Raumstationen</h1>
        <h3>künstliche Habitate im All</h3>
      </div>
      <div id="todo" className="pure-u-1">
        please add a function to leave the div stationImg empty if station.imageUrl doesn't exist<br />
        please edit the date-function to get "seit station.launchDate" if launchDate is past and "ab station.launchDate" if launchDate is future
      </div>
      <div id="functionArea" className="pure-u-1 missions">
        <div id="sort" className="missions">
          <form id="sortLaunch">
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
      </div>
      <div id="dataArea" className="pure-u-1  stations">
        <div id="stationsTable">
          {stations.map((station, idx) => <StationComponent spaceStation={station} key={idx}/>)}
        </div>
      </div>
      <Notes/>
    </main>
  );
};

export default SpaceStationsComponent;

const StationComponent = ({spaceStation:station}) => {
  return (
    <div className="stationRow pure-u-1">
      <div className="stationImg pure-u-1 pure-u-sm-1-5 center">
        <a href={station.wikipediaUrl}><img src={station.imageUrl} alt={station.name} /></a>
        <small>Bild: {station.imageSrc}</small>
      </div>
      <div className="stationInfo pure-u-1 pure-u-sm-3-5 center">
        <a href={station.wikipediaUrl}>{station.name}</a><br />
        {station.reenterDate ? `von ${station.launchDate} bis ${station.reenterDate}` : `${station.launchDate}`}
      </div>
    </div>
  );
};
