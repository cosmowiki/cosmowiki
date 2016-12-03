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
    station.name = raw.stationname;
    station.wikipediaUrl = raw.stationlink;
    station.imageUrl = raw.stationimglink;
    station.imageSrc = raw.stationimgsrc;
    station.imageLicence = raw.stationimglicence;
    station.operator = raw.stationoperator;

    const launchyear = raw.stationlaunchy ? `${raw.stationlaunchy}` : '';
    const launchmonth = raw.stationlaunchm ? `${raw.stationlaunchm}.` : '';
    const launchday = raw.stationlaunchd ? `${raw.stationlaunchd}.` : '';
    station.launchDate = `${launchday}${launchmonth}${launchyear}`;
    station.daysInOrbit = raw.stationdaysinorbit;
    const reenteryear = raw.stationreentery ? `${raw.stationreentery}` : '';
    const reentermonth = raw.stationreenterm ? `${raw.stationreenterm}.` : '';
    const reenterday = raw.stationreenterd ? `${raw.stationreenterd}.` : '';
    station.reenterDate = `${reenterday}${reentermonth}${reenteryear}`;
    station.rocket = Rocket.fromRawData(raw);
    station.pad = Pad.fromRawData(raw);
    station.crewSize = raw.stationcrewsize;
    station.daysOccupied = raw.stationdaysoccupied;
    station.visitors = raw.stationvisitors;
    station.crews = raw.stationcrews;
    station.mannedDocks = raw.stationmanneddocks;
    station.unmannedDocks = raw.stationunmanneddocks;
    station.apo = raw.stationapo;
    station.peri = raw.stationperi;
    station.inclination = raw.stationinclination;
    station.mass = raw.stationmass;
    station.pressVol = raw.stationpressvol;

    return station;
  }

}

class Rocket {

  static fromRawData(raw) {
    const rocket = new Rocket();

    rocket.name = raw.stationrocket;
    rocket.wikipediaUrl = raw.stationrocketlink;

    return rocket;
  }

}

class Pad {

  static fromRawData(raw) {
    const pad = new Pad();

    pad.name = raw.stationlaunchpad;
    pad.wikipediaUrl = raw.stationlaunchpadlink;

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
