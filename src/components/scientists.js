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
        <div id="siteTitleContainer">
          <h1>Wissenschaftler</h1>
          <h3>Astronomen, Kosmologen, Physiker</h3>
        </div>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: same tasks as in people.js</p>
      </div>
      <Summary>
        <p className="summary-text">
          Das Universum ist voller Rätsel, und Millionen Wissenschaftler bemühen
          sich Tag für Tag, all die mysteriösen Zusammenhänge zu entschlüsseln,
          um die Natur des Größten und Kleinsten zu beschreiben. Sie stellen Hypothesen
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
          und warum bewegen sich einige, andere hingegen nicht? Oder bewegen sie
          sich vielleicht doch? Woher kommt das Mondlicht und wer oder was verbirgt
          sich hinter seinem Gesicht? Erscheint ein Stern um die gleiche Zeit wieder
          am Nachthimmel wie im Vorjahr? Ist es denn ein Stern? Was ist ein Stern?
        </p>
        <p className="summary-text">
          Es hat Jahrtausende gedauert, das heutige Weltbild zu formen. Generation
          für Generation geben Lehrer ihre Ansichten an die Schüler weiter, und
          manchmal findet sich unter ihnen einer, der zweifelt, der überprüft, der
          wagemutig genug ist, überhaupt neue Fragen zu stellen. Von der richtigen
          Frage geht der Weg zur Erkenntnis über eine zündende Idee hin zu interessanten
          Theorien und vereinfachenden Gleichungen.
        </p>
        <div className="summary-img size-xs float-right">
          <a href="/img/scientists/E_mc_2_IMG_0859.jpg" title="E = mc², Albert Einstein, 1905 - Großansicht">
            <img src="/img/scientists/E_mc_2_IMG_0859.jpg" alt="E = mc², Albert Einstein, 1905" />
          </a>
          <p className="summary-img-text">
            E = mc², Albert Einstein, 1905
          </p>
        </div>
        <p className="summary-text">
          Immer wieder gelang es mutigen Philosophen, Mathematikern, Astronomen,
          Kosmologen und Physikern alte Dogmen und Irrwege zu widerlegen und ihre
          Überzeugungen gegen Widerstände zu verteidigen. Die Erde ist keine Scheibe,
          aber wie sieht sie wirklich aus? Sie ist auch nicht das Zentrum des
          Universums, sondern sie bewegt sich um die Sonne herum. Warum spüren wir
          nichts von dieser Bewegung? Ist die Sonne tatsächlich das Zentrum von allem?
          Was liegt hinter den Sternen? Jede Antwort wirft zugleich neue Fragen auf, und
          manch neue Idee weckt Zweifel an alten Lehrsätzen.
        </p>
        <div className="summary-img size-xl float-left">
          <a href="/img/scientists/Lunar_eclipse_al-Biruni_lg.jpg" title="Theorie der Mondfinsternisse, al-Biruni - Großansicht">
            <img src="/img/scientists/Lunar_eclipse_al-Biruni_sm.jpg" alt="Theorie der Mondfinsternisse, al-Biruni" />
          </a>
          <p className="summary-img-text">
            Theorie der Mondfinsternisse, al-Biruni
          </p>
        </div>
        <p className="summary-text">
          Beobachten und experimentieren, protokollieren und berechnen, schlussfolgern
          und beweisen - systematisch und gewissenhaft arbeiten Forscher an Schreibtischen,
          im Labor oder im Observatorium, und doch ist es oft der Zufall, die Inspiration
          oder ein fallender Apfel, der die Lösung bringt. So arbeitet sich die Wissenschaft
          vor bis an die Grenzen des Begreifbaren, und über all den kleinen und
          großen Rätseln steht am Ende die eine zentrale Frage nach dem Ursprung
          der Welt, nach der Schöpfung selbst, nach dem Göttlichen in uns. 42 ;-)
        </p>
        <div className="summary-img float-right size-lg">
          <a href="/img/scientists/Max_Planck_lg.jpg" title="Max Planck - Großansicht">
            <img src="/img/scientists/Max_Planck_sm.jpg" alt="Max Planck" />
          </a>
          <p className="summary-img-text">
            Max Planck
          </p>
        </div>
        <p className="summary-text">
          In der Antike versuchte <em>Eratosthenes</em> den Umfang der Erde zu berechnen,
          während die Ägypter den <em>Schalttag</em> alle vier Jahre einführten. Zu dieser
          Zeit bestand der äußerst genaue <em>Maya-Kalender</em> vermutlich schon seit 3000 Jahren,
          und in China war etwa 900 Jahre zuvor eine Sonnenfinsternis aufgezeichnet
          worden. Hatte der indische Gelehrte <em>Aryabhata</em> schon 500 n. Chr. eine Idee
          von einem heliozentrischen Weltbild - 1000 Jahre vor der <em>Kopernikanischen Wende</em>?
        </p>
        <div className="summary-img float-left size-lg">
          <a href="/img/scientists/Stephen_Hawking.StarChild.jpg" title="Stephen Hawking - Großansicht">
            <img src="/img/scientists/Stephen_Hawking.StarChild.jpg" alt="Stephen Hawking" />
          </a>
          <p className="summary-img-text">
            Stephen Hawking
          </p>
        </div>
        <p className="summary-text">
          Wie Perlen auf einer Schnur reihen sich die Erkenntnisse über unsere Welt
          in der Geschichte aneinander. Als um 1500 im arabischen Raum der Islam
          und die Astronomie gleichermaßen ihre höchste Blüte erreichen, explodiert
          auch in Europa nach den Jahrhunderten des finsteren Mittelalters der Forscherdrang.
          Von <em>Regiomontanus</em>, <em>Nikolaus Kopernikus</em> und <em>Tycho
          Brahe</em> zieht sich eine Linie über <em>Johann Bayer</em>, <em>Johannes
          Kepler</em> und <em>Galileo Galilei</em> bis hin zu <em>Christiaan
          Huygens</em>, <em>Giovanni Domenico Cassini</em> und <em>Isaac Newton</em>.
        </p>
        <div className="summary-img float-right size-lg">
          <a href="/img/scientists/Columbia_Supercomputer_-_NASA_Advanced_Supercomputing_Facility_lg.jpg" title="Columbia Supercomputer - NASA - Großansicht">
            <img src="/img/scientists/Columbia_Supercomputer_-_NASA_Advanced_Supercomputing_Facility_sm.jpg" alt="Columbia Supercomputer - NASA" />
          </a>
          <p className="summary-img-text">
            Columbia Supercomputer - NASA
          </p>
        </div>
        <p className="summary-text">
          Nach den klassischen Astronomen versuchten ab dem 18. Jahrhundert die Chemiker
          und Physiker die Welt zunehmend präziser zu erklären. Die Berechnung der
          endlichen <em>Lichtgeschwindigkeit</em>, die Erforschung von Gasen und
          Verbrennungsvorgängen und Erkenntnisse über die geologische Entwicklung
          unseres Planeten waren Meilensteine, die zu Eckpfeilern der heutigen
          Naturwissenschaften wurden.
        </p>
        <p className="summary-text">
          Heute - nach der der Begründung der <em>Quantenphysik</em> durch <em>Max
          Planck</em> und <em>Albert Einsteins Relativitätstheorie</em>,
          der Entdeckung der <em>Radioaktivität</em> durch <em>Marie Curie</em>,
          der Erklärung der <em>Kernspaltung</em> durch <em>Otto Hahn</em> und <em>Lise
          Meitner</em> und der Darstellung stellarer <em>Fusionsprozesse</em> durch <em>Hans
          Bethe</em> und <em>Carl Friedrich von Weizsäcker</em>, erstellen Superrechner
          komplexe Modelle von <em>Schwarzen Löchern</em> und <em>Gravitationswellen</em> oder
          vom <em>Urknall</em>.
        </p>
        <p className="summary-text">
          Die Aufgaben der kommenden Wissenschaftler werden immer komplexer, ihre
          Arbeiten immer spezialisierter. Der Mensch wird vielleicht niemals alles
          verstehen, möglicherweise ist unser Gehirn dazu nicht im Stande.
          Doch er wird es immer versuchen.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Schon die Sumerer und Babylonier teilten eine Stunde ihrem <em>Sexagesimalsystem</em> folgend
            in 60 Minuten auf.
          </li>
          <li>
            Der arabische Gelehrte Abu Ali al-Hasan ibn <em>al-Heithem</em> stellte bereits
            um 1000 n. Chr. Vergrößerungslinsen aus Glas her.
          </li>
          <li>
            <em>Galileo Galilei</em> entdeckte 1610 die <em>Saturnringe</em>, deutete
            sie aber als "Henkel". Erst <em>Christiaan Huygens</em> beschrieb sie 1655 korrekt.
          </li>
          <li>
            Am 13. März 1781 entdeckte <em>Wilhelm Herschel</em> den <em>Uranus</em>.
            Bis dahin waren nur Merkur, Venus, Mars, Jupiter und Saturn bekannt.
          </li>
          <li>
            Das <em>Periodensystem der Elemente</em> wurde 1869 fast zeitgleich
            von <em>Dmitri Mendelejew</em> sowie von <em>Lothar Meyer</em> entwickelt.
          </li>
          <li>
            Der Astrophysiker Jerry R. Ehman zeichnete am 15. August 1977 im Rahmen
            eines <em>SETI</em>-Projekts das <em>Wow!-Signal</em> auf.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="people module pure-u-1">
        <div id="controlArea" className="people pure-u-1">
          <div id="controllers" className="pure-u-1">
            <div id="sort" className="people pure-u-1-2 left">
              <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
              <div id="sortArea">
                <form id="sortScientists" className="sort-form">
                  <select name="sortScientists" defaultValue="sortScientistsName">
                    <option value="sortScientistsName">Name</option>
                    <option value="sortScientistsBorn">Geburtsdatum </option>// not important yet, too much items w/o dates
                  </select>
                </form>
                <div id="toggleAscDesc">
                  <label>
                    <input className="switch" type="checkbox" />
                    <span className="slider"></span>
                    <span className="text"></span>
                  </label>
                </div>
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
            <div className="leading-letter pure-u-1 center">
              <p name={`#${groupKey}`}>{groupKey}</p>
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
