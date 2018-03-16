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
    station.imageLicenseUrl = raw.itemimglicenceurl;
    station.operators = raw.itemoperator ? raw.itemoperator.split(', ').map(operator => operator.trim()) : [];

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
    station.status = raw.itemstatus ? raw.itemstatus : '';
    station.rocket = Rocket.fromRawData(raw);
    station.pad = Pad.fromRawData(raw);
    station.crewSize = raw.itemCrewSize;
    station.daysOccupied = raw.itemDaysOccupied;
    station.visitors = raw.itemVisitors;
    station.crews = raw.itemCrews;
    station.mannedDocks = raw.itemmannedDocks;
    station.unmannedDocks = raw.itemproperty6;
    station.apo = raw.itemnearest;
    station.peri = raw.itemfarthest;
    station.inclination = raw.iteminclination;
    station.mass = raw.itemmass;
    station.volume = raw.itemvolume;

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
    "itemname": "Mir",
    "itemurl": "https://de.wikipedia.org/wiki/Mir_%28Raumstation%29",
    "itemdescription": "Die Mir (russisch Мир ‚Frieden‘ oder ‚Welt‘) war eine von der Sowjetunion erbaute, bemannte Raumstation, die von 1986 bis zu ihrem kontrollierten Absturz 2001 die Erde umkreiste. Nachdem die Mir in den ersten Jahren nur von der Sowjetunion und den mit ihr verbundenen Staaten genutzt wurde, betrieb sie die russische Raumfahrtagentur Roskosmos nach dem politischen Umbruch im Ostblock weiter und öffnete sie auch für westliche Staaten und deren Raumfahrtagenturen. Die Raumstation Mir war zu ihrer Zeit das größte künstliche Objekt im Erdorbit und gilt – mit dem Sputnik-Satelliten 1957 und Juri Gagarins Erstflug 1961 – als größter Erfolg der sowjetischen Raumfahrt. Die Mir war die erste auf einen dauerhaften und wissenschaftlichen Betrieb ausgelegte Raumstation. Der modulare Aufbau der Mir wurde bei der später gebauten Internationalen Raumstation (ISS) übernommen. Ihr Modul Swesda ist eine modifizierte Version des Basisblocks der Mir. Dem Hauptmodul wurden sechs weitere Module hinzugefügt. Alle Module wurden vom kasachischen Baikonur aus mit Proton-Raketen gestartet, bis auf das Andockmodul für das Space Shuttle. Es kam mit der US-amerikanischen Fähre Atlantis vom Kennedy Space Center aus ins All. Die einzelnen Module waren: Die Wissenschaftsmodule Kwant, Kwant 2, Kristall (Kwant 3), Spektr, das Andockmodul für das Space Shuttle (Shuttle Docking Module) sowie das Forschungsmodul Priroda. Die Raumstation wurde insgesamt von 96 Kosmonauten besucht. 19 von ihnen betraten die Station zweimal, Alexander Wiktorenko viermal und Anatoli Solowjow fünfmal. Die längste Zeit an Bord verbrachte der russische Kosmonaut Waleri Poljakow: Er arbeitete 679 Tage an Bord der Mir. Von Januar 1994 bis Mai 1995 stellte er mit 438 Tagen im All einen neuen Rekord für die menschliche Verweildauer im All im Rahmen einer Mission auf. Der lange Zeitraum wurde auch als Test für einen möglichen bemannten Marsflug gewertet – der Flug zum roten Planeten dauert etwa ein Jahr. Am 20. November 1998 startete mit Sarja das erste Modul der Internationalen Raumstation. 1999 gründete sich in den Niederlanden die MirCorp, ein Unternehmen, das versuchte, das Überleben der Mir über private Mittel zu sichern. Zu den Überlegungen gehörten auch Nutzungen für den Weltraumtourismus. Am 23. Oktober 2000 kam das offizielle Aus. Der russische Vorschlag, Teile der Mir zum Aufbau der ISS zu verwenden, wurde von US-amerikanischer Seite – trotz der damit verbundenen Einsparungen – verworfen. In den frühen Morgenstunden des 23. März 2001 wurde die Mir mit drei Bremsschüben des letzten Progress-Raumfrachters zum kontrollierten Wiedereintritt in die Atmosphäre gebracht. Mehr als 1500 (ca. 40 Tonnen) nicht verglühte Trümmer der Station stürzten um 6:57 Uhr südöstlich der Fidschi-Insel in den Pazifischen Ozean. In ihrer 15-jährigen Geschichte umrundete die ursprünglich nur für eine Lebensdauer von sieben Jahren ausgelegte Station die Erde 86.325 Mal in einer Höhe von 390 Kilometern über der Erdoberfläche.",
    "itemid": "1986-017A",
    "itemimgsmallurl": "/img/spacestations/Mir_sm.jpg",
    "itemimgurl": "/img/spacestations/Mir_lg.jpg",
    "itemimgsrc": "NASA",
    "itemimglicence": "gemeinfrei",
    "itemdateyear": "1986",
    "itemdatemonth": "02",
    "itemdateday": "19",
    "itemdate3year": "2001",
    "itemdate3month": "03",
    "itemdate3day": "23",
    "itemduration": "15 a 32 d",
    "itemparent": "Proton K/D-2",
    "itemparenturl": "https://de.wikipedia.org/wiki/Proton_%28Rakete%29",
    "itemoperator": "UdSSR / Russland",
    "itemlocation": "Ba LC-200/39",
    "itemlocationurl": "https://de.wikipedia.org/wiki/Baikonur",
    "itemfarthest": "374 km",
    "itemnearest": "354 km",
    "iteminclination": "51,6°",
    "itemmass": "129.700 t",
    "itemvolume": "350 m³",
    "itemproperty": 3,
    "itemproperty2": 4594,
    "itemproperty3": 125,
    "itemproperty4": 28,
    "itemproperty5": 39,
    "itemproperty6": 68
},
 */
