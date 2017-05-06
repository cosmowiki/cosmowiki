import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const SpaceStationsComponent = ({spaceStations:stations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="stations pure-u-1 center">
        <h1>Raumstationen</h1>
        <h3>künstliche Habitate im All</h3>
      </div>
      <Summary>
        <p className="summary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <div className="summary-img">
          <a href="/img/stars/1_lg.jpg" title="Bildbeschreibung - Großansicht">
            <img src="/img/stars/1_sm.jpg" alt="Bildbeschreibung" />
          </a>
          <p className="summary-img-text">
            Bildbeschreibung
          </p>
        </div>
        <p className="summary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <p className="summary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <div className="summary-img">
          <a href="/img/stars/2_lg.jpg" title="Bildbeschreibung - Großansicht">
            <img src="/img/stars/2_sm.jpg" alt="Bildbeschreibung" />
          </a>
          <p className="summary-img-text">
            Bildbeschreibung
          </p>
        </div>
        <p className="summary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <p className="summary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
      </Summary>
      <div id="controlArea" className="stations pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="stations pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortStations" className="sort-form">
                <label>Sortieren nach:</label>
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
      <div className="station-img pure-u-1 pure-u-sm-1-4 pure-u-md-1-3 center">
        {station.imageUrl ? <a href={station.imageUrl} title={station.name}><img src={station.imageSmallUrl} alt={station.name} /></a> : ''}
        {station.imageUrl ? <small>Bild: {station.imageSrc}</small> : ''}
        {station.imageLicenseUrl ? <small><a href={station.imageLicenseUrl}>{station.imageLicence}</a></small> : <small>{station.imageLicence}</small>}
      </div>
      <div className="station-info pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 center">
        <div className="station-name pure-u-1 pure-u-md-1-2">
          <p className="station-name"><a href={station.wikipediaUrl} title={station.name}>{station.name}</a></p>
          {station.operator ? <p className="station-operator">Betreiber: {station.operator}</p> : ''}
          </div>
        <div className="station-data pure-u-1 pure-u-md-1-2">
          {station.duration ? <p className="station-data">Zeit im All: {station.duration}</p> : ''}
          <p className="station-data">{station.reenterDate ? `von ${station.launchDate} bis ${station.reenterDate}` : `Start: ${station.launchDate} - ${station.status}`}</p>
          {station.volume ? <p className="station-data">Masse: {station.mass}, Volumen (unter Druck): {station.volume}</p> : ''}
        </div>
      </div>
    </div>
  );
};
