import React from 'react';
import People from './people';
import Person from './entities/person';
import PeopleComponent from '../components/people';

export default class Astronomers extends People {
  
  static fromRawData(rawData) {
    const allPeople = super.fromRawData(rawData);
    return allPeople.filter(person => 
      person.type == Person.ASTRONOMER || person.type == Person.ASTRONOMER_AND_ASTRONAUT
    );
  }
  
}