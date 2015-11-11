import React from 'react';
import PeopleComponent from '../components/people';

export default class People {
  
  static fromRawData(rawData) {
    return rawData.map(raw => Person.fromRawData(raw))
  }
  
  static componentWithData(people) {
    const groups = new Grouper(people).byName();
    return <PeopleComponent groupedPeople={groups} />;
  }
  
}

export class Grouper {
  
  constructor(objectToGroup) {
    this.objectToGroup = objectToGroup;
  }
  
  byName() {
    const property = 'name';
    const toBeGrouped = this.objectToGroup;
    const grouped = {};
    toBeGrouped.forEach(item => {
      const groupingKey = item[property][0].toUpperCase();
      if (!grouped[groupingKey]) {
        grouped[groupingKey] = {
          key: groupingKey,
          people: []
        };
      }
      grouped[groupingKey].people.push(item);
    });
    return grouped;
  }
}

export class Person {
  
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
    const item = new Person();
    item.name = [raw.personname, raw.personfirstname].join(', ');
    item.wikipediaUrl = raw.personlink;
    item.profession = raw.personprof;
    item.country = raw.personcountry;
    item.description = raw.persondescript;
    
    item.born = [raw.personbornd, raw.personbornm, raw.personborny].filter(v => v).join('.');
    item.died = [raw.persondiedd, raw.persondiedm, raw.persondiedy].filter(v => v).join('.');
    item.type = raw.type;
    
    //item.tags = raw.tags.split(',');
    return item;
  }
  
}
Person.ASTRONOMER = 1;
Person.ASTRONAUT = 2;
Person.ASTRONOMER_AND_ASTRONAUT = 3;
