import assert from 'assert';
import {
  assertThat
} from 'hamjest';
import People from './people';

describe('people Grouper', function() {
  
  describe('groups people', function() {
    
    it('by name', function() {
      const rawData = [
        {"personname": "A"},
        {"personname": "B"}
      ];
  
      const people = People.fromRawData(rawData);
      const grouped = People.groupedPeople(people);
      
      assert.equal(Object.keys(grouped).length, 2);
    });
    
    it('independent of the case (upper or lower case)', function() {
      const rawData = [
        {"personname": "A"},
        {"personname": "a"},
        {"personname": "B"},
        {"personname": "B"},
        {"personname": "b"}
      ];
  
      const people = People.fromRawData(rawData);
      const grouped = People.groupedPeople(people);
      
      assert.deepEqual(Object.keys(grouped), ['A', 'B']);
    });
    
  });
    
});