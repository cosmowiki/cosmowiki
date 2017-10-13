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
        <div id="siteTitleContainer">
          <h1>Raumfahrer</h1>
          <h3>Astronauten, Komsonauten, Taikonauten</h3>
        </div>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: same tasks as in people.js</p>
      </div>
      <Summary>
        <p className="summary-text">
          Nach der Definition der <em>Fédération Aéronautique Internationale</em> (FAI) beginnt
          der Weltraum in einer Höhe von 100 km über der Erdoberfläche.
          Die <em>International Association of Space Explorers</em> (ASE) und alle internationalen
          Raumfahrtagenturen erkennen nur solche Personen als Raumfahrer an, welche
          bei einem Raumflug mindestens eine Erdumkreisung absolviert haben.
          Somit ist ein Mensch ein Raumfahrer, wenn er die 100-Kilometer-Marke überflogen
          und dabei mindestens einmal die Erde umkreist hat.
        </p>
        <div className="summary-img size-xl">
          <a href="/img/astronauts/Jeffrey_Williams_inside_the_Soyuz_TMA-8_spacecraft_lg.jpg" title="Jeffrey Williams in der Sojus-TMA-8-Kapsel - Großansicht">
            <img src="/img/astronauts/Jeffrey_Williams_inside_the_Soyuz_TMA-8_spacecraft_sm.jpg" alt="Jeffrey Williams in der Sojus-TMA-8-Kapsel" />
          </a>
          <p className="summary-img-text">
            Jeffrey Williams in der Sojus-TMA-8-Kapsel
          </p>
        </div>
        <p className="summary-text">
          Doch auch über diese Merkmale hinaus sind Raumfahrer außergewöhnliche Menschen.
          Enorme körperliche und psychische Belastbarkeit sind nur zwei von vielen
          Punkten in ihrem Anforderungsprofil. Sie sind hochintelligent und haben
          viele Jahre an Universitäten und Hochschulen studiert. Studienabschlüsse
          als Ingenieur, in Naturwissenschaften oder Medizin sind in ihren Lebensläufen
          zu finden - oft sogar mehrere davon.
        </p>
        <p className="summary-text">
          Bemannte Raumfahrt zu betreiben, war ein prestigeträchtiges Unterfangen
          für eine Nation. Zwischen den beiden Supermächten UdSSR und USA entbrannte
          ein Wettstreit darum, welches Land den ersten Menschen ins All schicken würde.
        </p>
        <div className="summary-img size-lg">
          <img src="/img/astronauts/Gagarin_in_Sweden.jpg" alt="Juri Gagarin" />
          <p className="summary-img-text">
            Juri Gagarin
          </p>
        </div>
        <p className="summary-text">
          <em>Juri Gagarin</em> umrundete dann am 12. April 1961 mit <em>Wostok 1</em> als
          erster Mensch die Erde - die Sowjets hatten dieses Rennen also gewonnen.
          Der erste US-Amerikaner im All war dann <em>Alan Shepard</em>. Am 5. Mai
          1961 absolvierte er mit <em>Mercury-Redstone 3</em> einen suborbitalen
          Flug mit einer Gipfelhöhe von 187 Kilometern. Den ersten amerikanischen
          Orbitalflug führte <em>John Glenn</em> am 20. Februar 1962 mit <em>Mercury-Atlas
          6</em> durch.
        </p>
        <p className="summary-text">
          In den ersten Jahren der bemannten Raumfahrt wurden Astronauten, oder
          Kosmonauten, wie sie in der damaligen Sowjetunion genannt wurden, fast
          ausschließlich aus dem Militär rekrutiert. Langjährige Erfahrungen als
          Kampf- und Testpiloten und hohes technisches Verständnis qualifizierten
          nur eine kleine Elite für den vielleicht interessantesten Beruf überhaupt.
          Diese Auserwählten besetzten die ersten Raumstationen und blieben bis zu
          mehreren hundert Tagen im All.
        </p>
        <div className="summary-img size-sm">
          <a href="/img/astronauts/20G_centrifuge_lg.jpg" title="20-g-Zentrifuge im Ames Research Center der NASA - Großansicht">
            <img src="/img/astronauts/20G_centrifuge_sm.jpg" alt="20-g-Zentrifuge im Ames Research Center der NASA" />
          </a>
          <p className="summary-img-text">
            20-g-Zentrifuge, Ames Research Center, NASA
          </p>
        </div>
        <p className="summary-text">
          Das Training der Astronauten ist legendär. Allein um die <em>G-Kräfte</em> während
          eines Raumfluges zu überstehen, sind ausgiebige Belastungsproben in
          der Zentrifuge nötig. So traten bei den Starts der US-amerikanischen
          Space-Shuttles etwa 3 bis 4 g auf, die Kosmonauten in den Sojus-Kapseln
          sind hingegen bei der Landung bis zu 10 g ausgesetzt.
        </p>
        <div className="summary-img">
          <a href="/img/astronauts/NASA_Apollo_17_Lunar_Roving_Vehicle_lg.jpg" title="Lunar Roving Vehicle - Großansicht">
            <img src="/img/astronauts/NASA_Apollo_17_Lunar_Roving_Vehicle_sm.jpg" alt="Lunar Roving Vehicle" />
          </a>
          <p className="summary-img-text">
            Lunar Roving Vehicle
          </p>
        </div>
        <p className="summary-text">
          Die Schwerelosigkeit im All stellt wiederum völlig andere Anforderungen
          an den menschlichen Körper, besonders an den Gleichgewichtssinn. Muskel-
          und Knochenschwund sind die bekanntesten Nebenwirkungen eines Aufenthaltes
          im Weltall. Für die Raumfahrer auf Langzeitmissionen bedeutet dies, ein
          intensives Sportprogramm abzuleisten - jeden Tag.
        </p>
        <div className="summary-img">
          <a href="/img/astronauts/Concept_Mars_colony_lg.jpg" title="Besiedlung des Mars - Großansicht">
            <img src="/img/astronauts/Concept_Mars_colony_sm.jpg" alt="Besiedlung des Mars" />
          </a>
          <p className="summary-img-text">
            Besiedlung des Mars
          </p>
        </div>
        <p className="summary-text">
          In der Ausbildung der Astronauten ist das physische Training hingegen
          nur ein kleiner Teil. Für eine Mission zur <em>Internationalen
          Raumstation</em> (ISS) werden die heutigen Raumfahrer insgesamt zwei Jahre
          lang geschult. Um überhaupt ausgewählt zu werden, bedarf es einer Menge
          Durchhaltevermögen und auch Glück. Unter vielen Tausenden Bewerbern schafft
          es am Ende nur eine Handvoll Kandidaten.
        </p>
        <p className="summary-text">
          Die Aufgaben der künftigen Raumfahrer werden sich Schritt für Schritt erweitern.
          1972 setzte <em>Eugene Cernan</em> als bislang letzter Mensch seinen Fuß auf einen
          anderen Himmelskörper, den <em>Mond</em>. Die Verlagerung künstlicher Habitate von
          Raumstationen auf (oder unter) die Oberfläche von Mond und <em>Mars</em> wird
          der nächste Meilenstein der bemannten Raumfahrt sein.
        </p>
        <p className="summary-text">
          Auch wenn aus Kostengründen künftig mehr und mehr Roboter im All zum Einsatz
          kommen, wird unser Pioniergeist immer wieder Menschen dort hoch schicken.
          Die Raumfahrer der Zukunft werden nicht nur fremde Planeten erkunden. Sie
          werden Botschafter der Menschheit in den Weiten des Weltalls sein.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            <em>German Titow</em> war bei seinem Flug mit <em>Wostok 2</em> am 6.
            August 1961 erst 25 Jahre alt. Er ist damit der jüngste Raumfahrer bisher.
          </li>
          <li>
            <em>John Glenn</em> ist bislang der älteste Raumfahrer. Bei seinem Start mit
            <em>STS-95</em> am 29. Oktober 1998 war er bereits 77 jahre alt.
          </li>
          <li>
            Der Kontrukteur <em>Konstantin Feoktistow</em> und der Arzt <em>Boris
            Jegorow</em> an Bord von <em>Woschod 1</em> waren die ersten Zivilisten im All.
          </li>
          <li>
            Der Kosmonaut <em>Waleri Bykowski</em> hält mit vier Tagen und 23 Stunden den
            Rekord für den längsten Soloflug der Raumfahrtgeschichte.
          </li>
          <li>
            <em>Yang Liwei</em> startete am 15. Oktober 2003 als erster chinesischer Raumfahrer,
            auch Taikonaut genannt, mit <em>Shenzhou 5</em> ins All.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="people module pure-u-1">
        <div id="controlArea" className="people pure-u-1">
          <div id="controllers" className="pure-u-1">
            <div id="sort" className="people pure-u-1-2 left">
              <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
              <div id="sortArea">
                <form id="sortAstronauts" className="sort-form">
                  <select name="sortAstronauts" defaultValue="sortAstronautsNameUp">
                    <option value="sortAstronautsNameUp">Name &uarr;</option>
                    <option value="sortAstronautsNameDown">Name &darr;</option>
                    <option value="sortAstronautsBornUp">geboren &uarr;</option>
                    <option value="sortAstronautsBornDown">geboren &darr;</option>
                    <option value="sortAstronautsNumberOfMissionsUp">Anzahl Missionen &uarr;</option>
                    <option value="sortAstronautsNumberOfMissionsDown">Anzahl Missionen &darr;</option>
                    <option value="sortAstronautsTimeInSpaceUp">Gesamtzeit im All &uarr;</option>
                    <option value="sortAstronautsTimeInSpaceDown">Gesamtzeit im All &darr;</option>
                    <option value="sortAstronautsFirstLaunchUp">erster Raumflug &uarr;</option>
                    <option value="sortAstronautsFirstLaunchDown">erster Raumflug &darr;</option>
                    <option value="sortAstronautsNumberOfSpacewalksUp">Anzahl EVAs &uarr;</option>
                    <option value="sortAstronautsNumberOfSpacewalksDown">Anzahl EVAs &darr;</option>
                    <option value="sortAstronautsDurationOfSpacewalksUp">EVA Gesamtdauer &uarr;</option>// not important yet, too much items w/o dates
                    <option value="sortAstronautsDurationOfSpacewalksDown">EVA Gesamtdauer &darr;</option>// not important yet, too much items w/o dates
                  </select>
                </form>
              </div>
            </div>
            <div id="filter" className="astronauts pure-u-1-2 right">
              <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
              <div id="filterArea">
                <form id="filterAstronautsByCountry" className="filter-form">
                  <label>Land:</label>
                  <select name="astronautsCountries" defaultValue="showAllCountries">
                    <option value="showAllCountries">alle</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <LetterLinks letters={allFirstLetters} />
        </div>
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
            <div className="leading-letter pure-u-1 center">
              <p name={`#${groupKey}`}>{groupKey}</p>
            </div>
            {astronauts.map((astronaut, idx) => <AstronautComponent astronaut={astronaut} key={idx} />)}
          </div>
  );
};

