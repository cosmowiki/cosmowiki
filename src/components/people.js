import React from 'react';
import Notes from './notes';
import LetterLinks from './chunks/letter-links';

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
        <p>@wolfram pls replace the filter forms with FilterRows as in stars-site</p>
        <p>@wolfram pls let the toggle-switches for sort and filter hide each other on hover on small screens</p>
        <p>@Wolfram pls make the #summaryToggleSwitch work.</p>
      </div>
      <div id="summary" className="persons pure-u-1 left">
        <a id="summaryToggleSwitch" className="expanded" href="#" title="Artikel anzeigen / schließen"></a>
        <div id="summaryContainer" className="persons visible">
          <p className="summary-text">
            Naturwissenschaftler und Raumfahrer – seit Jahrtausenden entdecken und
            erobern sie neue Welten und Räume, sie erkennen Zusammenhänge und Naturgesetze.
            Als Pioniere erweitern sie ständig den Horizont der Erkenntnis.
          </p>
          <div className="summary-img float-right size-lg">
            <a href="/img/persons/claudius_ptolemaeus_lg.jpg" title="Claudius Ptolemäus aus der Margarita Philosophica von Gregor Reisch - Großansicht">
              <img src="/img/persons/claudius_ptolemaeus_sm.jpg" alt="Claudius Ptolemäus aus der Margarita Philosophica von Gregor Reisch" />
            </a>
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
          <div className="summary-img full-width center">
            <img src="/img/persons/people_collage.jpg" alt="Collage berühmter Personen" />
          </div>
          <p className="summary-text">
            Mit ihren Leistungen schreiben sie sich in die Geschichtsbücher ein.
            Auszeichnungen werden ihnen verliehen und sie stiften neue Preise. Den
            Größten zu Ehren errichten wir Monumente und benennen Universitäten und
            Mondkrater nach diesen Giganten der Wissenschaft.
          </p>
          <div className="summary-img float-left">
            <a href="/img/persons/Challenger_STS51L_crew_lg.jpg" title="Crew der Challenger STS-51-L - Großansicht">
              <img src="/img/persons/Challenger_STS51L_crew_sm.jpg" alt="Crew der Challenger STS-51-L" />
            </a>
          </div>
          <p className="summary-text">
            Doch aus dem Fall eines Apfels ein Naturgesetz abzuleiten oder mit akribischer
            Denkarbeit die Beziehungen zwischen Raum und Zeit zu formulieren, bringt
            die Menschheit ebenso voran wie die Entwicklung neuer Materialien oder
            die Reparatur eines Solarpanels an einer Raumstation.
          </p>
          <p className="summary-text">
            Institute und Raumfahrtorganisationen auf der ganzen Welt ringen um
            Nachwuchs. Die nächsten Ingenieure und Wissenschaftler der MINT-Disziplinen
            werden die Antriebe der Zukunft entwickeln und die Geheimnisse der Dunklen
            Materie entschlüsseln, kommende Raumfahrer werden auf dem Mars landen. <b>Jeder Einzelne zählt!</b>
          </p>
          <h4>Wussten Sie schon?</h4>
          <ul className="summary-list">
            <li>
              Der deutsche Astronom <i>Johann Bayer</i> (1572 - 1625) führte eine
              noch heute gebräuliche systematische Benennung von Sternen ein.
            </li>
            <li>
              Am <i>Apollo-Programm</i> und der ersten bemannten Mondlandung arbeiteten
              insgesamt etwa 400.000 Menschen mit.
            </li>
            <li>
              Der Kosmonaut Waleri Bykowski hält mit vier Tagen und 23 Stunden den
              Rekord für den längsten Soloflug der Raumfahrtgeschichte.
            </li>
            <li>
              <i>Brain May</i>, der Gitarrist der britischen Rockband Queen ist
              seit 2007 auch promovierter Astrophysiker.
            </li>
          </ul>
        </div>
      </div>
      <div id="controlArea" className="persons pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="people pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortPeople" className="sort-form">
                <label>Sortieren nach:</label>
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
                  <option value="showAllProfessions">alle</option>// TODO use only the 10 most listed professions
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
            <div className="letter-section-header pure-u-1">
              <div className="scroll-up-link pure-u-11-24">
                <p className="left"><a id="scrollUpArrow" href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
              </div>
              <div className="first-letter pure-u-1-12 center">
                <p name={`#${groupKey}`}>{groupKey}</p>
              </div>
              <div className="scroll-up-link pure-u-11-24">
                <p className="right"><a id="scrollUpArrow" href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
              </div>
            </div>
            {people.map((person, idx) => <PersonComponent person={person} key={idx} />)}
          </div>
  );
};

const PersonComponent = ({person}) => {
  return (
            <div className="person-row data-row pure-u-1">
              <div className="person-name pure-u-1 pure-u-md-1 pure-u-lg-7-24">
                <div className="pure-u-1">
                  <p><a href={person.link}>{person.name}</a></p>
                </div>
              </div>
              <div className="person-data1 pure-u-1 pure-u-md-1-3 pure-u-lg-5-24">
                <div className="person-born pure-u-1-2 pure-u-md-1-2 center">
                  <p>{person.born ? `∗ ${person.born}` : ''}</p>
                </div>
                <div className="person-died pure-u-1-2 pure-u-md-1-2 center">
                  <p>{person.died ? `† ${person.died}`: ''}</p>
                </div>
              </div>
              <div className="person-data2 pure-u-1 pure-u-md-2-3 pure-u-lg-1-2">
                <div className="person-country pure-u-1-2 pure-u-md-1-2 center">
                  <p>{person.country ? person.country : ''}</p>
                </div>
                <div className="person-profession pure-u-1-2 pure-u-md-1-2 center">
                  <p>{person.profession ? person.profession : ''}</p>
                </div>
              </div>
            </div>
  );
};

// old code with the tooltip on hover
// import classNames from 'classnames';
// class PersonComponent extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {detailsVisible: false};
//   }
//
//   render() {
//     const showDetails = () => {
//       this.setState({detailsVisible: true});
//     };
//     const hideDetails = () => {
//       this.setState({detailsVisible: false});
//     };
//
//     const {person} = this.props;
//     let cssClasses = ['person-infobox pure-u-1 pure-u-md-1-2 pure-u-lg-1-3'];
//     cssClasses.push(this.state.detailsVisible ? 'visible' : 'hidden');
//
//     return (
//             <div className="person-row data-row pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
//               <div className="person-item">
//                 <a onMouseOver={showDetails} onMouseOut={hideDetails} href={person.wikipediaUrl}>{person.name}</a>
//               </div>
//               <div className={classNames(cssClasses)}>
//                 <div className="person-profession">{person.profession}</div>
//                 <div className="person-life">
//                   {person.born ? `∗ ${person.born}` : ''} &nbsp;
//                   {person.died ? `† ${person.died}`: ''}</div>
//                 <div className="person-country">{person.country}</div>
//                 <div className="person-info justify">{person.description}</div>
//               </div>
//             </div>
//     );
//
//   }
//
// }
