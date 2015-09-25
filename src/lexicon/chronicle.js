import React from 'react';
import ChronicleComponent from '../components/chronicle';
import fs from 'fs';

export default class Chronicle {
  
  static componentWithData(onDone) {
    const data = JSON.parse(fs.readFileSync('./data/chronicle.json'));
    const items = data.map(raw => Item.fromRawData(raw));
    const component = <ChronicleComponent items={items} />;
    onDone(component);
  }
  
}

class Item {
  
  static fromRawData(raw) {
    //"chronicley": "3114 v. Chr.",
    //"chroniclem": "08",
    //"chronicled": "11",
    //"chronicleloc": "Mittelamerika",
    //"chronicleevent": "Einführung des Kalenders der Maya (Datum des Kalenderanfangs)",
    //"chroniclelink": "https://de.wikipedia.org/wiki/Geschichte_der_Astronomie",
    //"type": 1,
    //"tags": "Kalender, Maya"
    const item = new Item();
    const year = raw.chronicley;
    const month = raw.chroniclem ? `${raw.chroniclem}.` : '';
    const day = raw.chronicled ? `${raw.chronicled}.` : '';
    item.readableDate = `${day}${month}${year}`;
    item.location = raw.chronicleloc;
    item.event = raw.chronicleevent;
    item.wikipediaUrl = raw.chroniclelink;
    //item.tags = raw.tags.split(',');
    return item;
  }
  
}
