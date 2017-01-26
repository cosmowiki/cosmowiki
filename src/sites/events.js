import React from 'react';
import ChronicleComponent from '../components/chronicle';

export default class Events {

  static componentWithData(events) {
    return <ChronicleComponent items={events} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Event.fromRawData(raw))
  }

}

class Event {

  static fromRawData(raw) {
    // "itemname": "Einschlag eines Asteroiden in Sibirien",
    // "itemurl": "https://de.wikipedia.org/wiki/Tunguska-Ereignis",
    // "itemdateyear": "1908",
    // "itemdatemonth": 6,
    // "itemdateday": 30,
    // "itemcountry": "Russland",
    // "itemlocation": "Tunguska",
    // "itemlatitude": "60.885833",
    // "itemlongitude": "101.894444",
    // "itemtype": 1
    const item = new Event();
    const year = raw.itemdateyear;
    const month = raw.itemdatemonth ? `${raw.itemdatemonth}.` : '';
    const day = raw.itemdateday ? `${raw.itemdateday}.` : '';
    item.date = `${day}${month}${year}`;
    const town = raw.itemlocation ? `${raw.itemlocation}, ` : '';
    const country = raw.itemcountry ? `${raw.itemcountry}` : '';
    item.place = `${town}${country}`;
    item.name = raw.itemname,
    item.latitude = raw.itemlatitude,
    item.longitude = raw.itemlongitude,
    item.link = raw.itemurl;
    //item.tags = raw.tags.split(',');
    return item;
  }

}
