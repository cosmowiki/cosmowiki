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
          Das Universum ist voller Rätsel, und Millionen Wissenschaftler bemühen sich
          Tag für Tag, all die mysteriösen Zusammenhänge zu entschlüsseln, um die
          Natur des Größten und Kleinsten zu beschreiben. Sie stellen Hypothesen
          und Theorien auf, führen Beweise und leiten aus ihren Beobachtungen Naturgesetze ab.
        </p>
        <div className="summary-img size-xl float-left">
          <a href="/img/scientists/Kopernikus_Nikolaus_lg.jpg" title="Nikolaus Kopernikus - Großansicht">
            <img src="/img/scientists/Kopernikus_Nikolaus_sm.jpg" alt="Nikolaus Kopernikus" />
          </a>
          <p className="summary-img-text">
            Nikolaus Kopernikus
          </p>
        </div>
        <p className="summary-text">
          Ist die Erde nun eine Scheibe oder nicht? Warum bewegt sich die Sonne
          um die Erde, oder ist es umgekehrt? Was hält die Sterne am Himmelszelt
          und warum bewegen sich einige, ander hingegen nicht? Oder bewegen sie
          sich vielleicht doch? Woher kommt das Mondlicht und wer oder was verbirgt
          sich hinter seinem Gesicht? Erscheint ein Stern um die gleiche Zeit wieder
          am Nachthimmel wie im Vorjahr? Ist es denn ein Stern? Was ist ein Stern?
        </p>
        <p className="summary-text">
          Es hat Jahrtausende gedauert, das heutige Weltbild zu formen. Jeder Lehrer
          gab seine Sicht der Dinge an seine Schüler weiter, und manchmal fand sich
          unter ihnen einer, der zweifelte, der überprüfte, der wagemutig genug war,
          überhaupt neue Fragen zu stellen. Doch er starb, bevor er selbst eine
          Antwort finden konnte. Viele Jahre später aber las ein junger Neugieriger
          in einem anderen Teil der Welt die alten Texte und hatte die eine
          zündende Idee! Bahnbrechende Antworten, interessante Theorien und vereinfachende
          Gleichungen sind das Ziel der Forschung.
        </p>
        <p className="summary-text">
          Immer wieder gelang es mutigen Philosophen, Mathematikern, Astronomen,
          Kosmologen und Physikern alte Dogmen und Irrwege zu widerlegen und ihre
          Überzeugungen gegen Widerstände zu verteidigen. Die Erde ist keine Scheibe,
          aber wie sieht sie wirklich aus? Sie ist auch nicht das Zentrum des
          Universums, sondern sie bewegt sich um die Sonne herum. Warum spüren wir
          nichts von dieser Bewegung? Ist die Sonne dann das Zentrum? Wenn ja, wovon?
          Was liegt hinter den Sternen? Jede Antwort wirft zugleich neue Fragen auf, und
          manch neue Idee weckt Zweifel an alten Lehrsätzen.
        </p>
        <p className="summary-text">
          Beobachten und experimentieren, protokollieren und berechnen, schlussfolgern
          und beweisen - systematisch und gewissenhaft arbeitet der Forscher an
          seinem Schreibtisch, im Labor oder im Observatorium, und doch ist es oft
          der Zufall, die Inspiration, der göttliche Funke oder der fallende Apfel,
          der die Lösung bringt. Doch schließlich schwebt über allen Antworten die große,
          zentrale Frage nach dem Ursprung der Welt, nach der Schöpfung selbst, nach Gott.
        </p>
        <div className="summary-img">
          <a href="/img/scientists/2_lg.jpg" title="Bildbeschreibung - Großansicht">
            <img src="/img/scientists/2_sm.jpg" alt="Bildbeschreibung" />
          </a>
          <p className="summary-img-text">
            Bildbeschreibung
          </p>
        </div>
        <p className="summary-text">
          In der Antike versuchte Eratosthenes den Umfang der Erde zu berechnen,
          während die Ägypter den Schalttag alle vier Jahre einführten. Zu dieser
          Zeit bestand der äußerst genaue Maya-Kalender vermutlich schon seit 3000 Jahren,
          und in China war etwa 900 Jahre zuvor eine Sonnenfinsternis aufgezeichnet
          worden. Hatte der indische Gelehrte Aryabhata 500 n. Chr. schon eine Idee
          von einem heliozentrischen Weltbild - 1000 Jahre vor der <em>Kopernikanischen Wende</em>?
        </p>
        <p className="summary-text">
          Wie Perlen auf einer Schnur reihen sich die Erkenntnisse über unsere Welt
          in der Geschichte der Wissenschaft aneinander. Als um 1500 im arabischen
          Raum der Islam und die Astronomie gleichermaßen ihre höchste Blüte
          erreichen, explodiert auch in Europa nach den Jahrhunderten des finsteren
          Mittelalters der Forscherdrang. Von Regiomontanus, Kopernikus und Tycho Brahe
          zieht sich eine Linie über Johann Bayer, Johannes Keler und Galileo Galilei
          bis hin zu Christiaan Huygens, Giovanni Domenico Cassini und Isaac Newton.
        </p>
        <p className="summary-text">
          Heute erstellen Superrechner komplexe Modelle von
          Schwarzen Löchern und Gravitationswellen oder vom Urknall.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
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
