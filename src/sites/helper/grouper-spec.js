import assert from 'assert';
import {
  assertThat, hasProperty
} from 'hamjest';
import {Person} from '../people';
import Grouper from './grouper';

describe('groups objects by name', function() {

  it('a group for each first letter', function() {
    const people = [
      new Person({name: 'A'}),
      new Person({name: 'B'})
    ];

    const grouped = new Grouper(people).byName();

    assert.equal(Object.keys(grouped).length, 2);
  });

  it('independent of the case (upper or lower case)', function() {
    const people = [
      new Person({name: 'A'}),
      new Person({name: 'a'}),
      new Person({name: 'B'}),
      new Person({name: 'B'}),
      new Person({name: 'b'})
    ];

    const grouped = new Grouper(people).byName();

    assert.deepEqual(Object.keys(grouped), ['A', 'B']);
  });

  it('ensure using a string of the name (which provides `toString()`)', function() {
    const objects = [
      {name: {toString() {return 'A'}}} 
    ];
    const grouped = new Grouper(objects).byName();
    assertThat(grouped, hasProperty('A'));
  });
  
});