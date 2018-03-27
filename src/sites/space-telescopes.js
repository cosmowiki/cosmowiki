import React from 'react';
import SpaceTelescopesComponent from '../components/space-telescopes';

export default class SpaceTelescopes {

  static componentWithData(telescopes) {
    return <SpaceTelescopesComponent telescopes={telescopes} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Telescope.fromRawData(raw))
  }

}

class Telescope {

  static fromRawData(raw) {
    const telescope = new Telescope();
    telescope.name = raw.itemname;
    telescope.alternativename = raw.itemname2 ? raw.itemname2 : '';
    telescope.wikipediaUrl = raw.itemurl ? raw.itemurl : '';
    telescope.id = raw.itemindex ? raw.itemindex : '';
    telescope.imageSmallUrl = raw.itemimgsmallurl;
    telescope.imageUrl = raw.itemimgurl;
    telescope.imageSrc = raw.itemimgsrc;
    telescope.imageLicence = raw.itemimglicence;
    telescope.imageLicenseUrl = raw.itemimglicenceurl;

    const launchyear = raw.itemdateyear ? raw.itemdateyear : '';
    const launchmonth = raw.itemdatemonth ? `${raw.itemdatemonth}.` : '';
    const launchday = raw.itemdateday ? `${raw.itemdateday}.` : '';
    telescope.launchDate = `${launchday}${launchmonth}${launchyear}`;
    const endyear = raw.itemdate2year ? raw.itemdate2year : '';
    const endmonth = raw.itemdate2month ? `${raw.itemdate2month}.` : '';
    const endday = raw.itemdate2day ? `${raw.itemdate2day}.` : '';
    telescope.endDate = `${endday}${endmonth}${endyear}`;
    telescope.duration = raw.itemtime3 ? raw.itemtime3 : '';
    telescope.status = raw.itemstatus ? raw.itemstatus : '';
    telescope.rocket = Rocket.fromRawData(raw);
    telescope.pad = Pad.fromRawData(raw);
    telescope.status = raw.itemstatus;
    telescope.countries = raw.itemcountry ? raw.itemcountry.split(', ').map(country => country.trim()) : [];
    telescope.operator = raw.itemoperator;
    telescope.purpose = raw.itempurpose;

    return telescope;
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
    "itemname": "Uhuru",
    "itemname2": "SAS-1, Explorer 42 ",
    "itemurl": "https://de.wikipedia.org/wiki/Uhuru_%28Satellit%29",
    "itemid": "1970-107A",
    "itemimgsmallurl": "/img/spacetelescopes/Uhuru_sm.gif",
    "itemimgurl": "/img/spacetelescopes/Uhuru_lg.gif",
    "itemimgsrc": "NASA",
    "itemimglicence": "gemeinfrei",
    "itemdateyear": "1970",
    "itemdatemonth": "12",
    "itemdateday": "12",
    "itemdate2year": 1973,
    "itemdate2month": "03",
    "itemdate3year": 1979,
    "itemdate3month": "04",
    "itemdate3day": "05",
    "itemduration": "2a 78d",
    "itemstatus": "beendet",
    "itemcountry": "USA",
    "itemoperator": "NASA",
    "itempurpose": "Röntgenstrahlung"
},
*/
