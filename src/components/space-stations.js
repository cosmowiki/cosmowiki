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
      <div className="stationsImgBox pure-u-1 pure-u-sm-1-4 center">
        <a href={station.wikipediaUrl}><img src={station.imageUrl} alt={station.name} /></a>
        <div className="stationsImgTxt center">
          Bildquelle: {station.imageSrc}
        </div>
      </div>
      <div className="stationsList pure-u-1 pure-u-sm-1-2 center">
        <ul>
          <li className="stationsName"><a href={station.wikipediaUrl}>{station.name}</a></li>
          <li>von: {station.launchDate} - bis: {station.reenterDate}</li>
        </ul>
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

//$query = "SELECT statname, statLink, statImgLink, statImgSource, statImgLic,
//statImgLicLink, statOperator, statLaunchY, statLaunchM, statLaunchD,
//statDaysInOrbit, statReenterY, statReenterM, statReenterD, statCrewSize,
//statDaysOccu, statVisitors, statManVis, statUnmanVis, statApo, statPeri,
//statIncli, statMass, statPressVol, statDescript
//FROM spacestats ORDER by id";
//if ($result = mysqli_query($link, $query)) {
//// fetch object array
//	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
//		// merge the date array elements yyyy mm dd to a dd.mm.yyyy string
//		$launch = array($row[statLaunchD], $row[statLaunchM], $row[statLaunchY]);
//		$reenter = array($row[statReenterD], $row[statReenterM], $row[statReenterY]);
//		$launch = implode('.', array_filter($launch));
//		$reenter = implode('.', array_filter($reenter));
//		echo "<div className="statRow">
//		<div className="statImg"><img src=$row[statImgLink] width="300"></div>
//		<div className="statName"><a href=$row[statLink]>$row[statName]</a></div>
//		<div className="statOperator">$row[statOperator]</div>
//		<div className="statLaunch">$launch</div>
//		<div className="statDaysInOrbit">$row[statDaysInOrbit]</div>
//		<div className="statReenter">$reenter</div>
//		<div className="statCrewSize center">$row[statCrewSize]</div>
//		<div className="statDaysOccu center">$row[statDaysOcuu]</div>
//		<div className="statVisitors center">$row[statVisitors]</div>
//		<div className="statManVis center">$row[statManVis]</div>
//		<div className="statUnmanVis center">$row[statUnmanVis]</div>
//		<div className="statApo">$row[statApo]</div>
//		<div className="statPeri">$row[statPeri]</div>
//		<div className="statIncli">$row[statIncli]</div>
//		<div className="statMass">$row[statMass]</div>
//		<div className="statPressVol">$row[statPressVol]</div>
//		</div>";
