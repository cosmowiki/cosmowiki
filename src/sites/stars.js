import React from 'react';
import StarsComponent from '../components/stars';
import Grouper from './helper/grouper';

export default class Stars {

  static componentWithData(stars) {
    const groups = new Grouper(stars).byName();
    const constellations = allConstellationsSorted(stars);
    return <StarsComponent groupedStars={groups} constellations={constellations} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Star.fromRawData(raw))
  }

}

function allConstellationsSorted(stars) {
  const allConstellations = stars.map(star => star.constellation);
  const uniques = Array.from(new Set(allConstellations).values());
  const emptyValue = value => value;
  return uniques
    .filter(emptyValue)
    .sort();
}

class StarName {
  constructor({name, historical, alternative, bayer, short}) {
    this.name = name;
    this.historical = historical;
    this.alternative = alternative;
    this.bayer = bayer;
    this.short = short;
  }
  toString() {
    return this.name;
  }
}

class Star {

  static fromRawData(raw) {
    const star = new Star();
    star.name = new StarName({
      name: raw.itemname,
      historical: raw.itemname2,
      aternative: raw.itemname3,
      bayer: raw.itemname4,
      short: raw.itemname5
    });
    star.link = raw.itemurl;
    star.flamsteed = raw.itemname6;
    star.hr = raw.itemname7;
    star.hd = raw.itemname8;
    star.hip = raw.itemname9;
    star.sao = raw.itemname10;

    star.constellation = raw.itemparent;
    star.constLink = raw.itemparenturl; // TODO make it a real ref to the constellation

    star.dekli = raw.itemdeclination;
    star.rekt = raw.itemrightascension;
    star.appmagnitude = raw.itemappmag;
    star.spectralclass = raw.itemproperty;

    star.distance = raw.itemdistance;
    star.mass = raw.itemmass;
    star.radius = raw.itemmeanradius;

    return star;
  }

}

/*
  {
    "starname": "Alphard",
    "starlink": "https://de.wikipedia.org/wiki/Alphard",
    "historicalname": "Alphard",
    "alternativename": "Soheil al Fard",
    "bayername": "α Hydrae",
    "shortname": "α Hya",
    "flamsteed": "30 Hydrae",
    "hr": "HR 3748",
    "hd": "HD 81797",
    "hip": "HIP 46390",
    "sao": "SAO 136871",
    "constellation": "Wasserschlange",
    "constlink": "https://de.wikipedia.org/wiki/Wasserschlange_(Sternbild)",
    "appmag": 1.99,
    "spectrclass": "K3 III",
    "dist": 180.3,
    "rekt": "09h 27m 35s",
    "dekli": "-8° 39′ 31″",
    "mass": 3.03,
    "radius": 50.5
  },
 */
