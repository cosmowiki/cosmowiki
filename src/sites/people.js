import React from 'react';
import PeopleComponent from '../components/people';
import Grouper from './helper/grouper';
import Person from './entities/person';

export default class People {
  
  static fromRawData(rawData) {
    return rawData.map(raw => Person.fromRawData(raw))
  }
  
  static componentWithData(people) {
    const groups = new Grouper(people).byName();
    return <PeopleComponent groupedPeople={groups} />;
  }
  
}
