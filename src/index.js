import React from 'react';
import Navigation from './components/navigation'

class Page {
  render() {
    return (
      <div>
        <Navigation />
        Hello cosmowiki
      </div>
    )
  }
}

React.render(<Page/>, document.getElementById('app'));
