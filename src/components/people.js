import React from 'react';
import Notes from './notes';
import LetterLinks from './chunks/letter-links';
import {Summary} from './chunks/summary';

const PeopleComponent = ({groupedPeople}) => {
  const allFirstLetters = Object.keys(groupedPeople);
  const groupsIterable = allFirstLetters.map(key => groupedPeople[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="persons pure-u-1 center">
        <h1>Personen</h1>
        <h3>Entdecker, Pioniere, Wissenschaftler</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: pls make the filter work with FilterRows as in stars-site</p>
        <p>@wolfram: pls let the toggle-switches for sort and filter hide each other on hover on small screens</p>
      </div>
      <Summary>
        <p className="summary-text">
          Naturwissenschaftler und Raumfahrer – seit Jahrtausenden entdecken und
          erobern sie neue Welten und Räume, sie erkennen Zusammenhänge und Naturgesetze.
          Als Pioniere erweitern sie ständig den Horizont der Erkenntnis.
        </p>
        <div className="summary-img float-right size-lg">
          <a href="/img/persons/claudius_ptolemaeus_lg.jpg" title="Claudius Ptolemäus aus der Margarita Philosophica von Gregor Reisch - Großansicht">
            <img src="/img/persons/claudius_ptolemaeus_sm.jpg" alt="Claudius Ptolemäus aus der Margarita Philosophica von Gregor Reisch" />
          </a>
          <p className="summary-img-text">
            Claudius Ptolemäus
          </p>
        </div>
        <p className="summary-text">
          Aus Schamanen und Priestern wurden Astrologen und Philosophen, später
          dann Quantenphysiker und Bordingenieure. Ihr steter Drang nach der Erforschung
          des Unbekannten sind bis heute der Motor der Wissenschaft.
        </p>
        <p className="summary-text">
          Sie stellen die entscheidenden Fragen und suchen nach deren Antworten.
          Sie sind aufmerksame Beobachter ihrer Umwelt und werten Daten aus. Neugier,
          Beharrlichkeit und Ausdauer sind Grundvoraussetzungen, um als Forscher
          nicht nur erfolgreich zu sein, sondern auch Misserfolge und Rückschläge
          zu verkraften.
        </p>
        <p className="summary-text">
          Neben den großen Namen gibt es viele unbekannte Akademiker und Amateure,
          die im kleinen und großen Maßstab Bedeutendes geleistet haben. Wie Zahnräder
          in einem Getriebe greifen ihre Arbeiten ineinander und treiben die Wissenschaft
          voran in Richtung Zukunft.
        </p>
        <div className="summary-img width-75 center">
          <img src="/img/persons/people_collage.jpg" alt="Collage berühmter Personen" />
          <p className="summary-img-text">
            Aristoteles, A. Shepard, I. Newton, E. Halley, V. Tereschkowa, A. Einstein, N. Kopernikus, J. Gagarin, G. Galilei, S. Hawking, T. Brahe, N. Armstrong
          </p>
        </div>
        <p className="summary-text">
          Mit ihren Leistungen schreiben sie sich in die Geschichtsbücher ein.
          Auszeichnungen werden ihnen verliehen und sie stiften neue Preise. Den
          Größten zu Ehren errichten wir Monumente und benennen Universitäten und
          Mondkrater nach diesen Giganten der Wissenschaft.
        </p>
        <div className="summary-img float-left size-lg">
          <a href="/img/persons/Challenger_STS51L_crew_lg.jpg" title="Crew der Challenger STS-51-L - Großansicht">
            <img src="/img/persons/Challenger_STS51L_crew_sm.jpg" alt="Crew der Challenger STS-51-L" />
          </a>
          <p className="summary-img-text">
            Crew der Challenger STS-51-L
          </p>
        </div>
        <p className="summary-text">
          Aus dem Fall eines Apfels ein Naturgesetz abzuleiten, mit akribischer
          Denkarbeit die Relativität von Raum und Zeit zu formulieren oder jahrzehntelang
          mit riesigen Detektoren nach Elementarteilchen zu suchen, bringt die Menschheit
          ebenso voran wie die Ergebnisse biomedizinischer Forschung, die Entwicklung
          neuer Materialien oder die Reparatur eines Solarpanels an einer Raumstation.
        </p>
        <p className="summary-text">
          Institute und Raumfahrtorganisationen auf der ganzen Welt ringen um
          talentierten und motivierten Nachwuchs. Die nächsten Ingenieure und
          Wissenschaftler der MINT-Disziplinen werden die Raumfahrtantriebe der
          Zukunft entwickeln und die Geheimnisse der Dunklen Materie entschlüsseln,
          die Raumfahrer von morgen werden auf dem Mars landen. Jeder Einzelne zählt!
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Der deutsche Astronom <em>Johann Bayer</em> (1572 - 1625) führte eine
            noch heute gebräuliche systematische Benennung von Sternen ein.
          </li>
          <li>
            Am <em>Apollo-Programm</em> und der ersten bemannten Mondlandung arbeiteten
            insgesamt etwa 400.000 Menschen mit.
          </li>
          <li>
            Der Kosmonaut <em>Waleri Bykowski</em> hält mit vier Tagen und 23 Stunden den
            Rekord für den längsten Soloflug der Raumfahrtgeschichte.
          </li>
          <li>
            <em>Brian May</em>, der Gitarrist der britischen Rockband Queen ist
            seit 2007 auch promovierter Astrophysiker.
          </li>
        </ul>
      </Summary>
      <div id="controlArea" className="people pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="people pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortPeople" className="sort-form">
                <select name="sortPeople" defaultValue="sortPeopleNameUp">
                  <option value="sortPeopleNameUp">Name &uarr;</option>
                  <option value="sortPeopleNameDown">Name &darr;</option>
                  <option value="sortPeopleBornUp">Geburtsdatum &uarr;</option>// not important yet, too much items w/o dates
                  <option value="sortPeopleBornDown">Geburtsdatum &darr;</option>// not important yet, too much items w/o dates
                </select>
              </form>
            </div>
          </div>
          <div id="filter" className="people pure-u-1-2 right">
            <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
            <div id="filterArea">
              <form id="filterPeopleByProfession" className="filter-form">
                <label>Beruf:</label>
                <select name="peopleProfessions" defaultValue="showAllProfessions">
                  <option value="showAllProfessions">alle</option>
                </select>
              </form>
              <form id="filterPeopleByCountry" className="filter-form">
                <label>Land:</label>
                <select name="peopleCountries" defaultValue="showAllCountries">
                  <option value="showAllCountries">alle</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <LetterLinks letters={allFirstLetters} />
      </div>
      <div id="dataArea" className="people pure-u-1">
        <div id="personsTable">
          {groupsIterable.map((group, idx) => <PersonGroupComponent group={group} key={idx} />)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default PeopleComponent;

const PersonGroupComponent = ({group}) => {
  const groupKey = group.key;
  const people = group.data;

  return (
          <div id={groupKey} className="letter-section pure-u-1">
            <div className="leading-letter pure-u-1 center">
              <p name={`#${groupKey}`}>{groupKey}</p>
            </div>
            {people.map((person, idx) => <PersonComponent person={person} key={idx} />)}
          </div>
  );
};

const PersonComponent = ({person}) => {
  return (
            <div className="person-row data-row pure-u-1">
              <div className="person-name pure-u-1 pure-u-md-1-2 pure-u-lg-8-24">
                <p><a href={person.link}>{person.name}</a></p>
              </div>
              <div className="person-info pure-u-1 pure-u-md-1-3 pure-u-lg-11-24">
                <div className="person-profession pure-u-1 pure-u-lg-2-3">
                  <p>{person.profession ? person.profession : ''}</p>
                </div>
                <div className="person-country pure-u-1 pure-u-lg-1-3">
                  <p>{person.country}</p>
                </div>
              </div>
              {person.born ?
              <div className="person-life pure-u-1 pure-u-md-1-6 pure-u-lg-5-24">
                <div className="person-born pure-u-md-1 pure-u-lg-1-2">
                  <p>∗ {person.born}</p>
                </div>
                <div className="person-died pure-u-md-1 pure-u-lg-1-2">
                  {person.died ? <p>† {person.died}</p> : ''}
                </div>
              </div>
              : ''}
            </div>
  );
};
