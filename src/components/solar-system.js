import React from 'react';
import Notes from './notes';

const SolarSystemComponent = () => {
  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="solar-system pure-u-1 center">
        <h1>das Sonnensystem</h1>
        <h3>unsere kosmische Heimat</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram how to avoid border-bottom of last div.item-name inside each div.type-1?</p>
      </div>
      <div id="controlArea" className="solar-system pure-u-1">
      </div>
      <div id="dataArea" className="solar-system pure-u-1">
        <div id="solarsystemTable">
          <div id="sun" className="type-1 pure-u-1">
            <div className="item-name">Sonne</div>
          </div>
          <div id="innerPlanets" className="type-1 pure-u-1">
            <div className="item-name">Innere Planeten</div>
            <div id="mercury" className="type-2 pure-u-4-5">
              <div className="item-name mercury">Merkur</div>
            </div>
            <div id="venus" className="type-2 pure-u-4-5">
              <div className="item-name venus">Venus</div>
            </div>
            <div id="atenAsteroids" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Aten-Typ-Asteroiden</div>
              <div className="item-has-children type-3 pure-u-3-4">
                <div id="2062aten" className="type-4 pure-u-2-3">
                  <div className="item-name">(2062) Aten</div>
                </div>
              </div>
            </div>
            <div id="earth" className="type-2 pure-u-4-5">
              <div className="item-name">Erde</div>
              <div className="type-3 pure-u-3-4">
                <div id="moon" className="type-4 pure-u-2-3">
                  <div className="item-name">Mond</div>
                </div>
              </div>
              <div id="nearEarthObjects" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">erdnahe Objekte</div>
              </div>
            </div>
            <div id="apolloAsteroids" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Apollo-Typ-Asteroiden</div>
            </div>
            <div id="mars" className="type-2 pure-u-4-5">
              <div className="item-name">Mars</div>
              <div className="item-has-children type-3 pure-u-3-4">
                <div id="phobos" className="type-4 pure-u-2-3">
                  <div className="item-name">Phobos</div>
                </div>
                <div id="deimos" className="type-4 pure-u-2-3">
                  <div className="item-name">Deimos</div>
                </div>
              </div>
              <div id="marsTrojanGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Mars-Trojaner</div>
              </div>
            </div>
            <div id="amorAsteroids" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Amor-Typ-Asteroiden</div>
              <div id="amor1Asteroids" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Amor-I-Asteroiden</div>

              </div>
              <div id="amor2Asteroids" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Amor-II-Asteroiden</div>
                <div id="1221amor" className="type-4 pure-u-2-3">
                  <div className="item-name">(1221) Amor</div>
                </div>
              </div>
              <div id="amor3Asteroids" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Amor-III-Asteroiden</div>
                <div id="1036ganymed" className="type-4 pure-u-2-3">
                  <div className="item-name">(1036) Ganymed</div>
                </div>
              </div>
              <div id="amor4Asteroids" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Amor-IV-Asteroiden</div>
                <div id="3552donquixote" className="type-4 pure-u-2-3">
                  <div className="item-name">(3552) Don Quixote</div>
                </div>
              </div>
            </div>
          </div>
          <div id="asteroidBelt" className="item-has-children type-1 pure-u-1">
            <div className="item-name">Asteroidengürtel</div>
            <div id="innerMainbelt" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Innerer Hauptgürtel</div>
              <div id="floraGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Flora-Gruppe</div>
                <div id="8flora" className="type-4 pure-u-2-3">
                  <div className="item-name">(8) Flora</div>
                </div>
              </div>
              <div id="vestaGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Vesta-Gruppe</div>
                <div id="4vesta" className="type-4 pure-u-2-3">
                  <div className="item-name">(4) Vesta</div>
                </div>
              </div>
              <div id="nysaGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Nysa-Gruppe</div>
                <div id="44nysa" className="type-4 pure-u-2-3">
                  <div className="item-name">(44) Nysa</div>
                </div>
              </div>
            </div>
            <div id="middleMainbelt" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Mittlerer Hauptgürtel</div>
              <div id="eunomiaGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Eunomia-Gruppe</div>
                <div id="15eunomia" className="type-4 pure-u-2-3">
                  <div className="item-name">(15) Eunomia</div>
                </div>
              </div>
              <div id="gefionGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Gefion-Gruppe</div>
                <div id="1272gefion" className="type-4 pure-u-2-3">
                  <div className="item-name">(1272) Gefion</div>
                </div>
              </div>
            </div>
            <div id="outerMainbelt" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Äußerer Hauptgürtel</div>
              <div id="koronisGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Koronis-Gruppe</div>
                <div id="158koronis" className="type-4 pure-u-2-3">
                  <div className="item-name">(158) Koronis</div>
                </div>
              </div>
              <div id="eosGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Eos-Gruppe</div>
                <div id="221eos" className="type-4 pure-u-2-3">
                  <div className="item-name">(221) Eos</div>
                </div>
              </div>
              <div id="themisGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Themis-Gruppe</div>
                <div id="24themis" className="type-4 pure-u-2-3">
                  <div className="item-name">(24) Themis</div>
                </div>
              </div>
              <div id="hygieaGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Hygiea-Gruppe</div>
                <div id="10hygiea" className="type-4 pure-u-2-3">
                  <div className="item-name">(10) Hygiea</div>
                </div>
              </div>
            </div>
          </div>
          <div id="outerPlanets" className="type-1 pure-u-1">
            <div className="item-name">Äußere Planeten</div>
            <div id="jupiter" className="type-2 pure-u-4-5">
              <div className="item-name">Jupiter</div>
              <div id="jupiterMoons" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Jupiter-Monde</div>
                <div id="io" className="type-4 pure-u-2-3">
                  <div className="item-name">Io</div>
                </div>
              </div>
              <div id="jupiterTrojans" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Jupiter-Trojaner</div>
              </div>
            </div>
            <div id="centaurs1" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Zentauren</div>
            </div>
            <div id="saturn" className="type-2 pure-u-4-5">
              <div className="item-name">Saturn</div>
              <div id="saturnMoons" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Saturn-Monde</div>
                <div id="mimas" className="type-4 pure-u-2-3">
                  <div className="item-name">Mimas</div>
                </div>
              </div>
            </div>
            <div id="centaurs2" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Zentauren</div>
            </div>
            <div id="uranus" className="type-2 pure-u-4-5">
              <div className="item-name">Uranus</div>
              <div id="uranusMoons" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Uranus-Monde</div>
                <div id="ariel" className="type-4 pure-u-2-3">
                  <div className="item-name">Ariel</div>
                </div>
              </div>
            </div>
            <div id="centaurs3" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Zentauren</div>
            </div>
            <div id="neptune" className="type-2 pure-u-4-5">
              <div className="item-name">Neptun</div>
              <div id="neptuneMoons" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Neptun-Monde</div>
                <div id="triton" className="type-4 pure-u-2-3">
                  <div className="item-name">Triton</div>
                </div>
              </div>
              <div id="neptuneTrojans" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Neptun-Trojaner</div>
              </div>
            </div>
          </div>
          <div id="transneptunianObjects" className="item-has-children type-1 pure-u-1">
            <div className="item-name">Transneptunische Objekte (TNO)</div>
            <div id="kuiperbelt" className="item-has-children type-2 pure-u-4-5">
              <div className="item-name">Kuipergürtel</div>
              <div id="kuiperbeltObjects" className ="group item-has-children type-3 pure-u-3-4">
                <div className="item-name">Kuipergürtelobjekte (KBO)</div>
                <div id="pluto" className="type-4 pure-u-2-3">
                  <div className="item-name">Pluto</div>
                  <div id="charon" className="type-5 pure-u-1-2">
                    <div className="item-name">Charon</div>
                  </div>
                </div>
              </div>
              <div id="sednoidGroup" className="item-has-children type-3 pure-u-3-4">
                <div className="item-name">Sednoiden</div>
                <div id="sedna" className="type-4 pure-u-2-3">
                  <div className="item-name">Sedna</div>
                </div>
              </div>
            </div>
          </div>
          <div id="oortCloud" className="item-has-children type-1 pure-u-1">
            <div className="item-name">Oortsche Wolke</div>
          </div>
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default SolarSystemComponent;
