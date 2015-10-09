import React from 'react';
import AboutComponent from '../components/about';

export default class About {
  static componentWithData(_, appUrl) {
    return <AboutComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
