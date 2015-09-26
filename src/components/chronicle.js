import React from 'react';
import Notes from './notes';

export default class ChronicleComponent {

  render() {
    
    let items = this.props.items;
    
    return (
      <main role="main" className="pure-u-2-3 pure-u-lg-1">
        <div id="featured" className="chronicle center">
          <h1>Chronik</h1>
          <h3>Meilensteine der Astronomie und Raumfahrt</h3>
        </div>
        <div id="dataTable">
          <div id="timeline">
            <div id="timelineHeader"></div>
            {items.map((item, idx) => <ItemComponent item={item} key={idx} />)}
            <div id="timelineFooter"></div>
          </div>
        </div>
        <Notes />
      </main>
    )
  }
}

class ItemComponent {
  
  render() {
    const item = this.props.item;
    return (
      <div className="timelineRow">
        <div className="timelineDate right">{item.readableDate}</div>
        <div className="timelinePlace">{item.location}</div>
        <div className="timelineEvent"><a href={item.wikipediaUrl}>{item.event}</a></div>
      </div>
    )
  }
  
}
