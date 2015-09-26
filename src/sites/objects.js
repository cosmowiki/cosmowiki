import React from 'react';
import ObjectsComponent from '../components/objects';

export default class Objects {
  static componentWithData(_, appUrl) {
    return <ObjectsComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
