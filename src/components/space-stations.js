import React from 'react';
import Notes from './notes';

export default class SpaceStationsComponent {

  render() {
    const {spaceStations:stations} = this.props;
    return (
      <main role="main" className="pure-u-2-3">
        <div id="featured" className="stations center">
          <h1>Raumstationen</h1>
          <p>künstliche Habitate im All</p>
        </div>
        <div id="dataTable" className="stats">
          <div id="statsTable">
            {stations.map((station, idx) => <StationComponent spaceStation={station} key={idx}/>)}
          </div>
        </div>
        <Notes/>
      </main>
    )
  }
}

class StationComponent {
  
  render() {
    const {spaceStation:station} = this.props; 
    return (
      <div className="statRow">
        <div className="statImg"><img src={station.imageUrl} width="300" /></div>
        <div className="statName"><a href={station.statLink}>{station.name}</a></div>
        <div className="statOperator">{station.operator}</div>
        <div className="statLaunch">{station.launchDate}</div>
        <div className="statDaysInOrbit">{station.daysInOrbit}</div>
        <div className="statReenter">{station.reenterDate}</div>
        <div className="statCrewSize center">{station.crewSize}</div>
        <div className="statDaysOccu center">{station.daysOcuu}</div>
        <div className="statVisitors center">{station.visitors}</div>
        <div className="statManVis center">{station.manVis}</div>
        <div className="statUnmanVis center">{station.unmanVis}</div>
        <div className="statApo">{station.apo}</div>
        <div className="statPeri">{station.peri}</div>
        <div className="statIncli">{station.incli}</div>
        <div className="statMass">{station.mass}</div>
        <div className="statPressVol">{station.pressVol}</div>
      </div>
    );
  }
  
}

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
