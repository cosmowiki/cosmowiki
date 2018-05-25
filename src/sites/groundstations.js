import React from 'react';
import GroundstationsComponent from '../components/groundstations';

export default class Groundstations {
  static componentWithData(_, appUrl) {
    return <GroundstationsComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
