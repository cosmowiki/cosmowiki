import React from 'react';
import HomeComponent from '../components/home';

export default class Home {
  static componentWithData(onDone, appUrl) {
    onDone(<HomeComponent appUrl={appUrl} />);
  }
}
