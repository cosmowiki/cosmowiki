import React from 'react';
import Notes from './notes';

const SpaceStationsComponent = ({spaceStations:stations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="stations pure-u-1 center">
        <h1>Raumstationen</h1>
        <h3>künstliche Habitate im All</h3>
      </div>
      <div id="todo" className="pure-u-1">
        @wolfram pls add a function to leave the div stationImg empty if station.imageUrl doesn't exist<br />
        @wolfram pls edit the date-function to get "seit station.launchDate" if launchDate is past and "ab station.launchDate" if launchDate is future<br />
        @all find a way for sorter and filter on small screens (toggle-buttons?)
      </div>
      <div id="functionArea" className="stations pure-u-1">
        <div id="sort" className="stations">
          <form id="sortStations" className="sort-form">
            <select name="sortStations">
              <option value="sortStationsLaunchUp" selected>Startdatum - aufsteigend</option>
              <option value="sortStationsLaunchDown">Startdatum - absteigend</option>
              <option value="sortStationsEndUp">Missionsende - aufsteigend</option>
              <option value="sortStationsEndDown">Missionsende - absteigend</option>
              <option value="sortStationsDurationUp">Dauer - aufsteigend</option>
              <option value="sortStationsDurationDown">Dauer - absteigend</option>
              <option value="sortStationsNameUp">Name - aufsteigend</option>
              <option value="sortStationsNameDown">Name - absteigend</option>
            </select>
          </form>
        </div>
      </div>
      <div id="dataArea" className="stations pure-u-1">
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
    <div className="station-row data-row pure-u-1">
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
