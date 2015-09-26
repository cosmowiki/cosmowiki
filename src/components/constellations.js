import React from 'react';
import {ConstellationNotes} from './notes';

export default class SolarSystemComponent {

  render() {
    return (
      <main role="main" className="pure-u-2-3">
        <div id="featured" className="const center">
          <h1>Sternbilder</h1>
          <p>Figuren am Firmament</p>
        </div>
        <div id="filter" className="const">
          <form id="filterNorthSouth">
            <span>filtern nach Halbkugel:</span>
            <select name="northsouth">
              <option>beide</option>
              <option>n&ouml;rdlich</option>
              <option>s&uuml;dlich</option>
            </select>
          </form>
        </div>
        <div id="dataTable" className="const">
          <table id="constTable" className="tablesorter">
            <thead>
              <tr id="constHeader">
                <th className="constName left">Name</th>
                <th className="constLatin left">latein. Name</th>
                <th className="constShort left">kurz</th>
                <th className="constAuthor left">Autor</th>
                <th className="constY left">Jahr</th>
                <th className="constSphere left">N / S</th>
                <th className="constVisFrom left">von</th>
                <th className="constVisTo left">bis</th>
                <th className="constSqDeg left">deg<sup>2</sup></th>
                <th className="starsOver3Mag center">>3<sup>m</sup></th>
                <th className="starsOver4Mag center">>4<sup>m</sup></th>
                <th className="constBrightStar left">hellster Stern</th>
                <th className="constMagMax left">Mag<sub>max</sub></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <ConstellationNotes />
      </main>
    );
  }
}

//$query = "SELECT constName, constLink, constMapLink, constListLink, constLatin,
//constShort, constAuthor, constAuthorLink, constY, constSphere, constVisFrom,
//constVisTo, constSqDeg, starsOver3Mag, starsOver4Mag, constMagMax,
//constBrightStar, constBrightStarLink
//FROM constellations ORDER by constName";
//if ($result = mysqli_query($link, $query)) {
//// fetch object array
//	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
//// set SPACE for every value = 0
//		foreach ($row as $key => $value) {
//			if (empty($value)) {
//				$row[$key] = '&nbsp;';
//			}
//		}
//		echo "<tr className="constRow\">
//			<td className="constName\"><a href=$row[constLink]>$row[constName]</a></td>
//			<td className="constLatin\">$row[constLatin]</td>
//			<td className="constShort\">$row[constShort]</td>
//			<td className="constAuthor\"><a href=$row[constAuthorLink]>$row[constAuthor]</a></td>
//			<td className="constY\">$row[constY]</td>
//			<td className="constSphere\">$row[constSphere]</td>
//			<td className="constVisFrom\">$row[constVisFrom]</td>
//			<td className="constVisTo\">$row[constVisTo]</td>
//			<td className="constSqDeg\">$row[constSqDeg]</td>
//			<td className="starsOver3Mag center\">$row[starsOver3Mag]</td>
//			<td className="starsOver4Mag center\">$row[starsOver4Mag]</td>
//			<td className="constBrightStar\"><a href=$row[constBrightStarLink]>$row[constBrightStar]</a></td>
//			<td className="constMagMax\">$row[constMagMax]</td>
//		</tr>";