const AstronautComponent = ({astronaut}) => {
  return (
            <div className="astronaut-row data-row pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
              <div className="astronaut-name pure-u-1">
                <a href={astronaut.link} title={astronaut.name}>{astronaut.name}</a>
                <img src={astronaut.flag} alt={astronaut.country} title={astronaut.country} />
              </div>
              {astronaut.imgSmallUrl ?
              <div className="astronaut-img pure-u-1-3">
                <a href={astronaut.imgUrl} title={astronaut.name}><img src={astronaut.imgSmallUrl} alt={astronaut.name} title={astronaut.name} /></a>
              </div>
              : ''}
              <div className="astronaut-data pure-u-2-3">
                {astronaut.born ?
                <div className="astronaut-life pure-u-1">
                  <p className="astronaut-born">* {astronaut.born}</p>
                  {astronaut.died ? <p className="astronaut-died">† {astronaut.died}</p> : ''}
                </div>
                : ''}
                {astronaut.missions ?
                <div className="astronaut-spaceflights pure-u-1">
                  {astronaut.numberOfMissions ?
                  <div className="astronaut-missionsdata pure-u-1">
                    <p className="astronaut-numberofmissions">Flüge: {astronaut.numberOfMissions}</p>
                    <p className="astronaut-timeinspace">gesamt: {astronaut.timeInSpace}</p>
                  </div>
                  : ''}
                  {astronaut.firstLaunch ?
                  <div className="astronaut-firstlaunch pure-u-1">
                    <p>erster Raumflug: {astronaut.firstLaunch}</p>
                  </div>
                  : ''}
                </div>
                : ''}
                {astronaut.numberOfSpacewalks ?
                <div className="astronaut-spacewalks pure-u-1">
                  <p className="astronaut-numberofspacewalks">EVAs: {astronaut.numberOfSpacewalks}</p>
                  <p className="astronaut-durationofspacewalks">Gesamtdauer: {astronaut.durationOfSpacewalks}</p>
                </div>
                : ''}
              </div>
            </div>
  );
};
