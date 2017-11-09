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
    const toggleClassName = isOpen ? "expanded" : "collapsed";
    const containerClassName = isOpen ? "visible" : "minimized";
    return (
      <div id="summary" className="module pure-u-1 left">
        <a id="summaryToggle" className={toggleClassName} title="Artikel anzeigen / schließen" onClick={toggle}/>
        <div id="summaryContainer" className={containerClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

//{isOpen ? null : <div id="summaryShade" /> }
