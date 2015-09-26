import React from 'react';
import HomeComponent from '../components/home';

export default class Home {
  static componentWithData(_, appUrl) {
    return <HomeComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
