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
        <p>@wolfram pls edit the month in endDate to appear as word when there is no endday (enable for all pages)</p>
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
      <div className="spacetelescopeImg pure-u-1 pure-u-sm-1-4 pure-u-lg-1-5 center">
        {telescope.imageUrl ? <a href={telescope.imageUrl}><img src={telescope.imageSmallUrl} alt={telescope.name} /></a> : ''}
        {telescope.imageUrl ? <small>Bild: {telescope.imageSrc}</small> : ''}
        {telescope.imageLicenseUrl ? <small><a href={telescope.imageLicenseUrl}>{telescope.imageLicence}</a></small> : <small>{telescope.imageLicence}</small>}
      </div>
      <div className="spacetelescopeInfo pure-u-1 pure-u-sm-1-2 pure-u-lg-3-5 center">
        <p className="telescope-name"><a href={telescope.wikipediaUrl}>{telescope.name}</a></p>
        {telescope.alternativename ? <p className="telescope-alternative-name">({telescope.alternativename})</p> : ''}
        {telescope.operator ? <p className="telescope-data">Betreiber: {telescope.operator}</p> : ''}
        {telescope.purpose ? <p className="telescope-data">{telescope.purpose}</p> : ''}
        <p className="telescope-data">{telescope.endDate ? `von ${telescope.launchDate} bis ${telescope.endDate}` : `Start: ${telescope.launchDate}`}</p>
      </div>
    </div>
  );
};
