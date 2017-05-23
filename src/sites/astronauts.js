import React from 'react';
import AstronautsComponent from '../components/astronauts';
import Grouper from './helper/grouper';

export default class Astronauts {

  static fromRawData(rawData) {
    return rawData.map(raw => Astronaut.fromRawData(raw))
  }

  static componentWithData(astronauts) {
    const groups = new Grouper(astronauts).byName();
    return <AstronautsComponent groupedAstronauts={groups} />;
  }

}

export class Astronaut {

  constructor({name, link, imgSmallUrl, imgUrl, country, flag, agency, agencyUrl, numberOfMissions, missions, born, died, timeInSpace, firstLaunch, numberOfSpacewalks, durationOfSpacewalks, type}) {
    this.name = name;
    this.link = link;
    this.imgSmallUrl = imgSmallUrl;
    this.imgUrl = imgUrl;
    this.country = country;
    this.flag = flag;
    this.agency = agency;
    this.agencyurl = agencyUrl;
    this.numberOfMissions = numberOfMissions;
    this.missions = missions;
    this.born = born;
    this.died = died;
    this.timeInSpace = timeInSpace;
    this.firstLaunch = firstLaunch;
    this.numberOfSpacewalks = numberOfSpacewalks;
    this.durationOfSpacewalks = durationOfSpacewalks;
    this.type = type;
  }

  static fromRawData(raw) {
    // "itemname": "Armstrong",
    // "itemurl": "https://de.wikipedia.org/wiki/Neil_Armstrong",
    // "itemname2": "Neil",
    // "itemdescription": "Gemini 8, Apollo 11",
    // "itemtype": 2,
    // "itemcolor": "/img/flags/USA.png",
    // "itemimgsmallurl": "/img/astronauts/armstrong_neil_sm.jpg",
    // "itemimgurl": "/img/astronauts/armstrong_neil_lg.jpg",
    // "itemdateyear": "1930",
    // "itemdatemonth": "08",
    // "itemdateday": "05",
    // "itemdate2year": "2012",
    // "itemdate2month": "08",
    // "itemdate2day": "25",
    // "itemtime2": "8 d 13:59 h",
    // "itemdate3year": 1966,
    // "itemdate3month": "03",
    // "itemdate3day": "16",
    // "itemduration": "2:31 h",
    // "itemstatus": 1,
    // "itemcountry": "USA",
    // "itemproperty": "Raumfahrer, Pilot",
    // "itemtags": "Gemini 8, Apollo 11, Mond, Mondlandung"
    let item = {
      name: [raw.itemname, raw.itemname2].filter(v => v).join(', '),
      link: raw.itemurl,
      imgSmallUrl: raw.itemimgsmallurl,
      imgUrl: raw.itemimgurl,
      country: raw.itemcountry,
      flag: raw.itemcolor,
      agency: raw.itemparent,
      agencyUrl: raw.itemparenturl,
      numberOfMissions: raw.itemid,
      missions: raw.itemdescription,
      born: [raw.itemdateday, raw.itemdatemonth, raw.itemdateyear].filter(v => v).join('.'),
      died: [raw.itemdate2day, raw.itemdate2month, raw.itemdate2year].filter(v => v).join('.'),
      timeInSpace: raw.itemtime2,
      firstLaunch: [raw.itemdate3day, raw.itemdate3month, raw.itemdate3year].filter(v => v).join('.'),
      numberOfSpacewalks: raw.itemstatus,
      durationOfSpacewalks: raw.itemduration,
      type: raw.itemtype
    };
    //item.tags = raw.tags.split(',');
    return new Astronaut(item);
  }

}
Astronaut.ASTRONOMER = 1;
Astronaut.ASTRONAUT = 2;
Astronaut.ASTRONOMER_AND_ASTRONAUT = 3;
