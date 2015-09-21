import {default as People, Person} from './people';
import PeopleComponent from '../components/people';

export default class Astronomers extends People {
  
  static componentWithData(onDone) {
    let astronomers = new Astronomers();
    astronomers.load(() => {
      const groups = astronomers.astronomersOnly().groupByFirstLetter();
      const component = <PeopleComponent groupedPeople={groups} />;
      onDone(component);
    });    
  }
  
  astronomersOnly() {
    this.people = this.people.filter(person => person.type == Person.ASTRONOMER);
    return this;
  }
  
}