import React from 'react';
import Notes from './notes';

const SpaceTelescopesComponent = ({ telescopes }) => {

  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="spacetelecopes pure-u-1 center">
        <h1>Weltraumteleskope</h1>
        <h3>Augen und Ohren im All</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram pls edit the month in endDate to appear as word when there is no endday (enable for all dates in all pages)</p>
      </div>
      <div id="controlArea" className="spacetelecopes pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="spacetelecopes pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortSpacetelecopes" className="sort-form">
                <label>Sortieren nach:</label>
                <select name="sortSpacetelecopes" defaultValue="sortSpacetelecopesLaunchUp">
                  <option value="sortSpacetelecopesLaunchUp">Startdatum &uarr;</option>
                  <option value="sortSpacetelecopesLaunchDown">Startdatum &darr;</option>
                  <option value="sortSpacetelecopesNameUp">Name &uarr;</option>
                  <option value="sortSpacetelecopesNameDown">Name &darr;</option>
                  <option value="sortSpacetelecopesEndUp">Missionsende &uarr;</option>
                  <option value="sortSpacetelecopesEndDown">Missionsende &darr;</option>
                  <option value="sortSpacetelecopesDurationUp">Dauer &uarr;</option>
                  <option value="sortSpacetelecopesDurationDown">Dauer &darr;</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="dataArea" className="spacetelescopes pure-u-1">
        <div id="spacetelescopesTable">
          {telescopes.map((telescope, idx) => <TelescopeComponent telescope={ telescope } key={idx}/>)}
        </div>
      </div>
      <Notes/>
    </main>
  );
};

export default SpaceTelescopesComponent;

const TelescopeComponent = ({ telescope }) => {
  return (
    <div className="spacetelescope-row data-row pure-u-1">
      <div className="spacetelescope-img pure-u-1 pure-u-sm-1-4 pure-u-md-1-3 center">
        {telescope.imageUrl ? <a href={telescope.imageUrl} title={telescope.name}><img src={telescope.imageSmallUrl} alt={telescope.name} /></a> : ''}
        {telescope.imageUrl ? <small>Bild: {telescope.imageSrc}</small> : ''}
        {telescope.imageLicenseUrl ? <small><a href={telescope.imageLicenseUrl}>{telescope.imageLicence}</a></small> : ''}
      </div>
      <div className="spacetelescope-info pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 center">
        <div className="spacetelescope-name pure-u-1 pure-u-md-1-2">
          <p className="spacetelescope-name"><a href={telescope.wikipediaUrl} title={telescope.name}>{telescope.name}</a></p>
          {telescope.alternativename ? <p className="spacetelescope-alternative-name">({telescope.alternativename})</p> : ''}
        </div>
        <div className="spacetelescope-data pure-u-1 pure-u-md-1-2">
          {telescope.operator ? <p className="spacetelescope-data">Betreiber: {telescope.operator}</p> : ''}
          {telescope.purpose ? <p className="spacetelescope-data">{telescope.purpose}</p> : ''}
          <p className="spacetelescope-data">{telescope.endDate ? `von ${telescope.launchDate} bis ${telescope.endDate}` : `Start: ${telescope.launchDate}`}</p>
          {telescope.status ? <p className="spacetelescope-data">Status: {telescope.status}</p> : ''}
        </div>
      </div>
    </div>
  );
};