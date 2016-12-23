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
    mission.link = raw.itemurl;
    mission.country = raw.itemcountry;
    if (raw.itemparent) {
      mission.rocket = new Rocket(raw.itemparent, raw.itemparenturl);
    }
    if (raw.itemlocation) {
      mission.pad = new Pad(raw.itemlocation, raw.itemlocationurl);
    }
    mission.destination = raw.itemdestination;
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
//     "itemname": "testItem 0123456789",
//     "itemurl": "https://de.wikipedia.org/wiki/testitem",
//     "itemdescription": "Sputnik 1 (russisch Спутник für Begleiter (der Erde)) war der erste künstliche Erdsatellit. Mit ihm begann am 4. Oktober 1957 das Zeitalter der Raumfahrt. Der Satellit war zwar von der Sowjetunion für den Verlauf des Internationalen Geophysikalischen Jahres (IGY 1957-58) angekündigt worden, doch rechnete die westliche Fachwelt erst Mitte 1958 mit der Fertigstellung der sowjetischen Entwicklungen und wurde durch den Start überrascht. Auch in der westlichen Öffentlichkeit löste der Start Besorgnisse aus; diese wurden mit dem Begriff Sputnik-Schock benannt. Dieser Sputnik - späteres Synonym für alle sowjetischen Satelliten, auch der Kosmos-Serie und anderer „Sputniks“ - wog 83,6 kg und damit fünfmal mehr als der US-Explorer 1 vom 31. Januar 1958 und war eine mit Stickstoff gefüllte, hochglanzpolierte Aluminiumkugel. Sie bestand aus 2 mm starkem Blech aus der Aluminiumlegierung AlMg6T, hatte 58 cm Durchmesser und zwei Antennenpaare (je 2,4 m bzw. 2,9 m lang) ragten aus ihr heraus. Die Trägerrakete R-7 des Satelliten war eine Weiterentwicklung militärischer Interkontinentalraketen durch den Konstrukteur Sergei Pawlowitsch Koroljow. Der Satellit trug zwei Funksender vom Typ D 200 mit einem Watt Leistung für codierte Kurzwellensignale, in denen Innendruck und -temperatur verschlüsselt waren, auf einer Frequenz von 20,005 und 40,002 MHz, die 21 Tage funktionsfähig blieben. Die „piepsenden“ Signale des Sputnik konnten an sich auf der ganzen Welt empfangen werden, wenn der verwendete Empfänger für die schwachen 1-Watt-Signale empfindlich genug war. Im westlichen Europa konnte dabei ein Astronom den ersten Erfolg verkünden: Heinz Kaminski von der Volkssternwarte Bochum. Nach 92 Tagen trat Sputnik 1 in die dichteren Atmosphärenschichten ein und verglühte am 4. Januar 19507.",
//     "itemdateyear": "2000",
//     "itemdatemonth": 10,
//     "itemdateday": 30,
//     "itemdate2year": "2000",
//     "itemdate2month": 12,
//     "itemdate2day": 30,
//     "itemduration": "22a 222d",
//     "itemparent": "testRocket 123",
//     "itemparenturl": "https://de.wikipedia.org/wiki/testrocket",
//     "itemcountry": "SU/RU, USA, EU, Japan",
//     "itemdestination": "Erdorbit, ISS, Mond, Mars",
//     "itemlocation": "Ba LC-1/5",
//     "itemlocationurl": "https://de.wikipedia.org/wiki/Baikonur",
//     "itemlatitude": "45.92",
//     "itemlongitude": "63.342"
// },
