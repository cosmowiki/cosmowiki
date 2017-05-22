import React from 'react';
import Notes from './notes';
import LetterLinks from './chunks/letter-links';
import {Summary} from './chunks/summary';

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
          Nach der Definition der Fédération Aéronautique Internationale (FAI) beginnt
          der Weltraum in einer Höhe von 100 km über der Erdoberfläche.
          Die International Association of Space Explorers (ASE) und alle internationalen
          Raumfahrtagenturen erkennen nur solche Personen als Raumfahrer an, welche
          bei einem Raumflug mindestens eine Erdumkreisung absolviert haben.
          Somit ist ein Mensch ein Raumfahrer, wenn er die 100-Kilometer-Marke überflogen
          und dabei mindestens einmal die Erde umkreist hat.
        </p>
        <p className="summary-text">
          Doch auch über diese Merkmale hinaus sind Raumfahrer außergewöhnliche Menschen.
          Enorme körperliche und psychische Belastbarkeit sind nur zwei von vielen
          Punkten in ihrem Anforderungsprofil. Sie sind hochintelligent und haben
          viele Jahre an Universitäten und Hochschulen studiert. Studienabschlüsse
          als Ingenieur, in Naturwissenschaften oder Medizin sind in ihren Lebensläufen
          zu finden - oft sogar mehrere davon.
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
          Bemannte Raumfahrt zu betreiben, war ein prestigeträchtiges Unterfangen
          für eine Nation. Zwischen den beiden Supermächten UdSSR und USA entbrannte
          ein Wettstreit darum, welches Land den ersten Menschen ins All schicken würde.
        </p>
        <p className="summary-text">
          Juri Gagarin umrundete dann am 12. April 1961 mit Wostok 1 als erster Mensch
          die Erde - die Sowjets hatten dieses Rennen also gewonnen. Der erste US-Amerikaner
          im All war dann Alan Shepard. Am 5. Mai 1961 absolvierte er mit  Mercury-Redstone 3 einen
          suborbitalen Flug mit einer Gipfelhöhe von 187 Kilometern. Den ersten
          amerikanischen Orbitalflug führte John Glenn am 20. Februar 1962 mit Mercury-Atlas 6 durch.
        </p>
        <p className="summary-text">
          In den ersten Jahren der bemannten Raumfahrt wurden Astronauten, oder
          Kosmonauten, wie sie in der damaligen Sowjetunion genannt wurden, fast
          ausschließlich aus dem Militär rekrutiert. Langjährige Erfahrungen als
          Kampf- und Testpiloten und hohes technisches Verständnis qualifizierten
          nur eine kleine Elite für den vielleicht interessantesten Beruf überhaupt.
        </p>
        <p className="summary-text">
          Das Training der Astronauten ist legendär. Allein um die G-Kräfte während eines
          Raumfluges zu überstehen, sind ausgiebige Belastungsproben in der Zentrifuge nötig.
          So traten bei den Starts der US-amerikanischen Space-Shuttles etwa 3 bis 4 g auf,
          die Kosmonauten in den Sojus-Kapseln sind hingegen bei der Landung bis zu 10 g ausgesetzt.
        </p>
        <p className="summary-text">
          Die Schwerelosigkeit im All stellt dann wiederum völlig andere Anforderungen
          an den menschlichen Körper, besonders an den Gleichgewichtssinn. Muskel- und
          Knochenschwund sind die bekanntesten Nebenwirkungen eines Aufenthaltes im Weltall.
          Für die Raumfahrer auf Langzeitmissionen bedeutet dies, ein intensives
          Sportprogramm abzuleisten - jeden Tag.
        </p>
        <p className="summary-text">
          Das physische Training der Astronauten ist nur ein kleiner Teil ihrer Ausbildung.
          Die dauert heute für eine Mission zur ISS insgesamt zwei Jahre. Um überhaupt
          ausgewählt zu werden, bedarf es einer Menge Durchhaltevermögen und auch Glück.
          Unter Tausenden Bewerbern schafft es am Ende nur eine Handvoll.
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
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Der Kontrukteur Konstantin Feoktistow und der Arzt Boris Jegorow an Bord
            von Woschod 1 waren die ersten Zivilisten im All.
          </li>
          <li>
            Der Kosmonaut Waleri Bykowski hält mit vier Tagen und 23 Stunden den
            Rekord für den längsten Soloflug der Raumfahrtgeschichte.
          </li>
          <li>
            Yang Liwei startete am 15. Oktober 2003 als erster chinesischer Raumfahrer,
            auch Taikonaut genannt, mit Shenzhou 5 ins All.
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
              <div className="astronaut-name pure-u-1">
                <div className="pure-u-1">
                  <p><a href={astronaut.link} title={astronaut.name}>{astronaut.name}</a><img src={astronaut.flag} alt={astronaut.country} title={astronaut.country} /></p>
                </div>
              </div>
              {astronaut.imgSmallUrl ?
                <div className="astronaut-img pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-8">
                  <a href={astronaut.imgUrl} title={astronaut.name}><img src={astronaut.imgSmallUrl} alt={astronaut.name} title={astronaut.name} /></a>
                </div>
              : ''}
              <div className="astronaut-data pure-u-2-3 pure-u-sm-3-4 pure-u-md-4-5 pure-u-lg-7-8">
                <div className="astronaut-life">
                  <p>* {astronaut.born}{astronaut.died ? ` † ${astronaut.died}` : ''}</p>
                </div>
                {astronaut.firstLaunch ?
                <div className="astronaut-spaceflights pure-u-1 pure-u-md-2-3 pure-u-lg-9-24">
                  <div className="astronaut-firstlaunch pure-u-1 pure-u-md-13-24">
                    <p>erster Raumflug: {astronaut.firstLaunch}</p>
                  </div>
                  <div className="astronaut-missions pure-u-1 pure-u-md-13-24">
                    <p>{astronaut.missions}</p>
                  </div>
                  <div className="astronaut-timeinspace pure-u-1 pure-u-md-11-24">
                    <p>Gesamtzeit im All: {astronaut.timeInSpace}</p>
                  </div>
                </div>
                : ''}
                {astronaut.numberOfSpacewalks ?
                <div className="astronaut-spacewalks pure-u-1 pure-u-md-2-3 pure-u-lg-4-24">
                  <div className="astronaut-numberspacewalks pure-u-md-9-24">
                    <p>EVAs: {astronaut.numberOfSpacewalks}</p>
                  </div>
                  <div className="astronaut-durationspacewalks pure-u-md-15-24">
                    <p>Gesamtdauer: {astronaut.durationOfSpacewalks}</p>
                  </div>
                </div>
                : ''}
              </div>
            </div>
  );
};
