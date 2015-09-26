import React from 'react';
import ConstellationsComponent from '../components/constellations';

export default class Constellations {
  static componentWithData(_, appUrl) {
    return <ConstellationsComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
