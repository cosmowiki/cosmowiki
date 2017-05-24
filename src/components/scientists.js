import React from 'react';
import Notes from './notes';
import LetterLinks from './chunks/letter-links';
import {Summary} from './chunks/summary';

const ScientistsComponent = ({groupedScientists}) => {
  const allFirstLetters = Object.keys(groupedScientists);
  const groupsIterable = allFirstLetters.map(key => groupedScientists[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="scientists pure-u-1 center">
        <h1>Wissenschaftler</h1>
        <h3>Astronomen, Kosmologen, Physiker</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram pls replace the filter forms with FilterRows as in stars-site</p>
        <p>@wolfram pls let the toggle-switches for sort and filter hide each other on hover on small screens</p>
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
          Aus dem Fall eines Apfels ein Naturgesetz abzuleiten oder mit akribischer
          Denkarbeit die Beziehungen zwischen Raum und Zeit zu formulieren, bringt
          die Menschheit ebenso voran wie die Entwicklung neuer Materialien oder
          die Reparatur eines Solarpanels an einer Raumstation.
        </p>
        <p className="summary-text">
          Institute und Raumfahrtorganisationen auf der ganzen Welt ringen um
          Nachwuchs. Die nächsten Ingenieure und Wissenschaftler der MINT-Disziplinen
          werden die Antriebe der Zukunft entwickeln und die Geheimnisse der Dunklen
          Materie entschlüsseln, die Raumfahrer von morgen werden auf dem Mars landen.<br />
          Jeder Einzelne zählt!
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Der deutsche Astronom <em>Johann Bayer</em> (1572 - 1625) führte eine
            noch heute gebräuliche systematische Benennung von Sternen ein.
          </li>
          <li>
            <em>Brain May</em>, der Gitarrist der britischen Rockband Queen ist
            seit 2007 auch promovierter Astrophysiker.
          </li>
        </ul>
      </Summary>
      <div id="controlArea" className="people pure-u-1">
        <div id="controllers" className="pure-u-1">
          <div id="sort" className="people pure-u-1-2 left">
            <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
            <div id="sortArea">
              <form id="sortScientists" className="sort-form">
                <select name="sortScientists" defaultValue="sortScientistsNameUp">
                  <option value="sortScientistsNameUp">Name &uarr;</option>
                  <option value="sortScientistsNameDown">Name &darr;</option>
                  <option value="sortScientistsBornUp">Geburtsdatum &uarr;</option>// not important yet, too much items w/o dates
                  <option value="sortScientistsBornDown">Geburtsdatum &darr;</option>// not important yet, too much items w/o dates
                </select>
              </form>
            </div>
          </div>
          <div id="filter" className="scientists pure-u-1-2 right">
            <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
            <div id="filterArea">
              <form id="filterScientistsByProfession" className="filter-form">
                <label>Beruf:</label>
                <select name="scientistsProfessions" defaultValue="showAllProfessions">
                  <option value="showAllProfessions">alle</option>
                </select>
              </form>
              <form id="filterScientistsByCountry" className="filter-form">
                <label>Land:</label>
                <select name="scientistsCountries" defaultValue="showAllCountries">
                  <option value="showAllCountries">alle</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <LetterLinks letters={allFirstLetters} />
      </div>
      <div id="dataArea" className="people pure-u-1">
        <div id="peopleTable">
          {groupsIterable.map((group, idx) => <ScientistGroupComponent group={group} key={idx} />)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default ScientistsComponent;

const ScientistGroupComponent = ({group}) => {
  const groupKey = group.key;
  const scientists = group.data;

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
            {scientists.map((scientist, idx) => <ScientistComponent scientist={scientist} key={idx} />)}
          </div>
  );
};

const ScientistComponent = ({scientist}) => {
  return (
            <div className="scientist-row data-row pure-u-1">
              <div className="scientist-name pure-u-1 pure-u-md-1-2 pure-u-lg-8-24">
                <p><a href={scientist.link}>{scientist.name}</a></p>
              </div>
              <div className="scientist-info pure-u-1 pure-u-md-1-3 pure-u-lg-11-24">
                <div className="scientist-profession pure-u-1 pure-u-lg-2-3">
                  <p>{scientist.profession ? scientist.profession : ''}</p>
                </div>
                <div className="scientist-country pure-u-1 pure-u-lg-1-3">
                  <p>{scientist.country}</p>
                </div>
              </div>
              {scientist.born ?
              <div className="scientist-life pure-u-1 pure-u-md-1-6 pure-u-lg-5-24">
                <div className="scientist-born pure-u-md-1 pure-u-lg-1-2">
                  <p>∗ {scientist.born}</p>
                </div>
                <div className="scientist-died pure-u-md-1 pure-u-lg-1-2">
                  {scientist.died ? <p>† {scientist.died}</p> : ''}
                </div>
              </div>
              : ''}
            </div>
  );
};

// old code with the tooltip on hover
// import classNames from 'classnames';
// class ScientistComponent extends React.Component {
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
//     const {scientist} = this.props;
//     let cssClasses = ['scientist-infobox pure-u-1 pure-u-md-1-2 pure-u-lg-1-3'];
//     cssClasses.push(this.state.detailsVisible ? 'visible' : 'hidden');
//
//     return (
//             <div className="scientist-row data-row pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
//               <div className="scientist-item">
//                 <a onMouseOver={showDetails} onMouseOut={hideDetails} href={scientist.wikipediaUrl}>{scientist.name}</a>
//               </div>
//               <div className={classNames(cssClasses)}>
//                 <div className="scientist-profession">{scientist.profession}</div>
//                 <div className="scientist-life">
//                   {scientist.born ? `∗ ${scientist.born}` : ''} &nbsp;
//                   {scientist.died ? `† ${scientist.died}`: ''}</div>
//                 <div className="scientist-country">{scientist.country}</div>
//                 <div className="scientist-info justify">{scientist.description}</div>
//               </div>
//             </div>
//     );
//
//   }
//
// }
