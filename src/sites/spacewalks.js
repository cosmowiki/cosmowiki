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

    spacewalk.name = raw.itemname;
    spacewalk.wikipediaUrl = raw.itemurl;
    spacewalk.mission1Name = raw.itemname2;
    spacewalk.mission1Url = raw.itemurl2;
    spacewalk.mission2Name = raw.itemname3;
    spacewalk.mission2Url = raw.itemurl3;
    const startyear = raw.itemdateyear;
    const startmonth = raw.itemdatemonth ? `${raw.itemdatemonth}.` : '';
    const startday = raw.itemdateday ? `${raw.itemdateday}.` : '';
    spacewalk.start = `${startday}${startmonth}${startyear}`;
    const endyear = raw.itemdate2year ? `${raw.itemdate2year}`: '';
    const endmonth = raw.itemdate2month ? `${raw.itemdate2month}.` : '';
    const endday = raw.itemdate2day ? `${raw.itemdate2day}.` : '';
    spacewalk.end = `${endday}${endmonth}${endyear}`;
    spacewalk.duration = raw.itemduration;
    spacewalk.country = raw.itemcountry;
    spacewalk.status = raw.itemstatus ? raw.itemstatus : '-';
    spacewalk.operator = raw.itemoperator ? raw.itemoperator : '';
    const astronaut1 = raw.itemperson ? raw.itemperson : '';//better take an array spacewalk.astronauts[]?
    const astronaut2 = raw.itemperson2 ? raw.itemperson2 : '';
    const astronaut3 = raw.itemperson3 ? raw.itemperson3 : '';
    const astronaut4 = raw.itemperson4 ? raw.itemperson4 : '';
    const astronaut5 = raw.itemperson5 ? raw.itemperson5 : '';
    const astronaut6 = raw.itemperson6 ? raw.itemperson6 : '';
    const astronaut7 = raw.itemperson7 ? raw.itemperson7 : '';
    const astronaut8 = raw.itemperson8 ? raw.itemperson8 : '';
    spacewalk.astronauts = `${astronaut1}, ${astronaut2}, ${astronaut3}, ${astronaut4}, ${astronaut5}, ${astronaut6}, ${astronaut7}, ${astronaut8}`;

    return spacewalk;
  }

}
