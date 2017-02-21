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
    station.imageSmallUrl = raw.itemimgsmallurl;
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
    "itemname": "Saljut 1",
    "itemname2": "DOS 1",
    "itemurl": "https://de.wikipedia.org/wiki/Saljut_1",
    "itemdescription": "Saljut 1 war die erste Raumstation der Welt. Gebaut und entwickelt wurde sie in der Sowjetunion. Abgeleitet aus dem Almas-Programm und unter Zeitdruck gefertigt bestand die Station im Wesentlichen aus einer Almas-Hülle und Baugruppen des Sojus-Raumschiffes. Damit war sie die Grundlage für den zivilen Raumstationstyp DOS, welcher sich mit dem Fortschreiten des Programms immer deutlicher von den Almas-Stationen unterschied. Die Gesamtlänge der Stationen betrug knapp 16 Meter, die Masse rund 18,9 Tonnen. Ursprünglich sollte die Raumstation Sarja (Заря) heißen, dieser Name wurde jedoch kurz vor dem Start geändert, um Verwechslungen mit dem Rufzeichen der Bodenstation zu vermeiden. Bemannt und in Betrieb genommen werden sollte die Station von den drei Besatzungsmitgliedern der Mission Sojus 10, welche am 22. April von Baikonur aus startete. Sojus 10 koppelte am 24. April an die Raumstation an, konnte aber weder eine druckdichte noch eine elektrische Verbindung zu Saljut 1 herstellen. Die Station konnte nicht betreten werden und die Besatzung von Sojus 10 musste zur Erde zurückkehren. Das Raumschiff der nachfolgenden Mission, Sojus 11, erhielt einen verstärkten Kopplungsadapter, um einen erneuten Defekt zu vermeiden. Gestartet wurde am 6. Juni 1971 und bereits einen Tag später konnte eine erfolgreiche Kopplung an Saljut 1 erfolgen. Nach 23 Tagen an Bord der Station koppelte die Besatzung am 29. Juni 1971 mit ihrem Sojus-Raumschiff ab und bereitete die Landung vor. Bei der Absprengung des Orbitalmoduls öffnete sich ein Luftventil unplanmäßig und die Landekapsel verlor während des Wiedereintrittes ihre Atmosphäre, was den Tod aller drei Raumfahrer zur Folge hatte. Saljut 1 war ursprünglich für eine Nutzungsdauer von drei Monaten ausgelegt. Nach 175 Tagen im Orbit trat Saljut 1 daraufhin planmäßig am 11. Oktober über dem Pazifik in die Erdatmosphäre ein und verglühte.",
    "itemimgsmallurl": "/img/spacestations/Salyut_1_sm.png",
    "itemimgurl": "/img/spacestations/Salyut_1_lg.png",
    "itemimgsrc": "NASA",
    "itemimglicence": "gemeinfrei",
    "itemdateyear": "1971",
    "itemdatemonth": 4,
    "itemdateday": 19,
    "itemdate3year": "1971",
    "itemdate3month": 10,
    "itemdate3day": 11,
    "itemduration": "175 d",
    "itemparent": "Proton-K",
    "itemparenturl": "https://de.wikipedia.org/wiki/Proton_%28Rakete%29",
    "itemoperator": "UdSSR",
    "itemlocation": "Ba LC-81/24",
    "itemlocationurl": "https://de.wikipedia.org/wiki/Baikonur",
    "itemfarthest": "222 km",
    "itemnearest": "200 km",
    "iteminclination": "51,6°",
    "itemmass": "18.425 t",
    "itemvolume": "100 m³",
    "itemproperty": 3,
    "itemproperty2": 24,
    "itemproperty3": 6,
    "itemproperty4": 1,
    "itemproperty5": 2,
    "itemproperty6": 0
},

 */
