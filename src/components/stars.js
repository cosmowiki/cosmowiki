import React from 'react';
import {StarNotes} from './notes';

export default class StarsComponent {

  render() {
    const {stars} = this.props;
    return (
      <main role="main" className="pure-u-2-3 pure-u-lg-1">
        <div id="featured" className="stars center">
          <h1>Sterne</h1>
          <h3>strahlende Objekte im All</h3>
        </div>
        <div id="filter" className="stars">
          <form id="filterNorthSouth">
            <span>filtern nach Halbkugel:</span>
            <select name="northsouth">
              <option>beide</option>
              <option>n&ouml;rdlich</option>
              <option>s&uuml;ddlich</option>
            </select>
          </form>
          <form id="filterConstellation">
            <span>filtern nach Sternbild:</span>
            <select name="const">
              <option>alle</option>
              <option>foo</option>
              <option>bar</option>
            </select>
          </form>
        </div>
        <div id="dataTable" className="stars">
          <table id="starsTable" className="tablesorter">
            <thead>
              <tr id="starsHeader">
                <th className="starName left">Name</th>
                <th className="starBay left">Bayer-Bezeichnung</th>
                <th className="starShort left">kurz</th>
                <th className="starConst left">Sternbild</th>
                <th className="starRekt left">Rektaszension</th>
                <th className="starDekli left">Deklination</th>
                <th className="starAppMag left">mag</th>
                <th className="starSpectrClass left">Klasse</th>
                <th className="starDist left">Lj</th>
                <th className="starMass left">M<sub>&#9737;</sub></th>
                <th className="starRadius left">R<sub>&#9737;</sub></th>
              </tr>
            </thead>
            <tbody>
              {stars.map((star, idx) => <StarComponent star={star} key={idx} />)}
            </tbody>
          </table>
        </div>
        <StarNotes />
      </main>
    );
  }
}

class StarComponent {
  
  render() {
    const noop = () => {};
    const {star} = this.props; 
    return (
      <tr className="starsRow">
        <td className="starName">
          <a href={star.link} onMouseOver={noop} onMouseOut={noop}>{star.name}</a>
          <div className="starInfoBox">
            <p>
              <strong>alternative Namen:</strong> {star.alternativeName}</p>
            <p>
              <strong>Bezeichnung nach:</strong><br />
              <a href="https://de.wikipedia.org/wiki/Bright-Star-Katalog" target="_blank" title="Bright-Star-Katalog">Bright-Star-Katalog</a>: HR {star.hr}<br />
              <a href="https://de.wikipedia.org/wiki/Henry-Draper-Katalog" target="_blank" title="Henry-Draper-Katalog">Henry-Draper-Katalog</a>: HD {star.hd}<br />
              <a href="https://de.wikipedia.org/wiki/Hipparcos-Katalog" target="_blank" title="Hipparcos-Katalog">Hipparcos-Katalog</a>: HIP {star.hip}<br />
              <a href="https://de.wikipedia.org/wiki/SAO-Katalog" target="_blank" title="SAO-Katalog">SAO-Katalog</a>: SAO {star.sao}<br />
              <a href="https://de.wikipedia.org/wiki/Flamsteed-Bezeichnung" target="_blank" title="Flamsteed-Bezeichnung">SAO-Katalog</a>: Flamsteed {star.flamsteed}
            </p>
          </div>
        </td>
        <td className="starBay">{star.bayerName}</td>
        <td className="starShort">{star.shortName}</td>
        <td className="starConst"><a href={star.constLink}>{star.constellation}</a></td>
        <td className="starRekt">{star.rekt}</td>
        <td className="starDekli">{star.dekli}</td>
        <td className="starAppMag">{star.appMag}</td>
        <td className="starSpectrClass">{star.spectrClass}</td>
        <td className="starDist">{star.dist}</td>
        <td className="starMass">{star.mass}</td>
        <td className="starRadius">{star.radius}</td>
      </tr>   
    );
  }
  
}

//<?php include("header.php")?>
//<script type="text/javascript">
//$(document).ready(function() { 
//	$("#starsTable").tablesorter(); 
//}
//);
//</script>
//	
//<?php
//$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
//mysqli_set_charset($link, "utf8");
//// check connection
//if (mysqli_connect_errno()) {
//	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
//	exit();
//}
//$query = "SELECT starHistName, starLink, starAltName, starBay, starShort,
//starFlam, starHr, starHd, starHip, starSao, starConst, constLink, starAppMag,
//starSpektr, starDist, starRekt, starDekli, starMass, starRadius
//FROM stars";
//if ($result = mysqli_query($link, $query)) {
//// fetch object array
//	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
//// set SPACE for every value = 0
//		foreach ($row as $key => $value) {
//			if (empty($value)) {
//				$row[$key] = '&nbsp;';
//			}
//		}
//		echo "<tr className="starsRow">
//			<td className="starHistName">
//				<a href=$row[starLink] onMouseOver="showTooltip(this)" onMouseOut="hideTooltip(this)">$row[starHistName]</a>
//				<div className="starInfoBox">
//					<p>
//						<strong>alternative Namen:</strong> $row[starAltName]</p>
//					<p>
//						<strong>Bezeichnung nach:</strong><br>
//						<a href="https://de.wikipedia.org/wiki/Bright-Star-Katalog" target="_blank" title="Bright-Star-Katalog">Bright-Star-Katalog</a>: HR $row[starHr]<br>
//						<a href="https://de.wikipedia.org/wiki/Henry-Draper-Katalog" target="_blank" title="Henry-Draper-Katalog">Henry-Draper-Katalog</a>: HD $row[starHd]<br>
//						<a href="https://de.wikipedia.org/wiki/Hipparcos-Katalog" target="_blank" title="Hipparcos-Katalog">Hipparcos-Katalog</a>: HIP $row[starHip]<br>
//						<a href="https://de.wikipedia.org/wiki/SAO-Katalog" target="_blank" title="SAO-Katalog">SAO-Katalog</a>: SAO $row[starSao]
//					</p>
//				</div>
//			</td>
//			<td className="starBay">$row[starBay]</td>
//			<td className="starShort">$row[starShort]</td>
//			<td className="starConst"><a href=$row[constLink]>$row[starConst]</a></td>
//			<td className="starRekt">$row[starRekt]</td>
//			<td className="starDekli">$row[starDekli]</td>
//			<td className="starAppMag">$row[starAppMag]</td>
//			<td className="starSpektr">$row[starSpektr]</td>
//			<td className="starDist">$row[starDist]</td>
//			<td className="starMass">$row[starMass]</td>
//			<td className="starRadius">$row[starRadius]</td>
//		</tr>";
//	}
//// free result set
//	mysqli_free_result($result);
//}
//// close connection
//mysqli_close($link);
//?>
//<?php include("footer.php")?>