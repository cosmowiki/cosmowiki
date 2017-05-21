import React from 'react';
import {default as People, Person} from './people';

export default class Astronomers extends People {
  
  static fromRawData(rawData) {
    const allPeople = super.fromRawData(rawData);
    return allPeople.filter(person => 
      person.type == Person.ASTRONOMER || person.type == Person.ASTRONOMER_AND_ASTRONAUT
    );
  }
  
}