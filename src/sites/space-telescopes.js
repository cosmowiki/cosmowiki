import React from 'react';
import SpaceTelescopesComponent from '../components/space-telescopes';

export default class SpaceTelescopes {

  static componentWithData(telescopes) {
    return <SpaceTelescopesComponent telescopes={telescopes} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Telescope.fromRawData(raw))
  }

}

class Telescope {

  static fromRawData(raw) {
    const station = new Telescope();
    station.name = raw.itemname;
    return station;
  }
}
