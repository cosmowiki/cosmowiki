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
    //"chronicley": "3114 v. Chr.",
    //"chroniclem": "08",
    //"chronicled": "11",
    //"chronicleloc": "Mittelamerika",
    //"chronicleevent": "Einführung des Kalenders der Maya (Datum des Kalenderanfangs)",
    //"chroniclelink": "https://de.wikipedia.org/wiki/Geschichte_der_Astronomie",
    //"type": 1,
    //"tags": "Kalender, Maya"
    const item = new Event();
    const year = raw.chronicley;
    const month = raw.chroniclem ? `${raw.chroniclem}.` : '';
    const day = raw.chronicled ? `${raw.chronicled}.` : '';
    item.readableDate = `${day}${month}${year}`;
    item.location = raw.chronicleloc;
    item.event = raw.chronicleevent; // deprecated use `name` instead
    item.name = item.event;
    item.wikipediaUrl = raw.chroniclelink;
    //item.tags = raw.tags.split(',');
    return item;
  }
  
}
