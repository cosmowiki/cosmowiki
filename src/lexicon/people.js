import React from 'react';
import PeopleComponent from '../components/people';
import {loadRemoteFile} from '../_external-deps/http-get';

export default class People {
  
  constructor() {
    this.people = [];
  }

  load(onDone) {
    loadFromJsonFile(people => {
      this.people = people;
      onDone();
    });    
  }
  
  static componentWithData(onDone) {
    let people = new People();
    people.load(() => {
      const groups = people.groupByFirstLetter();
      const component = <PeopleComponent groupedPeople={groups} />;
      onDone(component);
    });    
  }

  groupByFirstLetter() {
    const groupedPeople = this.groupedPeople();
    return Object.keys(groupedPeople)
      .map(key => groupedPeople[key]);
  }
  
  groupedPeople() {
    let grouped = {};
    this.people
      .map(({name}) => name[0].toUpperCase())
      .filter(firstLetter => !grouped[firstLetter])
      .forEach(firstLetter => grouped[firstLetter] = {
        key: firstLetter,
        people: []
      });
    
    this.people.forEach(person => {
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

function loadFromJsonFile(onDone, onError) {
  const url = '/data/people.json';
  loadRemoteFile(url, (err, data) => {
    if (err) {
      console.log(`Error loading data from ${url}, ${err}`);
    } else {

      const items = JSON.parse(data).map(raw => Person.fromRawData(raw));
      onDone(items);
    }
  });
}

