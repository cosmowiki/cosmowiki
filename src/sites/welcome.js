import React from 'react';
import WelcomeComponent from '../components/welcome';

export default class Welcome {
  static componentWithData(_, appUrl) {
    return <WelcomeComponent appUrl={appUrl} />;
  }
  static fromRawData() {}
}
