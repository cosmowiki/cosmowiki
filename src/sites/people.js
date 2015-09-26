import React from 'react';
import fs from 'fs';
import PeopleComponent from '../components/people';
import {loadRemoteFile} from '../_external-deps/http-get';

export default class People {
  
  static fromRawData(rawData) {
    return rawData.map(raw => Person.fromRawData(raw))
  }
  
  static componentWithData(people) {
    const groups = People.groupByFirstLetter(people);
    return <PeopleComponent groupedPeople={groups} />;
  }

  static groupByFirstLetter(people) {
    const groupedPeople = People.groupedPeople(people);
    return Object.keys(groupedPeople)
      .map(key => groupedPeople[key]);
  }
  
  static groupedPeople(people) {
    let grouped = {};
    people
      .map(({name}) => name[0].toUpperCase())
      .filter(firstLetter => !grouped[firstLetter])
      .forEach(firstLetter => grouped[firstLetter] = {
        key: firstLetter,
        people: []
      });
    
    people.forEach(person => {
      const key = person.name[0].toUpperCase();
      grouped[key].people.push(person);
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
Person.ASTRONAUTS = 2;
