import React from 'react';
import SolarSystemComponent from '../components/solar-system';

export default class SolarSystem {
  static componentWithData(_, appUrl) {
    return <SolarSystemComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
