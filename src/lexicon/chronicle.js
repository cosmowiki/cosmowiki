import ChronicleComponent from '../components/chronicle';

export default class Chronicle {
  
  static componentWithData(onDone) {
    Items.loadFromJsonFile('/data/chronicle.json', (data) => {
      const component = <ChronicleComponent items={data} />;
      onDone(component);
    });    
  }
  
}


import {loadRemoteFile} from '../_external-deps/http-get';
class Items {
  static loadFromJsonFile(url, onDone, onError) {
    loadRemoteFile(url, (err, data) => {
      if (err) {
        console.log(`Error loading data from ${url}, ${err}`);
      } else {

        const items = JSON.parse(data).map(raw => Item.fromRawData(raw));
        onDone(items);
      }
    });
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
