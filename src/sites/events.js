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
    // "itemevent": "Einführung des Kalenders der Maya (Datum des Kalenderanfangs)",
    // "itemurl": "https://de.wikipedia.org/wiki/Geschichte_der_Astronomie",
    // "itemdateyear": "3114 v. Chr.",
    // "itemdatemonth": 8,
    // "itemdateday": 11,
    // "itemlocation": "Mittelamerika",
    // "itemtype": 1
    const item = new Event();
    const year = raw.itemdateyear;
    const month = raw.itemdatemonth ? `${raw.itemdatemonth}.` : '';
    const day = raw.itemdateday ? `${raw.itemdateday}.` : '';
    item.readableDate = `${day}${month}${year}`;
    item.location = raw.itemlocation;
    item.event = raw.itemevent; // deprecated use `name` instead
    item.name = item.event;
    item.wikipediaUrl = raw.itemurl;
    //item.tags = raw.tags.split(',');
    return item;
  }

}
