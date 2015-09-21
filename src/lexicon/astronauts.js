import {default as People, Person} from './people';
import PeopleComponent from '../components/people';

export default class Astronauts extends People {
  
  static componentWithData(onDone) {
    let astronomers = new Astronauts();
    astronomers.load(() => {
      const groups = astronomers.astronautsOnly().groupByFirstLetter();
      const component = <PeopleComponent groupedPeople={groups} />;
      onDone(component);
    });    
  }
  
  astronautsOnly() {
    this.people = this.people.filter(person => person.type == Person.ASTRONAUTS);
    return this;
  }
  
}