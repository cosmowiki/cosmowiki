import React from 'react';
import Notes from './notes';

const SolarSystemComponent = () => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="solar-system pure-u-1 center">
        <h1>das Sonnensystem</h1>
        <h3>unsere kosmische Heimat</h3>
      </div>
      <div id="controlArea" className="solar-system pure-u-1">
      </div>
      <div id="dataArea" className="solar-system pure-u-1">
        <div id="solarsystemTable">
          <div id="sun" className="sun group1 pure-u-1">
            <div className="solsys-name">Sonne</div>
          </div>
          <div id="innerPlanets" className="group1 pure-u-1">
            <div className="solsys-name">Innere Planeten</div>
            <div id="mercury" className="planet mercury group2 pure-u-3-4">
              <div className="solsys-name">Merkur</div>
            </div>
            <div id="venus" className="planet venus group2 pure-u-3-4">
              <div className="solsys-name">Venus</div>
            </div>
            <div id="atenAsteroids" className="aten-asteroids collapsable group2 pure-u-3-4">
              <div className="solsys-name">Aten-Typ-Asteroiden</div>
            </div>
            <div id="earth" className="planet earth group2 pure-u-3-4">
              <div className="solsys-name">Erde</div>
            </div>
            <div id="earthMoon" className="earth moon group4 pure-u-1-4">
              <div className="solsys-name">Mond</div>
            </div>
            <div id="nearEarthObjects" className="earth near-earth-objects collapsable group3 pure-u-1-2">
              <div className="solsys-name">erdnahe Objekte</div>
            </div>
            <div id="apolloAsteroids" className="apollo-asteroids collapsable group2 pure-u-3-4">
              <div className="solsys-name">Apollo-Typ-Asteroiden</div>
            </div>
            <div id="mars" className="mars group2 pure-u-3-4">
              <div className="solsys-name">Mars</div>
            </div>
            <div id="mars1" className="mars moon group4 pure-u-1-4">
              <div className="solsys-name">Phobos</div>
            </div>
            <div id="mars2" className="mars moon group4 pure-u-1-4">
              <div className="solsys-name">Deimos</div>
            </div>
            <div id="marsTrojans" className="mars mars-trojans collapsable group3 pure-u-1-2">
              <div className="solsys-name">Mars-Trojaner</div>
            </div>
            <div id="amorAsteroids" className="amor-asteroids collapsable group2 pure-u-3-4">
              <div className="solsys-name">Amor-Typ-Asteroiden</div>
            </div>
          </div>
          <div id="asteroidBelt" className="asteroid-belt collapsable group1 pure-u-1">
            <div className="solsys-name">Asteroidengürtel</div>
          </div>
          <div id="outerPlanets" className="group1 pure-u-1">
            <div className="solsys-name">Äußere Planeten</div>
            <div id="jupiter" className="planet jupiter group2 pure-u-3-4">
              <div className="solsys-name">Jupiter</div>
            </div>
            <div id="jupiterMoons" className="jupiter jupiter-moons collapsable group3 pure-u-1-2">
              <div className="solsys-name">Jupiter-Monde</div>
            </div>
            <div id="jupiter1" className="jupiter moon group4 pure-u-1-4">
              <div className="solsys-name">Jupiter I</div>
            </div>
            <div id="jupiterTrojans" className="jupiter jupiter-trojans collapsable group3 pure-u-1-2">
              <div className="solsys-name">Jupiter-Trojaner</div>
            </div>
            <div id="centaurs1" className="centaurs-1 collapsable group2 pure-u-3-4">
              <div className="solsys-name">Zentauren</div>
            </div>
            <div id="saturn" className="planet saturn group2 pure-u-3-4">
              <div className="solsys-name">Saturn</div>
            </div>
            <div id="saturnMoons" className="saturn saturn-moons collapsable group3 pure-u-1-2">
              <div className="solsys-name">Saturn-Monde</div>
            </div>
            <div id="saturn1" className="saturn moon group4 pure-u-1-4">
              <div className="solsys-name">Saturn I</div>
            </div>
            <div id="centaurs2" className="centaurs-2 collapsable group2 pure-u-3-4">
              <div className="solsys-name">Zentauren</div>
            </div>
            <div id="uranus" className="planet uranus group2 pure-u-3-4">
              <div className="solsys-name">Uranus</div>
            </div>
            <div id="uranusMoons" className="uranus uranus-moons collapsable group3 pure-u-1-2">
              <div className="solsys-name">Uranus-Monde</div>
            </div>
            <div id="uranus1" className="uranus moon group4 pure-u-1-4">
              <div className="solsys-name">Uranus I</div>
            </div>
            <div id="centaurs3" className="centaurs-3 collapsable group2 pure-u-3-4">
              <div className="solsys-name">Zentauren</div>
            </div>
            <div id="neptune" className="planet neptune group2 pure-u-3-4">
              <div className="solsys-name">Neptun</div>
            </div>
            <div id="neptuneMoons" className="neptune neptune-moons collapsable group3 pure-u-1-2">
              <div className="solsys-name">Neptun-Monde</div>
            </div>
            <div id="neptune1" className="neptune moon group4 pure-u-1-4">
              <div className="solsys-name">Neptun I</div>
            </div>
            <div id="neptuneTrojans" className="neptune neptune-trojans collapsable group3 pure-u-1-2">
              <div className="solsys-name">Neptun-Trojaner</div>
            </div>
          </div>
          <div id="transneptunianObjects" className="transneptunian-objects group1 pure-u-1">
            <div className="solsys-name">Transneptunische Objekte</div>
          </div>
          <div id="kuiperBelt" className="transneptunian-objects kuiper-belt collapsable group2 pure-u-3-4">
            <div className="solsys-name">Kuipergürtel</div>
          </div>
          <div id="sedna" className="transneptunian-objects sedna group3 pure-u-1-2">
            <div className="solsys-name">Sedna</div>
          </div>
          <div id="oortCloud" className="oort-cloud collapsable group1 pure-u-1">
            <div className="solsys-name">Oortsche Wolke</div>
          </div>
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default SolarSystemComponent;

////$query = "SELECT  FROM solsys ORDER by order";
////if ($result = mysqli_query($link, $query)) {
////// fetch object array
////	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
////		echo "<div class=\"solsysRow $category $name $parent\">
////					<div class=\"solsysItem\">
////						<a onMouseOver=\"toggleIn($name)\" onMouseOut=\"toggleOut($name)\" href=\'$link\'>$name</a>
////					</div>
////					<div class=\"solsysInfoBox $category $name $parent\">
////						<!--<div class=\"solsysParent\">geh&ouml;rt zu: $parent</div>
////						<div class=\"solsysCategory\">Kategorie: $category</div>-->
////						<div class=\"solsysInfo\">$info</div>
////					</div>
////				</div>";
