import React from 'react';
import SpaceflightComponent from '../components/spaceflight';

export default class Spaceflight {
  static componentWithData(_, appUrl) {
    return <SpaceflightComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
