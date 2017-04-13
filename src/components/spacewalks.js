import React from 'react';
import Notes from './notes';

const SpacewalksComponent = ({spacewalks}) => {
  return (
    <main role="main" className="spacewalks pure-u-1 center">
      <div id="siteTitle" className="spacewalks pure-u-1">
        <h1>Weltraumausstiege</h1>
        <h3>frei im All</h3>
      </div>
      <div id="summary" className="spacewalks pure-u-1 left">
        <div id="summaryContainer" className="spacewalks">
          <div className="summary-img">
            <a href="/img/spacewalks/eva2_lg.jpg" title="Buzz Aldrin auf dem Mond">
              <img src="/img/spacewalks/eva2_sm.jpg" />
            </a>
            <div className="summary-img-src small">NASA</div>
          </div>
          <p>
            <b><i>Der Weltraumausstieg</i></b>, auch <i>EVA</i> (extra-vehicular activity = Außenbordaktivität)
            oder <i>spacewalk</i> genannt, ist ein Begriff für den Aufenthalt von
            Astronauten außerhalb eines Raumfahrzeuges im Vakuum des Weltalls oder
            auf einem anderen Himmelskörper. (z. B. Lunar Extra Vehicular Activity = LEVA)
            Er wird meist für Arbeiten an einem Raumfahrzeug, zu wissenschaftlichen
            Zwecken oder zur Erprobung neuer Techniken durchgeführt.
          </p>
          <p>
            Die Raumfahrer sind hierbei nur durch einen speziellen Raumanzug vor
            dem Vakuum und der Strahlung des Weltraums sowie vor Mikrometeoriten geschützt.
            Die Strahlenbelastung ist dabei etwa doppelt so hoch wie im Raumfahrzeug.
          </p>
          <div className="summary-img">
            <a href="/img/spacewalks/eva4_lg.jpg" title="Juri Onufrijenko an der Raumstation Mir">
              <img src="/img/spacewalks/eva4_sm.jpg" />
            </a>
            <div className="summary-img-src small">NASA</div>
          </div>
          <p>
            Bei der so genannten <i>Stand-Up-EVA</i> (SEVA) steht ein Raumfahrer in der
            geöffneten Luke seines Raumfahrzeugs ohne dies zu verlassen. Er ist hierbei
            vollständig abhängig vom den Systemen des Raumanzugs und assistiert
            einem weiteren Raumfahrer bei dessen EVA oder filmt ihn dabei.
          </p>
          <p>
            Wirklich freie Aufenthalte im All ohne Sicherungsleine wurden mit der <i>Manned Maneuvering Unit (MMU)</i>,
            einer Art Tornister mit kleinen Schubdüsen möglich. Sie werden nur in
            Ausnahmefällen durchgeführt. Der aktuelle Nachfolger der MMU ist
            das <i>SAFER</i>-System (Simplified Aid for EVA Rescue).
          </p>
          <div className="summary-img">
            <a href="/img/spacewalks/eva3_lg.jpg" title="Missionslogo von Woschod 2">
              <img src="/img/spacewalks/eva3_sm.jpg" />
            </a>
            <div className="summary-img-src small">Quelle unbekannt</div>
          </div>
          <p>
            Der sowjetische Kosmonaut <i>Alexei Leonow</i> absolvierte am 18. März 1965
            den ersten Weltraumausstieg. Zwölf Minuten lang schwebte er außerhalb
            von <i>Woschod 2</i> auf seiner eigenen Umlaufbahn um die Erde. Bei der Rückkehr in
            das Raumschiff ergaben sich Schwierigkeiten, da Leonows Raumanzug durch
            den fehlenden Gegendruck im All aufgebläht und zu steif geworden war.
            Erst als Leonow Druck aus seinem Anzug abgelassen hatte, gelang ihm der
            Einstieg in die Schleuse. In seinem Buch "Zwei Mann im Mond" verarbeitete
            Alexej Leonow seinen Weltraum"spaziergang".
          </p>
          <p>
            Die erste Frau, die einen Außenbordeinsatz durchführte, war <i>Swetlana Sawizkaja</i> am
            25. Juli 1984 an Bord der sowjetischen Raumstation <i>Saljut 7</i>.
            Gemeinsam mit <i>Wladimir Dschanibekow</i> testete sie neue Werkzeuge
            und Verfahren zum Schweißen, Schneiden und Beschichten von Materialien
            unter Weltraumbedingungen.
          </p>
          <h4>Wussten Sie schon?</h4>
          <ul>
            <li>Bis jetzt wurden [totalNumberOfItems] Weltraumausstiege von [totalNumberOfAstronauts] Astronauten durchgeführt.</li>
            <li>[astronautMaxNumberOfItems] absolvierte mit [maxNumberOfItems] EVA die meisten Außenbordeinsätze.</li>
            <li>Am [longestItemStartDate] führten [astronautsLongestItem] den mit [longestItemTime] bislang längsten Weltraumausstieg durch.</li>
          </ul>
        </div>
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
      <div className="spacewalk-name pure-u-1 pure-u-lg-5-24 center">
        <div className="pure-u-1">
          <p><a href={spacewalk.wikipediaUrl}>{spacewalk.name}</a></p>
        </div>
      </div>
      <div className="spacewalk-info pure-u-1 pure-u-lg-19-24">
        <div className="spacewalk-dates pure-u-1 pure-u-md-1-2 pure-u-lg-5-12 center">
          <p className="spacewalk-start pure-u-1-2 center">{spacewalk.startDate}{spacewalk.startTime ? ` - ${spacewalk.startTime}` : ''}</p>
          <p className="spacewalk-end pure-u-1-2 center">{spacewalk.startDate != spacewalk.endDate ? `bis ${spacewalk.endDate}` : ''}
          {spacewalk.startDate != spacewalk.endDate && spacewalk.endTime ? ` - ${spacewalk.endTime}` : ''}
          {spacewalk.startDate == spacewalk.endDate && spacewalk.endTime ? `bis ${spacewalk.endTime}` : ''}</p>
        </div>
        <div className="spacewalk-astronauts pure-u-1 pure-u-md-1-2 pure-u-lg-7-12 center">
          <p className="spacewalk-astronaut1 pure-u-sm-1-3"><a href={spacewalk.astronaut1Url} title={spacewalk.astronaut1}>{spacewalk.astronaut1}</a> ({spacewalk.countSpacewalks1}/{spacewalk.totalSpacewalks1})</p>
          {spacewalk.astronaut2 ? <p className="spacewalk-astronaut2 pure-u-sm-1-3"><a href={spacewalk.astronaut2Url} title={spacewalk.astronaut2}>{spacewalk.astronaut2}</a> ({spacewalk.countSpacewalks2}/{spacewalk.totalSpacewalks2})</p> : ''}
          {spacewalk.astronaut3 ? <p className="spacewalk-astronaut3 pure-u-sm-1-3"><a href={spacewalk.astronaut3Url} title={spacewalk.astronaut3}>{spacewalk.astronaut3}</a> ({spacewalk.countSpacewalks3}/{spacewalk.totalSpacewalks3})</p> : ''}
        </div>
      </div>
    </div>
  );
};
