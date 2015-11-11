import assert from 'assert';
import {
  assertThat
} from 'hamjest';
import People from './people';
import Grouper from './helper/grouper';

describe('people Grouper', function() {
  
  describe('groups people', function() {
    
    it('by name', function() {
      const rawData = [
        {"personname": "A"},
        {"personname": "B"}
      ];
  
      const people = People.fromRawData(rawData);
      const grouped = new Grouper(people).byName();
      
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
      const grouped = new Grouper(people).byName();
      
      assert.deepEqual(Object.keys(grouped), ['A', 'B']);
    });
    
  });
    
});