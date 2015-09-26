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
    station.operator = raw.statoperator;

    station.launchDate = `${raw.statlaunchd}. ${raw.statlaunchm}. ${raw.statlaunchy}`;
    station.daysInOrbit = raw.statdaysinorbit;
    station.reenterDate = `${raw.statreentery}. ${raw.statreenterm}. ${raw.statreenterd}`;
    station.crewSize = raw.statcrewsize;
    station.daysOcuu = raw.statdaysoccu;
    station.visitors = raw.statvisitors;
    station.manVis = raw.statmanvis;
    station.unmanVis = raw.statunmanvis;
    station.apo = raw.statapo;
    station.peri = raw.statperi;
    station.incli = raw.statincli;
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