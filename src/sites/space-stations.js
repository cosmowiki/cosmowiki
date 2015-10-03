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
    station.rocket = Rocket.fromRawData(raw);
    station.pad = Pad.fromRawData(raw);
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

class Rocket {
  
  static fromRawData(raw) {
    const rocket = new Rocket();
    
    rocket.name = raw.statrocket;
    rocket.wikipediaUrl = raw.statrocketlink;
    
    return rocket;
  }
  
}

class Pad {
  
  static fromRawData(raw) {
    const pad = new Pad();
    
    pad.name = raw.statlaunchpad;
    pad.wikipediaUrl = raw.statlaunchpadlink;
    
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