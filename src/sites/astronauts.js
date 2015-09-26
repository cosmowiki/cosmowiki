import React from 'react';
import {default as People, Person} from './people';
import PeopleComponent from '../components/people';

export default class Astronauts extends People {
  
  static fromRawData(rawData) {
    const allPeople = super.fromRawData(rawData);
    return allPeople.filter(person => person.type == Person.ASTRONAUTS);
  }
  
}