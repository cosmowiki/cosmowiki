import React from 'react';
import Notes from './notes';
import LetterLinks from './chunks/letter-links';

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {isOpen: true};
  }
  render() {
    const isOpen = this.state.isOpen;
    const toggle = () => {
      this.setState({isOpen: !isOpen}); };
    const switchClassName = isOpen ? "expanded" : "collapsed";
    const containerClassName = isOpen ? "visible" : "minimized";
    return (
      <div id="summary" className="pure-u-1 left">
        <a id="summaryToggleSwitch" className={switchClassName} title="Artikel anzeigen / schließen" onClick={toggle}/>
        <div id="summaryContainer" className={containerClassName}>
          {this.props.children}
        </div>
        {isOpen ? null : <div id="summaryShade" /> }
      </div>
    );
  }
}

const AstronautsComponent = ({groupedAstronauts}) => {
  const allFirstLetters = Object.keys(groupedAstronauts);
  const groupsIterable = allFirstLetters.map(key => groupedAstronauts[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="astronauts pure-u-1 center">
        <h1>Raumfahrer</h1>
        <h3>Astronauten, Komsonauten, Taikonauten</h3>
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
          <img src="/img/persons/people_collage.jpg" alt="Collage berühmter astronauten" />
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
            Am <em>Apollo-Programm</em> und der ersten bemannten Mondlandung arbeiteten
            insgesamt etwa 400.000 Menschen mit.
          </li>
          <li>
            Der Kosmonaut Waleri Bykowski hält mit vier Tagen und 23 Stunden den
            Rekord für den längsten Soloflug der Raumfahrtgeschichte.
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
              <form id="sortPeople" className="sort-form">
                <select name="sortPeople" defaultValue="sortPeopleNameUp">
                  <option value="sortPeopleNameUp">Name &uarr;</option>
                  <option value="sortPeopleNameDown">Name &darr;</option>
                  <option value="sortPeopleFirstLaunchUp">erster Raumflug &uarr;</option>
                  <option value="sortPeopleFirstLaunchDown">erster Raumflug &darr;</option>
                  <option value="sortPeopleTimeInSpaceUp">Gesamtzeit im All &uarr;</option>
                  <option value="sortPeopleTimeInSpaceDown">Gesamtzeit im All &darr;</option>
                  <option value="sortPeopleNumberSpacewalksUp">Anzahl EVAs &uarr;</option>
                  <option value="sortPeopleNumberSpacewalksDown">Anzahl EVAs &darr;</option>
                  <option value="sortPeopleDurationsSpacewalksUp">EVA Gesamtdauer &uarr;</option>// not important yet, too much items w/o dates
                  <option value="sortPeopleDurationsSpacewalksDown">EVA Gesamtdauer &darr;</option>// not important yet, too much items w/o dates
                </select>
              </form>
            </div>
          </div>
          <div id="filter" className="people pure-u-1-2 right">
            <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
            <div id="filterArea">
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
        <div id="peopleTable">
          {groupsIterable.map((group, idx) => <AstronautGroupComponent group={group} key={idx} />)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default AstronautsComponent;

const AstronautGroupComponent = ({group}) => {
  const groupKey = group.key;
  const astronauts = group.data;

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
            {astronauts.map((astronaut, idx) => <AstronautComponent astronaut={astronaut} key={idx} />)}
          </div>
  );
};

const AstronautComponent = ({astronaut}) => {
  return (
            <div className="astronaut-row data-row pure-u-1">
              <div className="astronaut-name pure-u-1 pure-u-md-1 pure-u-lg-7-24">
                <div className="pure-u-1">
                  <p><a href={astronaut.link}>{astronaut.name}</a></p>
                </div>
              </div>
              {astronaut.imgSmallUrl ?
                <div className="astronaut-img pure-u-1-3 pure-u-sm-1-2 pure-u-md-2-24 center">
                  <a href={astronaut.imgUrl} title={astronaut.name}><img src={astronaut.imgSmallUrl} alt={astronaut.name} /></a>
                </div>
               : ''}
              <div className="astronaut-data pure-u-2-3">
                <div className="astronaut-country pure-u-1 pure-u-md-1-3 pure-u-lg-2-24">
                  <p>{astronaut.country ? astronaut.country : ''}</p>
                </div>
                <div className="astronaut-spaceflights pure-u-1 pure-u-md-2-3 pure-u-lg-9-24">
                  <div className="astronaut-firstlaunch pure-u-1 pure-u-md-13-24">
                    <p>{astronaut.firstLaunch ? `erster Raumflug: ${astronaut.firstLaunch}` : ''}</p>
                  </div>
                  <div className="astronaut-timeinspace pure-u-1 pure-u-md-11-24">
                    <p>{astronaut.timeInSpace ? `Zeit im All: ${astronaut.timeInSpace}` : ''}</p>
                  </div>
                </div>
                {astronaut.numberOfSpacewalks ?
                <div className="astronaut-spacewalks pure-u-1 pure-u-md-2-3 pure-u-lg-4-24">
                  <div className="astronaut-numberspacewalks pure-u-md-9-24">
                    <p>EVAs: {astronaut.numberOfSpacewalks}</p>
                  </div>
                  <div className="astronaut-durationspacewalks pure-u-md-15-24">
                    <p>Dauer: {astronaut.durationOfSpacewalks}</p>
                  </div>
                </div>
                : ''}
              </div>
            </div>
  );
};
