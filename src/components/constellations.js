import React from 'react';
import {ConstellationNotes} from './notes';

export default class ConstellationsComponent {

  render() {
    const {constellations} = this.props;
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
              {constellations.map((constellation, idx) => <ConstellationComponent constellation={constellation} key={idx} />)}
            </tbody>
          </table>
        </div>
        <ConstellationNotes />
      </main>
    );
  }
}

class ConstellationComponent {
  
  render() {
    const {constellation:item} = this.props;
    return (
      <tr className="constRow">
  			<td className="constName"><a href={item.wikipediaUrl}>{item.name}</a></td>
  			<td className="constLatin">$row[constLatin]</td>
  			<td className="constShort">$row[constShort]</td>
  			<td className="constAuthor"><a href={item.author.wikipediaUrl}>{item.author.name}</a></td>
  			<td className="constY">$row[constY]</td>
  			<td className="constSphere">$row[constSphere]</td>
  			<td className="constVisFrom">$row[constVisFrom]</td>
  			<td className="constVisTo">$row[constVisTo]</td>
  			<td className="constSqDeg">$row[constSqDeg]</td>
  			<td className="starsOver3Mag center">$row[starsOver3Mag]</td>
  			<td className="starsOver4Mag center">$row[starsOver4Mag]</td>
  			<td className="constBrightStar"><a href={item.brightStar.wikipediaUrl}>{item.brightStar.name}</a></td>
  			<td className="constMagMax">$row[constMagMax]</td>
  		</tr>
    );
  }
  
}