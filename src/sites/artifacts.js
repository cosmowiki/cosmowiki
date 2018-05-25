import React from 'react';
import ArtifactsComponent from '../components/artifacts';

export default class Artifacts {
  static componentWithData(_, appUrl) {
    return <ArtifactsComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
