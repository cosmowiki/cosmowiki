import React from 'react';

export class Summary extends React.Component {
  constructor() {
    super();
    this.state = {isOpen: true};
  }
  render() {
    const isOpen = this.state.isOpen;
    const toggle = () => {
      this.setState({isOpen: !isOpen});
    };
    const switchClassName = isOpen ? "expanded" : "collapsed";
    const containerClassName = isOpen ? "visible" : "minimized";
    return (
      <div id="summary" className="pure-u-1 left">
        <a id="summaryToggleSwitch" className={switchClassName} title="Artikel anzeigen / schließen" onClick={toggle}/>
        <div id="summaryContainer" className={containerClassName}>
          {this.props.children}
        </div>
        {isOpen ? null : <div id="summaryShade" /> }
      </div>
    );
  }
}
