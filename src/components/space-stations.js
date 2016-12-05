import React from 'react';
import Notes from './notes';

const SpaceStationsComponent = ({spaceStations:stations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="stations center">
        <h1>Raumstationen</h1>
        <h3>künstliche Habitate im All</h3>
        <div id="todo">
          please add a function to leave the div stationImg empty if station.imageUrl doesn't exist<br />
          please edit the date-function to get "seit station.launchDate" if launchDate is past and "ab station.launchDate" if launchDate is future
        </div>
      </div>
      <div id="dataArea" className="stations">
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
      <div className="stationImg pure-u-1 pure-u-sm-1-3 center">
        <a href={station.wikipediaUrl}><img src={station.imageUrl} alt={station.name} /></a>
        <small>Bild: {station.imageSrc}</small>
      </div>
      <div className="stationInfo pure-u-1 pure-u-sm-1-3 center">
        <a href={station.wikipediaUrl}>{station.name}</a><br />
        {station.reenterDate ? `von ${station.launchDate} bis ${station.reenterDate}` : `${station.launchDate}`}
      </div>
    </div>
  );
};

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
