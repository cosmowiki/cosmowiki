import React from 'react';
import ScientistsComponent from '../components/scientists';
import Grouper from './helper/grouper';

export default class Scientists {

  static fromRawData(rawData) {
    return rawData.map(raw => Scientist.fromRawData(raw))
  }

  static componentWithData(scientists) {
    const groups = new Grouper(scientists).byName();
    return <ScientistsComponent groupedScientists={groups} />;
  }

}

export class Scientist {

  constructor({name, link, profession, country, description, born, died, type}) {
    this.name = name;
    this.link = link;
    this.profession = profession;
    this.country = country;
    this.description = description;
    this.born = born;
    this.died = died;
    this.type = type;
  }

  static fromRawData(raw) {
      // "itemname": "Armstrong",
      // "itemname2": "Neil",
      // "itemurl": "https://de.wikipedia.org/wiki/Neil_Armstrong",
      // "itemdescription": "Gemini 8, Apollo 11 - erster Mensch auf dem Mond am 21.06.1969",
      // "itemdateyear": "1930",
      // "itemdatemonth": 8,
      // "itemdateday": 5,
      // "itemdate2year": "2012",
      // "itemdate2month": 8,
      // "itemdate2day": 25,
      // "itemcountry": "USA",
      // "itemproperty": "Raumfahrer, Pilot",
      // "itemtype": 2,
      // "itemtags": "Gemini 8, Apollo 11, Mond, Mondlandung"
    let item = {
      name: [raw.itemname, raw.itemname2].filter(v => v).join(', '),
      link: raw.itemurl,
      profession: raw.itemproperty,
      country: raw.itemcountry,
      description: raw.itemdescription,
      born: [raw.itemdateday, raw.itemdatemonth, raw.itemdateyear].filter(v => v).join('.'),
      died: [raw.itemdate2day, raw.itemdate2month, raw.itemdate2year].filter(v => v).join('.'),
      type: raw.itemtype
    };
    //item.tags = raw.tags.split(',');
    return new Scientist(item);
  }

}
