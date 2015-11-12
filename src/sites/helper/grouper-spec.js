import assert from 'assert';
import {
  assertThat
} from 'hamjest';
import {Person} from '../people';
import Grouper from './grouper';

describe('people Grouper', function() {
  
  describe('groups people', function() {
    
    it('by name', function() {
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
    
  });
    
});