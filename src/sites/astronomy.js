import React from 'react';
import AstronomyComponent from '../components/astronomy';

export default class Astronomy {
  static componentWithData(_, appUrl) {
    return <AstronomyComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
