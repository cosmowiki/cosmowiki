import React from 'react';
import SpacewalksComponent from '../components/spacewalks';

export default class Spacewalks {

  static componentWithData(spacewalks) {
    return <SpacewalksComponent spacewalks={spacewalks} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Spacewalk.fromRawData(raw))
  }

}

class Spacewalk {

  static fromRawData(raw) {
    const spacewalk = new Spacewalk();

    spacewalk.index = raw.itemindex;
    spacewalk.name = raw.itemname;
    spacewalk.wikipediaUrl = raw.itemurl;
    spacewalk.mission1Name = raw.itemname2;
    spacewalk.mission1Url = raw.itemurl2;
    spacewalk.mission2Name = raw.itemname3;
    spacewalk.mission2Url = raw.itemurl3;
    const startyear = raw.itemdateyear;
    const startmonth = raw.itemdatemonth ? `${raw.itemdatemonth}.` : '';
    const startday = raw.itemdateday ? `${raw.itemdateday}.` : '';
    spacewalk.startDate = `${startday}${startmonth}${startyear}`;
    spacewalk.startTime = raw.itemtime;
    const endyear = raw.itemdate2year ? `${raw.itemdate2year}`: '';
    const endmonth = raw.itemdate2month ? `${raw.itemdate2month}.` : '';
    const endday = raw.itemdate2day ? `${raw.itemdate2day}.` : '';
    spacewalk.endDate = `${endday}${endmonth}${endyear}`;
    spacewalk.endTime = raw.itemtime2;
    spacewalk.duration = raw.itemduration;
    spacewalk.country = raw.itemcountry;
    spacewalk.status = raw.itemstatus ? raw.itemstatus : '-';
    spacewalk.operator = raw.itemoperator ? raw.itemoperator : '';
    spacewalk.astronaut1 = raw.itemperson ? raw.itemperson : '';
    spacewalk.countSpacewalks1 = raw.itempersoncount ? raw.itempersoncount : '';
    spacewalk.totalSpacewalks1 = raw.itempersontotal ? raw.itempersontotal : '';
    spacewalk.astronaut2 = raw.itemperson2 ? raw.itemperson2 : '';
    spacewalk.countSpacewalks2 = raw.itemperson2count ? raw.itemperson2count : '';
    spacewalk.totalSpacewalks2 = raw.itemperson2total ? raw.itemperson2total : '';
    spacewalk.astronaut3 = raw.itemperson3 ? raw.itemperson3 : '';
    spacewalk.countSpacewalks3 = raw.itemperson3count ? raw.itemperson3count : '';
    spacewalk.totalSpacewalks3 = raw.itemperson3total ? raw.itemperson3total : '';
    spacewalk.astronaut4 = raw.itemperson4 ? raw.itemperson4 : '';
    spacewalk.astronaut5 = raw.itemperson5 ? raw.itemperson5 : '';
    spacewalk.astronaut6 = raw.itemperson6 ? raw.itemperson6 : '';
    spacewalk.astronaut7 = raw.itemperson7 ? raw.itemperson7 : '';
    spacewalk.astronaut8 = raw.itemperson8 ? raw.itemperson8 : '';

    return spacewalk;
  }

}

// {
//     "itemindex": 11,
//     "itemname": "Sojus 4 - Sojus 5 - Umstieg",
//     "itemurl": "https://de.wikipedia.org/wiki/Sojus_5",
//     "itemname2": "Sojus 4",
//     "itemurl2": "https://de.wikipedia.org/wiki/Sojus_4",
//     "itemname3": "Sojus 5",
//     "itemurl3": "https://de.wikipedia.org/wiki/Sojus_5",
//     "itemdescription": "Erste Außenbordtätigkeit von 2 Personen; erstes Umsteigen von einem Raumschiff in ein anderes (von Sojus 5 nach Sojus 4)",
//     "itemdateyear": 1969,
//     "itemdatemonth": "01",
//     "itemdateday": "16",
//     "itemtime": "12:43:00",
//     "itemdate2year": 1969,
//     "itemdate2month": "01",
//     "itemdate2day": "16",
//     "itemtime2": "13:15:00",
//     "itemduration": "00:32:00 h",
//     "itemperson": "Jewgeni Chrunow",
//     "itempersoncount": 1,
//     "itempersontotal": 1,
//     "itemperson2": "Alexej Jelissejew",
//     "itemperson2count": 1,
//     "itemperson2total": 1,
//     "itemtags": "Sojus"
// },
