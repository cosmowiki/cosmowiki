import React from 'react';
import ObservatoriesComponent from '../components/observatories';

export default class Observatories {
  static componentWithData(_, appUrl) {
    return <ObservatoriesComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
