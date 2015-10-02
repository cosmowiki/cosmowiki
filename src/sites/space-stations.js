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
    station.name = raw.statname;
    station.wikipediaUrl = raw.statlink;
    station.imageUrl = raw.statimglink;
    station.imageSrc = raw.statimgsrc;
    station.imageLicence = raw.statimglicence;
    station.operator = raw.statoperator;

    station.launchDate = `${raw.statlaunchd}.${raw.statlaunchm}.${raw.statlaunchy}`;
    station.daysInOrbit = raw.statdaysinorbit;
    station.reenterDate = `${raw.statreenterd}.${raw.statreenterm}.${raw.statreentery}`;
    station.rocket = raw.statrocket;
    station.rocketUrl = raw.statrocketlink;
    station.launchPad = raw.statlaunchpad;
    station.launchPadUrl = raw.statlaunchpadlink;
    station.crewSize = raw.statcrewsize;
    station.daysOccupied = raw.statdaysoccupied;
    station.visitors = raw.statvisitors;
    station.crews = raw.statcrews;
    station.mannedDocks = raw.statmanneddocks;
    station.unmannedDocks = raw.statunmanneddocks;
    station.apo = raw.statapo;
    station.peri = raw.statperi;
    station.inclination = raw.statinclination;
    station.mass = raw.statmass;
    station.pressVol = raw.statpressvol;
    
    return station;
  }
  
}

/*
  {
    "id": 1,
    "statname": "Salyut 1",
    "statlink": "https://de.wikipedia.org/wiki/Saljut_1",
    "statimglink": "https://upload.wikimedia.org/wikipedia/commons/8/83/Salyut_1_and_Soyuz_drawing.png",
    "statimgsource": "NASA",
    "statimglic": "gemeinfrei",
    "statoperator": "UdSSR",
    "statlaunchy": "1971",
    "statlaunchm": "04",
    "statlaunchd": "19",
    "statdaysinorbit": 175,
    "statreentery": "1971",
    "statreenterm": "10",
    "statreenterd": "11",
    "statcrewsize": 3,
    "statdaysoccu": 24,
    "statvisitors": 6,
    "statmanvis": 2,
    "statunmanvis": 0,
    "statapo": "222 km",
    "statperi": "200 km",
    "statincli": "51,6°",
    "statmass": "18,425 t",
    "statpressvol": "100 m³",
    "statdescript": "Alle drei Besatzungsmitglieder starben auf dem Rückflug beim Wiedereintritt."
  },

 */