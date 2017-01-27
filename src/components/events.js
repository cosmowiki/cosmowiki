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
      return { description: `${ item.date } in ${ item.place }`, ...item };
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
        <div id="featured" className="chronicle pure-u-1 center">
          <h1>Chronik</h1>
          <h3>Meilensteine der Astronomie und Raumfahrt</h3>
        </div>
        <div id="todo" className="pure-u-1">
          @wolfram pls hide the span id="coordinates" from the WP article when loading in vcard
        </div>
        <div id="dataArea">
          <div id="timeline">
            {items.map((item, idx) => <ItemComponent item={item} key={idx} onClick={() => showOverlay(item)} />)}
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
    <div className="event-row data-row pure-u-1">
      <div className="event-data1 pure-u-1 pure-u-lg-9-24">
        <div className="event-date pure-u-1 pure-u-sm-11-24 pure-u-lg-1-3">
          <p>{item.date}</p>
        </div>
        <div className="event-dash pure-u-sm-1-12 pure-u-lg-1-24">
          <p>{item.place ? `-` : ''}</p>
        </div>
        <div className="event-place pure-u-1 pure-u-sm-11-24 pure-u-lg-15-24">
          <p>{item.place ? item.place : ''}</p>
        </div>
      </div>
      <div className="event-data2 pure-u-1 pure-u-lg-15-24">
        <div className="event-name pure-u-7-8 pure-u-md-1" onClick={onClick}>
          <p>{item.name}</p>
        </div>
      </div>
    </div>
  )
};

// <div id="timelineHeader"></div>
// {items.map((item, idx) => <ItemComponent item={item} key={idx} onClick={() => showOverlay(item)} />)}
// <div id="timelineFooter"></div>
