import React from 'react';
import LaunchpadsComponent from '../components/launchpads';

export default class Launchpads {
  static componentWithData(_, appUrl) {
    return <LaunchpadsComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
