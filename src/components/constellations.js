import React from 'react';
import {ConstellationNotes} from './notes';

const ConstellationsComponent = ({constellations}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="constellations center">
        <h1>Sternbilder</h1>
        <h3>Figuren am Firmament</h3>
        <div id="todo">
          please add a function to leave the div constellationImg empty if constellation.imageUrl doesn't exist<br/>
          pls replace the constellationNotes with Notes, footnotes can be placed in the vcard if necessary
        </div>
      </div>
      <div id="filter" className="constellations center">
        <form id="filterNorthSouth">
          <span>filtern nach Halbkugel:</span>
          <select name="northsouth">
            <option>beide</option>
            <option>nördlich</option>
            <option>südlich</option>
          </select>
        </form>
      </div>
      <div id="dataArea" className="constellations">
        <div id="constellationsTable">
          {constellations.map((constellation, idx) => <ConstellationComponent constellation={constellation} key={idx}/>)}
        </div>
      </div>
      <ConstellationNotes />
    </main>
  );
};

export default ConstellationsComponent;

const ConstellationComponent = ({constellation:item}) => {
  return (
    <div className="constellationRow pure-u-1">
      <div className="constellationImg pure-u-1 pure-u-sm-1-3 center">
        <a href={item.wikipediaUrl}><img src={item.imageUrl} alt={item.name} /></a>
        <small>Bild: {item.imageSrc}</small>
      </div>
      <div className="constellationInfo pure-u-1 pure-u-sm-1-3 center">
        <a href={item.wikipediaUrl}>{item.name}</a><br />
        ({item.latinName})
      </div>
    </div>
  );
};

// <div id="filter" className="const">
//   <form id="filterNorthSouth">
//     <span>filtern nach Halbkugel:</span>
//     <select name="northsouth">
//       <option>beide</option>
//       <option>nördlich</option>
//       <option>südlich</option>
//     </select>
//   </form>
// </div>
// <div id="dataArea" className="const">
//   <table id="constTable" className="tablesorter">
//     <thead>
//       <tr id="constHeader">
//         <th className="constName left">Name</th>
//         <th className="constLatin left">latein. Name</th>
//         <th className="constShort left">kurz</th>
//         <th className="constAuthor left">Autor</th>
//         <th className="constY left">Jahr</th>
//         <th className="constSphere left">N / S</th>
//         <th className="constVisFrom left">von</th>
//         <th className="constVisTo left">bis</th>
//         <th className="constSqDeg left">deg<sup>2</sup></th>
//         <th className="starsOver3Mag center">>3<sup>m</sup></th>
//         <th className="starsOver4Mag center">>4<sup>m</sup></th>
//         <th className="constBrightStar left">hellster Stern</th>
//         <th className="constMagMax right">Mag<sub>max</sub></th>
//       </tr>
//     </thead>
//     <tbody>
//       {constellations.map((constellation, idx) => <ConstellationComponent constellation={constellation} key={idx} />)}
//     </tbody>
//   </table>
// </div>

// const ConstellationComponent = ({constellation:item}) => {
//   return (
//     <tr className="constRow">
//       <td className="constName"><a href={item.wikipediaUrl}>{item.name}</a></td>
//       <td className="constLatin">{item.latinName}</td>
//       <td className="constShort">{item.shortName}</td>
//       <td className="constAuthor"><a href={item.author.wikipediaUrl}>{item.author.name}</a></td>
//       <td className="constY">{item.y}</td>
//       <td className="constSphere">{item.sphere}</td>
//       <td className="constVisFrom">{item.visFrom}</td>
//       <td className="constVisTo">{item.visTo}</td>
//       <td className="constSqDeg">{item.sqDeg}</td>
//       <td className="starsOver3Mag center">{item.starsOver3Mag}</td>
//       <td className="starsOver4Mag center">{item.starsOver4Mag}</td>
//       <td className="constBrightStar"><a href={item.brightStar.wikipediaUrl}>{item.brightStar.name}</a></td>
//       <td className="constMagMax right">{item.magMax}</td>
//     </tr>
//   );
// };
