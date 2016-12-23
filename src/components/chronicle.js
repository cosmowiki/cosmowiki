import React from 'react';
import Notes from './notes';
import VcardComponent from './vcard';

export default class ChronicleComponent extends React.Component {

  constructor() {
    super();
    this.state = { itemInOverlay: null };
  }

  render() {
    const items = this.props.items;

    const itemForOverlay = (item) => {
      return { description: `${ item.readableDate } in ${ item.location }`, ...item };
    };
    const showOverlay = (item) => {
      this.setState({ itemInOverlay: itemForOverlay(item) });
    };
    const hideOverlay = () => {
      this.setState({ itemInOverlay: null });
    };
    const overlay = this.state.itemInOverlay
      ? <VcardComponent item={ this.state.itemInOverlay } onClose={ hideOverlay } />
      : null;

    return (
      <main role="main" className="pure-u-1">
        <div id="featured" className="pure-u-1 chronicle">
          <h1>Chronik</h1>
          <h3>Meilensteine der Astronomie und Raumfahrt</h3>
        </div>
        <div id="dataArea">
          <div id="timeline">
            <div id="timelineHeader"></div>
            {items.map((item, idx) => <ItemComponent item={item} key={idx} onClick={() => showOverlay(item)} />)}
            <div id="timelineFooter"></div>
          </div>
        </div>
        {overlay}
        <Notes />
      </main>
    )
  }
}

const ItemComponent = ({item, onClick}) => {
  return (
    <div className="timelineRow">
      <div className="timelineDate right">{item.readableDate}</div>
      <div className="timelinePlace">{item.location}</div>
      <div className="timelineEvent" onClick={onClick}>{item.event}</div>
    </div>
  )
};
