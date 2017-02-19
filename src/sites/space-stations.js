import React from 'react';
import SpaceStationsComponent from '../components/space-stations';

export default class SpaceStations {

  static componentWithData(stations) {
    return <SpaceStationsComponent spaceStations={stations} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => SpaceStation.fromRawData(raw))
  }

}

class SpaceStation {

  static fromRawData(raw) {
    const station = new SpaceStation();
    station.name = raw.itemname;
    station.alternativename = raw.itemname2;
    station.wikipediaUrl = raw.itemurl;
    station.imageSmallUrl = raw.itemurl2;
    station.imageUrl = raw.itemimgurl;
    station.imageSrc = raw.itemimgsrc;
    station.imageLicence = raw.itemimglicence;
    station.operator = raw.itemoperator;

    const launchyear = raw.itemdateyear ? raw.itemdateyear : '';
    const launchmonth = raw.itemdatemonth ? `${raw.itemdatemonth}.` : '';
    const launchday = raw.itemdateday ? `${raw.itemdateday}.` : '';
    station.launchDate = `${launchday}${launchmonth}${launchyear}`;
    station.daysInOrbit = raw.itemdaysinorbit;
    const reenteryear = raw.itemdate3year ? raw.itemdate3year : '';
    const reentermonth = raw.itemdate3month ? `${raw.itemdate3month}.` : '';
    const reenterday = raw.itemdate3day ? `${raw.itemdate3day}.` : '';
    station.reenterDate = `${reenterday}${reentermonth}${reenteryear}`;
    station.duration = raw.itemduration ? raw.itemduration : '';
    station.rocket = Rocket.fromRawData(raw);
    station.pad = Pad.fromRawData(raw);
    station.crewSize = raw.itemproperty;
    station.daysOccupied = raw.itemproperty2;
    station.visitors = raw.itemproperty3;
    station.crews = raw.itemproperty4;
    station.mannedDocks = raw.itemproperty5;
    station.unmannedDocks = raw.itemproperty6;
    station.apo = raw.itemnearest;
    station.peri = raw.itemfarthest;
    station.inclination = raw.iteminclination;
    station.mass = raw.itemmass;
    station.pressVol = raw.itemvolume;

    return station;
  }

}

class Rocket {

  static fromRawData(raw) {
    const rocket = new Rocket();

    rocket.name = raw.itemparent;
    rocket.wikipediaUrl = raw.itemparenturl;

    return rocket;
  }

}

class Pad {

  static fromRawData(raw) {
    const pad = new Pad();

    pad.name = raw.itemlocation;
    pad.wikipediaUrl = raw.itemlocationurl;

    return pad;
  }

}
/*
  {
    "id": 1,
    "statname": "Saljut 1 (DOS 1)",
    "statlink": "https://de.wikipedia.org/wiki/Saljut_1",
    "statimglink": "https://upload.wikimedia.org/wikipedia/commons/8/83/Salyut_1_and_Soyuz_drawing.png",
    "statimgsrc": "NASA",
    "statimglicence": "gemeinfrei",
    "statoperator": "UdSSR",
    "statlaunchy": "1971",
    "statlaunchm": "04",
    "statlaunchd": "19",
    "statrocket": "Proton-K",
    "statrocketlink": "https://de.wikipedia.org/wiki/Proton_%28Rakete%29",
    "statlaunchpad": "Ba LC-81/24",
    "statlaunchpadlink": "https://de.wikipedia.org/wiki/Baikonur",
    "statdaysinorbit": 175,
    "statreentery": "1971",
    "statreenterm": "10",
    "statreenterd": "11",
    "statcrewsize": 3,
    "statdaysoccupied": 24,
    "statvisitors": 6,
    "statcrews": 1,
    "statmanneddocks": 2,
    "statunmanneddocks": 0,
    "statapo": "222 km",
    "statperi": "200 km",
    "statincli": "51,6°",
    "statmass": "18,425 t",
    "statpressvol": "100 m³",
    "statdescript": "Alle drei Besatzungsmitglieder starben auf dem Rückflug beim Wiedereintritt.",
    "tags": "Sojus 10, Sojus 11, Dobrowolski, Pazajew, Wolkow"
  },

 */
