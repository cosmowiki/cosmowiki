import React from 'react';
import SolarSystemComponent from '../components/solar-system';

/*
Conditions to build the component/solar-system.js:
- item.type 1 = inner planets group, the asteroid-belt, outer planets group,
transneptunian-objects group and the oort-cloud.
- item.type 2 = all planets and groups equal in hierarchy.
- item.type 3 = trojan groups, groups of planet moons and the asteroid groups of the asteroid-belt.
- item.type 4 = all planet moons, asteroids of the asteroid-belt and kuiperbelt objects.
- item.type 5 = only moons of kuiperbelt-objects.
In html structure item.type 5 is a child of item.type 4, 4 a child of 3, 3 of 2 and 2 of 1.

For each item in JSON build a div like this:
<div id="{item.name2}" className="{item.type} pure-u-x">.
Some JSON items may not contain an item.name2. These divs don't get an id and exist only to
ensure a proper stucture in html and pure-grid.
Pure-grid-classes:
item.type 1 = pure-u-1
item.type 2 = pure-u-4-5
item.type 3 = pure-u-3-4
item.type 4 = pure-u-2-3
item.type 5 = pure-u-1-2

For each item in JSON with existing(!) item.name2 build a div as a child of the div above like this:
  <div className="item-name">{item.name}</div>

WHEN item.type > 1 AND item.category = "group", THEN add className item-has-children
before item.type to expand the group onClick to show child-elements.
*/

export default class SolarSystem {

  static componentWithData(_, appUrl) {
    return <SolarSystemComponent appUrl={appUrl} />;
  }

  static fromRawData() {
    return rawData.map(raw => SolarSystem.fromRawData(raw))
  }

}

class Item {

  static fromRawData(raw) {
    const item = new Item();
    item.name = raw.itemname;
    item.name2 = raw.itemname2;
    const alternativename1 = raw.itemname3 ? `${raw.itemname3}`: '';
    const alternativename2 = raw.itemname4 ? ` ${raw.itemname4}`: '';
    item.alternativename = `(${alternativename1}${alternativename2})`;//to use in id=""
    item.type = raw.itemtype;//1 = pure-u-1, 2 = pure-u-4-5, 3 = pure-u-3-4, 4 = pure-u-2-3, 5 = pure-u-1-2
    item.category = raw.itemcategory;//star, group, planet, moon, object
    item.parent = raw.itemparent;
    item.color = raw.itemcolor;
    item.wikipediaUrl = raw.itemurl;
    item.imageSmallUrl = raw.itemimgsmallurl;
    item.imageUrl = raw.itemimgurl;
    item.imageSrc = raw.itemimgsrc;
    item.imageLicence = raw.itemimglicence;
    item.imageLicenseUrl = raw.itemimglicenceurl;

    item.semimajoraxis = raw.semimajoraxis;
    item.farthest = raw.itemapoapsis;
    item.nearest = raw.itemperiapsis;
    item.eccentricity = raw.itemeccentricity;
    item.inclination = raw.iteminclination;
    item.orbitalperiod = raw.itemorbitalperiod;
    item.synodicperiod = raw.itemsynodicperiod;
    item.orbitalspeed = raw.itemorbitalspeed;
    item.diameter = raw.itemdiameter;
    item.mass = raw.itemmass;
    item.density = raw.itemdensity;
    item.appMagnitude = raw.itemappmag;
    item.minTemperature = raw.itemmintemperature;
    item.midTemperature = raw.itemmidtemperature;
    item.maxTemperature = raw.itemmaxtemperature;
    item.pressure = raw.itempressure;
    item.atmosphere = raw.itematmosphere;

    return item;
  }

}

// {
//     "itemindex": "1.1",
//     "itemname": "Merkur",
//     "itemname2": "mercury",
//     "itemtype": 2,
//     "itemcategory": "planet",
//     "itemparent": "inner-planets",
//     "itemurl": "https://de.wikipedia.org/wiki/Merkur_(Planet)",
//     "itemcolor": "#d2d2d2",
//     "semimajoraxis": "57.909.000 km (0,3871 AE)",
//     "itemapoapsis": "69.863.200 km (0,467 AE)",
//     "itemperiapsis": "45.927.200 km (0,307 AE)",
//     "itemeccentricity": 0.2056,
//     "inclinationecliptic": "7,00°",
//     "distancetoearth": "0,517 - 1,483 AE",
//     "itemorbitalperiod": "87,969 d",
//     "itemsynodicperiod": "115,88 d",
//     "itemorbitalspeed": "47,87 km/s",
//     "geometrischeAlbedo": 106,
//     "itemdiameter": "4.879,4 km (Äquator), 4.879,4 km (Pol)",
//     "itemmass": "3,302 × 10²³ kg",
//     "itemdensity": "5,427 g/cm³",
//     "fallbeschleunigungAnDerOberfläche": "3,7 m/s²",
//     "fluchtgeschwindigkeit": "4,3 km/s",
//     "itemrotationperiod": "58 d 15 h 36 min",
//     "axial_tilt": "0,01°",
//     "itemappmag": "-1,9 mag",
//     "itemmintemperature": "100 K (-173 °C)",
//     "itemmidtemperature": "440 K (+167 °C)",
//     "itemmaxtemperature": "700 K (+427 °C)",
//     "itempressure": "10⁻¹⁵ bar",
//     "itematmosphere": "Sauerstoff: 42 %, Natrium: 29 %, Wasserstoff: 22 %, Helium: 6 %, Kalium: 0,5 %"
// },
