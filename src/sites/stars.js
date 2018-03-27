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
  constructor({historical, alternative, bayer, short, flamsteed, hr, hd}) {
    this.historical = historical;
    this.alternative = alternative;
    this.bayer = bayer;
    this.short = short;
    this.flamsteed = flamsteed;
    this.hr = hr;
    this.hd = hd;
  }
  toString() {
    return this.historical || this.flamsteed || this.hr || this.hd;
  }
}

class Star {

  static fromRawData(raw) {
    const star = new Star();
    star.name = new StarName({
      historical: raw.itemname,
      aternative: raw.itemname3,
      bayer: raw.itemnamebayer,
      short: raw.itemnamebayershort,
      flamsteed: raw.itemnameflamsteed,
      hr: raw.itemnamehr,
      hd: raw.itemnamehd,
    });
    star.link = raw.itemurl;
    star.hip = raw.itemnamehip;
    star.sao = raw.itemnamesao;
    star.tycho = raw.itemnametycho;
    star.bd = raw.itemnamebd;
    star.cd = raw.itemnamecd;
    star.else = raw.itemnameelse;

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
    "itemname": "Acamar",
    "itemurl": "https://de.wikipedia.org/wiki/Acamar",
    "itemname4": "θ Eridani",
    "itemname5": "θ Eri",
    "itemname8": "HR 897",
    "itemname9": "HD 18622",
    "itemname10": "HIP 13847",
    "itemname11": "SAO 216113",
    "itemname12": "TYC 7563-1016-1",
    "itemname14": "CD -40° 771",
    "itemparent": "Eridanus",
    "itemparenturl": "https://de.wikipedia.org/wiki/Eridanus_(Sternbild)",
    "itemparallax": "20,23",
    "itemdistance": 161,
    "itemrightascension": "02h 58m 15,67525s",
    "itemdeclination": "-40° 18′ 16,8524″",
    "itemappmag": "3,2",
    "itemspectraltype": "A3IV-V",
    "tags": "Doppelstern"
}
*/
