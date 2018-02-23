import React from 'react';
import MissionsComponent from '../components/missions';

export default class Missions {

  static componentWithData(missions) {
    return <MissionsComponent missions={missions} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Mission.fromRawData(raw))
  }

}

class Mission {

  static fromRawData(raw) {
    const mission = new Mission();

    const launchyear = raw.itemdateyear;
    const launchmonth = raw.itemdatemonth ? `${raw.itemdatemonth}.` : '';
    const launchday = raw.itemdateday ? `${raw.itemdateday}.` : '';
    mission.launchDate = `${launchday}${launchmonth}${launchyear}`;
    mission.name = raw.itemname;
    mission.name2 = raw.itemname2 ? raw.itemname2 : '';
    mission.link = raw.itemurl;
    mission.countries = raw.itemcountry ? raw.itemcountry.split(';').map(country => country.trim()) : [];// not using .split('; ') to avoid errors?
    mission.destinations = raw.itemdestination ? raw.itemdestination.split(';').map(destination => destination.trim()) : [];
    if (raw.itemparent) {
      mission.rocket = new Rocket(raw.itemparent, raw.itemparenturl);
    }
    if (raw.itemlocation) {
      mission.pad = new Pad(raw.itemlocation, raw.itemlocationurl);
    }
    mission.crew = raw.itemcrew;
    mission.duration = raw.itemduration;
    const endyear = raw.itemdate2year ? `${raw.itemdate2year}`: '';
    const endmonth = raw.itemdate2month ? `${raw.itemdate2month}.` : '';
    const endday = raw.itemdate2day ? `${raw.itemdate2day}.` : '';
    mission.endDate = `${endday}${endmonth}${endyear}`;
    const reenteryear = raw.itemdate3year ? `${raw.itemdate3year}`: '';
    const reentermonth = raw.itemdate3month ? `${raw.itemdate3month}.` : '';
    const reenterday = raw.itemdate3day ? `${raw.itemdate3day}.` : '';
    mission.reenterDate = `${reenterday}${reentermonth}${reenteryear}`;
    mission.status = raw.itemstatus ? raw.itemstatus : '-';
    mission.operator = raw.itemoperator ? raw.itemoperator : '';
    const astronaut1 = raw.itemperson ? raw.itemperson : '';//better take an array mission.astronauts[]?
    const astronaut2 = raw.itemperson2 ? raw.itemperson2 : '';
    const astronaut3 = raw.itemperson3 ? raw.itemperson3 : '';
    const astronaut4 = raw.itemperson4 ? raw.itemperson4 : '';
    const astronaut5 = raw.itemperson5 ? raw.itemperson5 : '';
    const astronaut6 = raw.itemperson6 ? raw.itemperson6 : '';
    const astronaut7 = raw.itemperson7 ? raw.itemperson7 : '';
    const astronaut8 = raw.itemperson8 ? raw.itemperson8 : '';
    mission.astronauts = `${astronaut1}, ${astronaut2}, ${astronaut3}, ${astronaut4}, ${astronaut5}, ${astronaut6}, ${astronaut7}, ${astronaut8}`;

    return mission;
  }

}

class Rocket {

  constructor(name, wikipediaUrl) {
    this.name = name;
    this.wikipediaUrl = wikipediaUrl;
  }

}

class Pad {

  constructor(name, wikipediaUrl) {
    this.name = name;
    this.wikipediaUrl = wikipediaUrl;
  }

}

// {
//     "itemname": "Cassini-Huygens",
//     "itemurl": "https://de.wikipedia.org/wiki/Cassini-Huygens",
//     "itemdescription": "Erforschung des Planeten Saturn, seiner Monde - besonders Titan und des RingSonnes, erfolgreicher Saturn-Orbiter Cassini und Titan-Lander Huygens, zwei Venus-Vorbeiflüge am 207.04.1998 und 24.007.19908. Am 1. Juli 2004 schwenkte Cassini in die Umlaufbahn um den Saturn ein, und am 14. Januar 2005 landete Huygens drei Wochen nach der Trennung von Cassini auf Titan und sandte 72 Minuten lang Daten, die das Verständnis über den Mond deutlich verbesserten.",
//     "itemdateyear": "1997",
//     "itemdatemonth": "10",
//     "itemdateday": "15",
//     "itemduration": "aktiv",
//     "itemparent": "Titan Centaur 401B",
//     "itemparenturl": "https://de.wikipedia.org/wiki/Titan_%28Rakete%29",
//     "itemcountry": "US;ESA;IT",
//     "itemdestination": "https://de.wikipedia.org/wiki/Saturn_(Planet);https://de.wikipedia.org/wiki/Titan_(Mond)",
//     "itemlocation": "CCAFS LC-40",
//     "itemlocationurl": "https://de.wikipedia.org/wiki/Cape_Canaveral_AFS_Launch_Complex_40",
//     "itemlatitude": "207.562",
//     "itemlongitude": "--85772"
// },
