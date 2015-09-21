export default class ObjectsComponent {
  
  render() {
    
    let appUrl = this.props.appUrl;
    
    return (
      <main role="main" className="pure-u-2-3">
        <div id="featured" className="objects center">
          <h1>Objekte</h1>
          <p>Planeten und Sterne, Satelliten und Sonden</p>
        </div>
        <div className="cw-page-links objects solsys center">
          <a href={appUrl.solarSystemSite()}>Sonnensystem</a>
        </div>
        <div className="cw-page-links objects const center">
          <a href={appUrl.constellationsSite()}>Sternbilder</a>
        </div>
        <div className="cw-page-links objects stars center">
          <a href={appUrl.starsSite()}>Sterne</a>
        </div>
        <div className="cw-page-links objects stations center">
          <a href={appUrl.stationsSite()}>Raumstationen</a>
        </div>
      </main>
    );
  }
  
}