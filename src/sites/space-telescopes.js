import React from 'react';
import SpaceTelescopesComponent from '../components/space-telescopes';

export default class SpaceTelescopes {

  static componentWithData(stations) {
    return <SpaceTelescopesComponent telescopes={stations} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => SpaceStation.fromRawData(raw))
  }

}

class SpaceStation {

  static fromRawData(raw) {
  }
}
