import React from 'react';
import Notes from './notes';

export default class MissionsComponent {

  render() {
    const {missions} = this.props;
    return (
      <main role="main" className="pure-u-2-3 pure-u-lg-1">
        <div id="featured" className="missions center">
          <h1>Missionen</h1>
          <h3>bemannte und unbemannte Raumfahrtmissionen</h3>
        </div>
        <div id="filter" className="missions">
          <form id="filterCountry">
            <span>filtern nach Ländern:</span>
          </form>
          <form id="filterDestination">
            <span>filtern nach Zielen:</span>
          </form>
        </div>
        <div id="dataTable" className="missions">
          <table id="missionsTable" className="tablesorter">
            <thead>
            <tr id="missionsHeader">
              <th className="missionLaunch center">Start</th>
              <th className="missionName left">Name</th>
              <th className="missionCountry left">Land</th>
              <th className="missionRocket left">Träger</th>
              <th className="missionPad left">Startplatz</th>
              <th className="missionDest left">Ziel</th>
              <th className="missionCrew left">Crew</th>
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
  }
}

class MissionComponent {

  render() {
    const {mission} = this.props;
    return (
      <tr className="missionsRow">
        <td className="missionLaunch center">{mission.launchDate}</td>
        <td className="missionName"><a href={mission.link}>{mission.name}</a></td>
        <td className="missionCountry">{mission.country}</td>
        <td className="missionRocket"><a href={mission.rocket.wikipediaUrl}>{mission.rocket.name}</a></td>
        <td className="missionPad"><a href={mission.pad.wikipediaUrl}>{mission.pad.name}</a></td>
        <td className="missionDest">{mission.destination}</td>
        <td className="missionCrew center">{mission.crew}</td>
        <td className="missionDuration">{mission.duration}</td>
        <td className="missionEnd center">{mission.end}</td>
      </tr>
    );
  }

}

//<?php include("header.php")?>
//<script type="text/javascript">
//$(document).ready(function() { 
//	$("#missionsTable").tablesorter( {dateFormat: 'yyyy/MM/dd'} ); 
//}
//);
//</script>
//	<main role="main" className="pure-u-2-3">
//		<div id="featured" className="missions center">
//			<h1>Missionen</h1>
//			<p>bemannte und unbemannte Raumfahrtmissionen</p>
//		</div>
//		<div id="filter" className="missions">
//			<form id="filterCountry">
//				<span style="font-weight: bold; ">filtern nach L&auml;ndern:</span>
//			</form>
//			<form id="filterDestination">
//				<span style="font-weight: bold; ">filtern nach Zielen:</span>
//			</form>
//		</div>
//		<div id="dataTable" className="missions">
//			<table id="missionsTable" className="tablesorter">
//				<thead>
//					<tr id="missionsHeader">
//						<th className="missionLaunch center">Start</th>
//						<th className="missionName left">Name</th>
//						<th className="missionCountry left">Land</th>
//						<th className="missionRocket left">Tr&auml;ger</th>
//						<th className="missionPad left">Startplatz</th>
//						<th className="missionDest left">Ziel</th>
//						<th className="missionCrew left">Crew</th>
//						<th className="missionDuration left">Dauer</th>
//						<th className="missionEnd center">Ende</th>
//					</tr>
//				</thead>
//				<tbody>
//
//<?php
//$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
//mysqli_set_charset($link, "utf8");
//// check connection
//if (mysqli_connect_errno()) {
//	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
//	exit();
//}
//$query = "SELECT missionLaunch, missionName, missionCountry, missionRocket,
//rocketLink, missionPad, padLink, missionCrew, missionDest, missionLat,
//missionLong, missionDuration, missionEnd, missionLink, missionDescript
//FROM missions ORDER by missionLaunch";
//if ($result = mysqli_query($link, $query)) {
//// fetch object array
//	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
//// set SPACE for every value = 0
//		foreach ($row as $key => $value) {
//			if (empty($value)) {
//				$row[$key] = '&nbsp;';
//			}
//		}
//// change date format from yyyy-mm-dd to dd.mm.yyyy
//		$launch = explode("-", $row[missionLaunch]);
//		if ($launch[1] != 0) {
//			$launch = $launch[2].".".$launch[1].".".$launch[0];
//		}
//		else {
//			$launch = '&nbsp;';
//		}
//		$end = explode("-", $row[missionEnd]);
//		if ($end[1] != 0) {
//			$end = $end[2].".".$end[1].".".$end[0];
//		}
//		else {
//			$end = '&nbsp;';
//		}
//		echo "<tr className="missionsRow">
//		<td className="missionLaunch center">$launch</td>
//		<td className="missionName"><a href=$row[missionLink]>$row[missionName]</a></td>
//		<td className="missionCountry">$row[missionCountry]</td>
//		<td className="missionRocket"><a href=$row[rocketLink]>$row[missionRocket]</a></td>
//		<td className="missionPad"><a href=$row[padLink]>$row[missionPad]</a></td>
//		<td className="missionDest">$row[missionDest]</td>
//		<td className="missionCrew center">$row[missionCrew]</td>
//		<td className="missionDuration">$row[missionDuration]</td>
//		<td className="missionEnd center">$end</td>
//		</tr>";
//	}
//// free result set
//	mysqli_free_result($result);
//}
//// close connection
//mysqli_close($link);
//?>
//			</tbody>
//		</table>
//		<div id="notes">
//<?php include("notes.php")?>
//		</div>
//	</main><!-- #main -->
//<?php include("footer.php")?>