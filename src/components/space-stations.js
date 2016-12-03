import React from 'react';
import Notes from './notes';

const SpaceStationsComponent = ({spaceStations:stations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="stations center">
        <h1>Raumstationen</h1>
        <h3>künstliche Habitate im All</h3>
      </div>
      <div id="dataTable" className="stations">
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
    <div className="stationsRow pure-u-1">
      <div className="stationsImg pure-u-1 pure-u-sm-1-3 center">
        <a href={station.wikipediaUrl}><img src={station.imageUrl} alt={station.name} /></a>
        <small>Bild: {station.imageSrc}</small>
      </div>
      <div className="stationsInfo pure-u-1 pure-u-sm-1-3 center">
        <a href={station.wikipediaUrl}>{station.name}</a><br />
        {station.reenterDate ? `${station.launchDate} - ${station.reenterDate}` : `${station.launchDate}`}
      </div>
    </div>
  );
};
// please add a function to leave the div stationsImg empty if station.imageUrl doesn't exist

// please add a function to get "from" launchDate if launch in the past and "since" launchDate if launch in the future

// <ul className="statList pure-u-1 pure-u-lg-2-3">
//   <li className="statName"><a href={station.wikipediaUrl}>{station.name}</a></li>
//   <li>Betreiber: {station.operator}</li>
//   <li>Start: {station.launchDate} - Wiedereintritt in die Erdatmosphäre: {station.reenterDate}</li>
//   <li>gestartet von: <a href={station.pad.wikipediaUrl}>{station.pad.name}</a> mit <a href={station.rocket.wikipediaUrl}>{station.rocket.name}</a></li>
//   <li>{station.daysInOrbit} Tage im Orbit, davon {station.daysOccupied} Tage bemannt</li>
//   <li>maximale Besatzung: {station.crewSize}</li>
//   <li>{station.visitors} Astronauten haben die Station besucht</li>
//   <li>Flüge zur Station: {station.mannedDocks} bemannt, {station.unmannedDocks} unbemannt</li>
//   <li>Apogäum: {station.apo}, Perigäum: {station.peri}, Bahnneigung: {station.inclination}</li>
//   <li>Masse: {station.mass}</li>
//   <li>Volumen (unter Druck): {station.pressVol}</li>
// </ul>
