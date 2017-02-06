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
        <p>@wolfram pls hide the whole div stationImg when there is no imageUrl</p>
        <p>@wolfram pls edit the launchDate to get "seit station.launchDate" if launchDate is past and "ab station.launchDate" if launchDate is future</p>
      </div>
      <div id="controlArea" className="stations pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="stations pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortStations" className="sort-form">
                <select name="sortStations" defaultValue="sortStationsLaunchUp">
                  <option value="sortStationsLaunchUp">Startdatum &uarr;</option>
                  <option value="sortStationsLaunchDown">Startdatum &darr;</option>
                  <option value="sortStationsNameUp">Name &uarr;</option>
                  <option value="sortStationsNameDown">Name &darr;</option>
                  <option value="sortStationsEndUp">Missionsende &uarr;</option>
                  <option value="sortStationsEndDown">Missionsende &darr;</option>
                  <option value="sortStationsDurationUp">Dauer &uarr;</option>
                  <option value="sortStationsDurationDown">Dauer &darr;</option>
                </select>
              </form>
            </div>
          </div>
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
