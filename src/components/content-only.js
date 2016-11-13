import React from 'react'
import Logo from './logo'

export default class ContentOnlyComponent {
  render() {
    
    const {children, appUrl} = this.props;
    
    return (
      <div id="wrapper" className="pure-g">
        <Logo/>
        {children}
      </div>
    )
  }
}
