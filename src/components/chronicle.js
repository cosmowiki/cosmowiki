import Notes from './notes';

export default class ChronicleComponent {

  render() {
    
    let items = this.props.items;
    
    return (
      <main role="main" className="pure-u-2-3">
        <div id="featured" className="chronicle center">
          <h1>Chronik</h1>
          <h3>Meilensteine der Astronomie und Raumfahrt</h3>
        </div>
        <div id="dataTable">
          <div id="timeline">
            <div id="timelineHeader"></div>
            {items.map(item => <ItemComponent item={item} />)}
            <div id="timelineFooter"></div>
          </div>
        </div>
        <div id="notes">
          <Notes />
        </div>
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
