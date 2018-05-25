import React from 'react';
import PlacesComponent from '../components/places';

export default class Places {
  static componentWithData(_, appUrl) {
    return <PlacesComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
