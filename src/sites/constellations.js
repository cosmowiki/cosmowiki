import React from 'react';
import ConstellationsComponent from '../components/constellations';
import Constellation from './entities/constellation';

export default class Constellations {
  
  static componentWithData(constellations) {
    return <ConstellationsComponent constellations={constellations} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Constellation.fromRawData(raw))
  }
  
}
