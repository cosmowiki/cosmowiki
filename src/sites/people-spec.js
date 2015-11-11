import assert from 'assert';
import {
  assertThat
} from 'hamjest';
import People from './people';

describe('people', function() {
  it('are grouped by name', function() {
    const rawData = [
      {"personname": "A"},
      {"personname": "B"}
    ];

    const people = People.fromRawData(rawData);
    const grouped = People.groupedPeople(people);
    
    assert.equal(Object.keys(grouped).length, 2);
  });
});