import React from 'react';
import Notes from './notes';

const SpacewalksComponent = ({spacewalks}) => {
  return (
    <main role="main" className="spacewalks pure-u-1 center">
      <div id="siteTitle" className="spacewalks pure-u-1">
        <h1>Weltraumausstiege</h1>
        <h3>frei im All</h3>
      </div>
      <div id="summary" className="spacewalks pure-u-1 justify">
        <p><i>Der Weltraumausstieg</i>, auch <i>EVA</i> (extra-vehicular activity = Außenbordaktivität)
        oder <i>spacewalk</i> genannt, ist ein Begriff für den Aufenthalt von Astronauten
        außerhalb eines Raumfahrzeuges im Vakuum des Weltalls oder auf einem anderen Himmelskörper.
        (z. B. Lunar Extra Vehicular Activity = LEVA) Er wird meist für Arbeiten
        an einem Raumfahrzeug, zu wissenschaftlichen Zwecken oder zur Erprobung neuer Techniken durchgeführt.</p>
        <p>Die Raumfahrer sind hierbei nur durch einen speziellen Raumanzug vor
        dem Vakuum und der Strahlung des Weltraums sowie vor Mikrometeoriten geschützt.
        Die Strahlenbelastung ist dabei etwa doppelt so hoch wie im Raumfahrzeug.</p>
        <p>Aktivitäten in der Schwerelosigkeit erfordern etwa 2,5 mal mehr Zeit als auf der Erde.</p>
        <p>Bei so genannten Stand-Up-EVA (SEVA) steht ein Raumfahrer meist in der
        geöffneten Luke seines Raumfahzeugs um einen weiteren Raumfahrer bei dessen
        EVA zu assistieren oder ihn zu filmen.</p>
        <h4>Interessante Fakten:</h4>
        <p>Bis jetzt wurden [totalNumberOfItems] Weltraumausstiege von [totalNumberOfAstronauts] durchgeführt.</p>
        <p>[astronautWithMaxNumberOfItems] absolvierte mit [maxNumberOfItems] EVA die meisten Außenbordeinsätze.</p>
        <p>Am [longestItemStartDate] führten [astronautsLongestItem] den mit [longestItemTime] bislang längsten Weltraumausstieg durch.</p>
        <img src="" />
      </div>
      <div id="controlArea" className="spacewalks pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="spacewalks pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortSpacewalks" className="sort-form">
                <label>Sortieren nach:</label>
                <select name="sortSpacewalks" defaultValue="sortSpacewalksStartUp">
                  <option value="sortSpacewalksStartUp">Startdatum &uarr;</option>
                  <option value="sortSpacewalksStartDown">Startdatum &darr;</option>
                  <option value="sortSpacewalksDurationUp">Spacewalksdauer &uarr;</option>
                  <option value="sortSpacewalksDurationDown">Spacewalksdauer &darr;</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="dataArea" className="spacewalks pure-u-1">
        <div id="spacewalksTable">
          {spacewalks.map((spacewalk, idx) => <SpacewalkComponent spacewalk={spacewalk} key={idx}/>)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default SpacewalksComponent;

const SpacewalkComponent = ({spacewalk}) => {
  return (
    <div className="spacewalk-row data-row pure-u-1">
      <div className="spacewalk-name pure-u-1-4 left">
        <div className="pure-u-1">
          <p><a href={spacewalk.wikipediaUrl}>{spacewalk.name}</a></p>
        </div>
      </div>
      <div className="spacewalk-info pure-u-3-4 left">
        <div className="spacewalk-dates pure-u-11-24">
          <p>{spacewalk.startDate}{spacewalk.startTime ? ` - ${spacewalk.startTime}` : ''}</p>
          <p>{spacewalk.startDate != spacewalk.endDate ? `bis ${spacewalk.endDate}` : ''}
          {spacewalk.startDate != spacewalk.endDate && spacewalk.endTime ? ` - ${spacewalk.endTime}` : ''}
          {spacewalk.startDate == spacewalk.endDate && spacewalk.endTime ? `bis ${spacewalk.endTime}` : ''}</p>
        </div>
        <div className="spacewalk-astronauts pure-u-13-24 left">
          <p>
            {spacewalk.astronaut1} ({spacewalk.countSpacewalks1}/{spacewalk.totalSpacewalks1})
            {spacewalk.astronaut2 ? `, ${spacewalk.astronaut2} (${spacewalk.countSpacewalks2}/${spacewalk.totalSpacewalks2})` : ''}
            {spacewalk.astronaut3 ? `, ${spacewalk.astronaut3} (${spacewalk.countSpacewalks3}/${spacewalk.totalSpacewalks3})` : ''}
          </p>
        </div>
      </div>
    </div>
  );
};
