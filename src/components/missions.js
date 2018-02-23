import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const MissionsComponent = ({missions}) => {
  return (
    <main role="main" className="missions pure-u-1 center">
      <div id="siteTitle" className="missions pure-u-1">
        <div id="siteTitleContainer">
          <h1>Missionen</h1>
          <h3>3 ... 2 ... 1 ... Lift-off!</h3>
        </div>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: pls make the filter work with FilterRows as in stars-site</p>
        <p>@wolfram: pls make the sorter and filters work</p>
        <p>@wolfram: pls let the toggle-switches for sort and filter hide each other on hover on small screens</p>
      </div>
      <Summary>
        <p className="summary-text">
          Die Geschichte der Raumfahrt begann schon lange vor <em>Sputnik 1</em> und auch
          lange vor den großen Pionieren der Raketentechnik, <em>Konstantin
          Ziolkowski</em>, <em>Robert Goddard</em>, <em>Hermann Oberth</em> und <em>Max Valier</em>.
          Schon im Jahr 1232 sollen in China die ersten Raketen zu militärischen
          Zwecken eingesetzt worden sein.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/missions/tsiolkovsky.jpg" title="Konstantin Ziolkowski - Großansicht">
            <img src="/img/missions/tsiolkovsky.jpg" alt="Konstantin Ziolkowski" />
          </a>
          <p className="summary-img-text">
            Konstantin Ziolkowski
          </p>
        </div>
        <p className="summary-text">
          Das Militär war oft genug die treibende Kraft hinter technischen Entwicklungen,
          so auch in der Raumfahrt. Die ersten Raketenflugzeuge, wie zum Beispiel die
          Bachem <em>Ba 349</em> waren rein zu kriegerischen Zwecken entwickelt
          worden - ebenso wie die erste funktionsfähige Großrakete <em>Aggregat
          4</em>, die so genannte V2.
        </p>
        <div className="summary-img">
          <a href="/img/missions/sputnik1_lg.jpg" title="Sputnik 1 - Großansicht">
            <img src="/img/missions/sputnik1_sm.jpg" alt="Sputnik 1" />
          </a>
          <p className="summary-img-text">
            Sputnik 1
          </p>
        </div>
        <p className="summary-text">
          Kurz vor dem Ende des Zweiten Weltkrieges begann der Wettstreit zwischen
          der UdSSR und den USA um die Vorreiterrolle in der Raketentechnik.
          Wer rekrutiert die besten deutschen Wissenschaftler und Techniker, wer
          erbeutet die detailiertesten Baupläne und die wertvollsten Bauteile?
          Wer schafft es als Erster, mit diesen Ressourcen eine funktionsfähige Rakete zu starten?
          Die deutsche A4 stellt also in diesen beiden Ländern die Grundlage für
          die Raketentechnik und die Raumfahrt dar.
        </p>
        <p className="summary-text">
          Nach vielen Rückschlägen aber auch einigen erfolgreichen Starts auf beiden
          Seiten schossen dann die Sowjets am 4. Oktober 1957 mit <em>Sputnik
          1</em> den ersten künstlichen Satelliten in eine Erdumlaufbahn. Diese
          silbrig glänzende Kugel, 58 cm im Durchmesser, mit ihren vier Antennen
          war das erste von Menschen geschaffene Objekt im All. Die USA erlebten
          ihren "Sputnik-Schock" und starteten nur knapp vier Monate später,
          am 1. Februar 1958 ihren ersten Satelliten <em>Explorer 1</em>.<br />
          Der "Wettlauf ins All" hatte begonnen.
        </p>
        <div className="summary-img size-xl">
          <a href="/img/missions/Challenger_catastrophe_lg.jpg" title="Challenger-Katastrophe - Großansicht">
            <img src="/img/missions/Challenger_catastrophe_sm.jpg" alt="Challenger-Katastrophe" />
          </a>
          <p className="summary-img-text">
            Challenger-Katastrophe
          </p>
        </div>
        <p className="summary-text">
          Es entwickelte sich ein Kopf-an-Kopf-Rennen, bei dem mal die eine Seite,
          mal die andere große Erfolge aber auch schwere Katastrophen zu verzeichnen hatte.
          Neben den Tragödien von <em>Apollo 1</em> und <em>Sojus 11</em> erinnert
          uns jeder Raumfahrtunfall daran, dass Reisen ins All hochkomplex und immer
          noch sehr riskant sind.
        </p>
        <div className="summary-img size-lg">
          <a href="/img/missions/Apollo_11_first_step.jpg" title="Neil Armstrong betritt den Mond - Großansicht">
            <img src="/img/missions/Apollo_11_first_step.jpg" alt="Neil Armstrong betritt den Mond" />
          </a>
          <p className="summary-img-text">
            Neil Armstrong betritt den Mond
          </p>
        </div>
        <p className="summary-text">
          Im Lauf der Jahrzehnte wuchs die Zahl der Raumfahrtnationen um Länder
          wie Japan, Indien und China an. Europa bündelte seine Fähigkeiten und
          Finanzen in der <em>ESA</em>. Dutzende Meilensteine haben die Techniker,
          Ingenieure und Raumfahrer auf der ganzen Welt bislang erreicht:<br />
          <em>Juri Gagarin</em> war der erste Mensch im All, unzählige Satelliten
          für die Forschung, Spionage und Nachrichtenübermittlung und riesige
          Raumstationen kreisen im Erdorbit, <em>Weltraumausstiege</em> - sogar auf dem
          Mond, <em>Landesonden</em> - auch <em>Rover</em> auf anderen Planeten,
          ja auf Asteroiden, <em>Raumsonden</em> am Rand unseres
          Sonnensystems, <em>Weltraumteleskope</em>, die phantastische Erkenntnisse
          und Aufnahmen liefern.
        </p>
        <div className="summary-img">
          <a href="/img/missions/voyager_spacecraft_lg.jpg" title="Voyager-Raumsonde - Großansicht">
            <img src="/img/missions/voyager_spacecraft_sm.jpg" alt="Voyager-Raumsonde" />
          </a>
          <p className="summary-img-text">
            Voyager-Raumsonde
          </p>
        </div>
        <p className="summary-text">
          Mit kreativen Ideen und dem Besten, das Wissenschaft und Technik heute zu
          bieten haben, erweitert die Raumfahrt den Horizont. Noch in diesem Jahrhundert
          werden Menschen auf dem Mars landen, werden Sonden sich durch die Eispanzer
          der Jupiter- bzw. Saturnmonde <em>Europa</em> und <em>Enceladus</em> schmelzen
          und die darunterliegenden Ozeane erkunden. <em>Gravitationswellen</em> werden
          mit <em>eLISA</em> weiter erforscht werden, <em>Dunkle Energie</em> und <em>Dunkle
          Materie</em> mit dem <em>Euclid-Weltraumteleskop</em>.
        </p>
        <div className="summary-img">
          <a href="/img/missions/iss_lg.jpg" title="ISS - Großansicht">
            <img src="/img/missions/iss_sm.jpg" alt="ISS" />
          </a>
          <p className="summary-img-text">
            International Space Station
          </p>
        </div>
        <p className="summary-text">
          Doch Raumfahrt ist nicht mehr länger die Domäne von Staaten und Raumfahrtorganisationen.
          Durch den Einstieg privater Unternehmen gelangen neue Impulse in die Branche.
          Preisgünstige Konzepte um ins All zu fliegen werden nicht nur den <em>Weltraumtourismus</em> fördern.
          Die Errichtung einer <em>Mondbasis</em> und großer <em>Raumstationen</em> steht
          ebenso auf der Agenda wie die Förderung von Seltenen Erden und anderen wertvollen Metallen auf Asteroiden.
          Mit neuen Antrieben werden Menschen eines fernen Tages auch Reisen antreten,
          die heute noch unvorstellbar sind. Bis dahin ist jede einzelne Raumfahrtmission
          ein großer Schritt für die Menschheit.
        </p>

        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Die <em>Fédération Aéronautique Internationale</em> (FAI) definiert
            die Grenze zum Weltraum bei 100 km Höhe über dem Meeresspiegel.
          </li>
          <li>
            Das <em>Space-Shuttle Challenger</em> transportierte am 30. Oktober 1985 mit
            der Mission <em>STS-61-A</em> acht Astronauten ins All.
          </li>
          <li>
            Am 28. April 2001 startete <em>Dennis Tito</em> als erster Weltraumtourist
            an Bord von <em>Sojus TM-32</em> zur Internationalen Raumstation.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="missions module pure-u-1">
        <div id="controlArea" className="missions pure-u-1">
          <div id="controllers" className="pure-u-1">
            <div id="sort" className="missions pure-u-1-2 left">
              <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
              <div id="sortArea">
                <form id="sortMissions" className="sort-form">
                  <select name="sortMissions" defaultValue="sortMissionsLaunch">
                    <option value="sortMissionsLaunch">Startdatum</option>
                    <option value="sortMissionsEnd">Missionsende</option>
                    <option value="sortMissionsDuration">Missionsdauer</option>
                    <option value="sortMissionsName">alphabetisch</option>
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
            <div id="filter" className="missions pure-u-1-2 right">
              <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
              <div id="filterArea">
                <form id="filterMissionsByCategory" className="filter-form">
                  <label>Kategorie:</label>
                  <select name="missionsCategories" defaultValue="showAllCategories">
                    <option value="showAllCategories">alle</option>
                    <option value="showManned">bemannte Missionen</option>
                    <option value="showUnmanned">unbemannte Missionen</option>
                    <option value="showSatellites">Satelliten</option>
                    <option value="showSpaceprobes">Raumsonden</option>
                    <option value="showSpacestations">Raumstationen</option>
                    <option value="showSpacetelescopes">Weltraumteleskope</option>
                  </select>
                </form>
                <form id="filterMissionsByCountry" className="filter-form">
                  <label>Land:</label>
                  <select name="missionsCountries" defaultValue="all">
                    <option value="all">alle</option>
                  </select>
                </form>
                <form id="filterMissionsByDestination" className="filter-form">
                  <label>Ziel:</label>
                  <select name="missionsDestinations" defaultValue="all">
                    <option value="all">alle</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="missionsTable">
          {missions.map((mission, idx) => <MissionComponent mission={mission} key={idx}/>)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default MissionsComponent;
const flags = (countries) => {
  const flagimages = countries.map(country => <img src={"/img/flags/" + country + ".png"} alt={country} title={country} key={country} />);
  return <p className="mission-country">{flagimages}</p>
};
const targets = (destinations) => {
  const targetLinks = destinations.map(destination => <a href={destination} title={destination} key={destination}>{decodeURIComponent(destination).replace('https://de.wikipedia.org/wiki/','').replace(/_\(.+\)/,'').replace(/_/gi,' ')}</a>).map((item, index) => [index > 0 && ', ', item ]);
  return <p className="mission-destination">{targetLinks}</p>
};
const MissionComponent = ({mission}) => {
  return (
    <div className="mission-row data-row pure-u-1">
      <div className="mission-info pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-2-5 center">
        <p className="mission-name"><a href={mission.link} title={mission.name}>{mission.name}</a></p>
        {mission.countries.length == 0 ? '' : flags(mission.countries)}
        {mission.name2 ? <p className="mission-name2">({mission.name2})</p> : ''}
      </div>
      <div className="mission-data pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 pure-u-lg-3-5 center">
        <div className="mission-data1 pure-u-md-3-5 pure-u-lg-1-2">
          <p className="mission-launch pure-u-md-7-24 center">{mission.launchDate}</p>
          {mission.endDate ? <p className="mission-dash pure-u-md-1-24 center"> - </p> : <p className="mission-dash pure-u-md-1-24 center empty"></p>}
          {mission.endDate ? <p className="mission-end pure-u-md-7-24 center">{mission.endDate}</p> : <p className="mission-end pure-u-md-7-24 center empty"></p>}
          {mission.duration ? <p className="mission-duration pure-u-md-9-24">({mission.duration})</p> : ''}
        </div>
        <div className="mission-data2 pure-u-md-2-5 pure-u-lg-1-2">
          {targets(mission.destinations)}
        </div>
      </div>
    </div>
  );
};

const RocketLink = ({rocket}) => {
  return (
    <a href={rocket.wikipediaUrl}>{rocket.name}</a>
  );
};

const PadLink = ({pad}) => {
  return (
    <a href={pad.wikipediaUrl}>{pad.name}</a>
  );
};

// <div className="missionImg pure-u-1 pure-u-sm-1-5 center">
//   <a href={mission.wikipediaUrl}><img src={mission.imageUrl} alt={mission.name} /></a>
//   <small>Bild: {mission.imageSrc}</small>
// </div>
