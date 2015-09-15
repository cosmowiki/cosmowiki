import PeopleComponent from '../components/people';

export default class People {
  
  static componentWithData(onDone) {
    Items.loadFromJsonFile('/data/people.json', (people) => {
      const grouped = new GroupedByFirstLetter(people);
      const component = <PeopleComponent groupedPeople={grouped.groups} />;
      onDone(component);
    });    
  }
  
}

class GroupedByFirstLetter {
  
  constructor(items) {
    this.items = items;
  }
  
  groupedPeople() {
    let grouped = {};
    this.items
      .map(({name}) => name[0].toUpperCase())
      .filter(firstLetter => !grouped[firstLetter])
      .forEach(firstLetter => grouped[firstLetter] = {
        key: firstLetter,
        people: []
      });
    
    this.items.forEach(person => {
      const key = person.name[0].toUpperCase();
      grouped[key].people.push(person);
    });
    return grouped;
  }
  
  get groups() {
    const groupedPeople = this.groupedPeople();
    return Object.keys(groupedPeople)
      .map(key => groupedPeople[key]);
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
    //"personname": "Abbe",
    //"personfirstname": "Cleveland",
    //"personprof": "Astronom, Meteorologe",
    //"personcountry": "USA",
    //"personborny": "1838",
    //"personbornm": "12",
    //"personbornd": "3",
    //"persondiedy": "1916",
    //"persondiedm": "10",
    //"persondiedd": "28",
    //"persondescript": "erster Meteorologe",
    //"personlink": "https://de.wikipedia.org/wiki/Cleveland_Abbe",
    //"type": 1       1-astronomer 2-astronaut 3-both 0-neither
    const item = new Item();
    item.name = [raw.personname, raw.personfirstname].join(', ');
    item.wikipediaUrl = raw.personlink;
    item.profession = raw.personprof;
    item.country = raw.personcountry;
    item.description = raw.persondescript;
    //item.tags = raw.tags.split(',');
    return item;
  }
  
}
