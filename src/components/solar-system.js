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
        <p>@wolfram how to avoid border-bottom of last displayed div.item-name inside each div.type-1?</p>
      </div>
      <div id="controlArea" className="solar-system pure-u-1">
      </div>
      <div id="dataArea" className="solar-system pure-u-1">
        <div id="solarsystemTable">
          <div id="sun" className="type-1 pure-u-1">
            <a href="#" title="" className="item-name">Sonne</a>
          </div>
          <div id="innerPlanets" className="type-1 pure-u-1">
            <a href="#" className="item-name">Innere Planeten</a>
            <div id="mercury" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Merkur</a>
            </div>
            <div id="venus" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Venus</a>
            </div>
            <div id="atenAsteroids" className="collapsed type-2 pure-u-4-5">
              <a href="#" className="item-name">Aten-Typ-Asteroiden</a>
              <div className="type-3 pure-u-3-4">
                <div id="2062aten" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(2062) Aten</a>
                </div>
              </div>
            </div>
            <div id="earth" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Erde</a>
              <div className="type-3 pure-u-3-4">
                <div id="moon" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Mond</a>
                </div>
              </div>
              <div id="nearEarthObjects" className="type-3 pure-u-3-4">
                <a href="#" className="item-name">erdnahe Objekte</a>
              </div>
            </div>
            <div id="apolloAsteroids" className="collapsed type-2 pure-u-4-5">
              <a href="#" className="item-name">Apollo-Typ-Asteroiden</a>
              <div className="type-3 pure-u-3-4">
                <div id="1862apollo" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(1862) Apollo</a>
                </div>
              </div>
            </div>
            <div id="mars" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Mars</a>
              <div className="type-3 pure-u-3-4">
                <div id="phobos" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Phobos</a>
                </div>
                <div id="deimos" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Deimos</a>
                </div>
              </div>
              <div id="marsTrojanGroup" className="type-3 pure-u-3-4">
                <a href="#" className="item-name">Mars-Trojaner</a>
              </div>
            </div>
            <div id="amorAsteroids" className="collapsed type-2 pure-u-4-5">
              <a href="#" className="item-name">Amor-Typ-Asteroiden</a>
              <div id="amor1Asteroids" className="type-3 pure-u-3-4">
                <a href="#" className="item-name">Amor-I-Asteroiden</a>
              </div>
              <div id="amor2Asteroids" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Amor-II-Asteroiden</a>
                <div id="1221amor" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(1221) Amor</a>
                </div>
              </div>
              <div id="amor3Asteroids" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Amor-III-Asteroiden</a>
                <div id="1036ganymed" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(1036) Ganymed</a>
                </div>
              </div>
              <div id="amor4Asteroids" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Amor-IV-Asteroiden</a>
                <div id="3552donquixote" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(3552) Don Quixote</a>
                </div>
              </div>
            </div>
          </div>
          <div id="asteroidBelt" className="collapsed type-1 pure-u-1">
            <a href="#" className="item-name">Asteroidengürtel</a>
            <div id="innerMainbelt" className="collapsed type-2 pure-u-4-5">
              <a href="#" className="item-name">Innerer Hauptgürtel</a>
              <div id="floraGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Flora-Gruppe</a>
                <div id="8flora" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(8) Flora</a>
                </div>
              </div>
              <div id="vestaGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Vesta-Gruppe</a>
                <div id="4vesta" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(4) Vesta</a>
                </div>
              </div>
              <div id="nysaGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Nysa-Gruppe</a>
                <div id="44nysa" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(44) Nysa</a>
                </div>
              </div>
            </div>
            <div id="middleMainbelt" className="collapsed type-2 pure-u-4-5">
              <a href="#" className="item-name">Mittlerer Hauptgürtel</a>
              <div id="eunomiaGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Eunomia-Gruppe</a>
                <div id="15eunomia" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(15) Eunomia</a>
                </div>
              </div>
              <div id="gefionGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Gefion-Gruppe</a>
                <div id="1272gefion" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(1272) Gefion</a>
                </div>
              </div>
            </div>
            <div id="outerMainbelt" className="collapsed type-2 pure-u-4-5">
              <a href="#" className="item-name">Äußerer Hauptgürtel</a>
              <div id="koronisGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Koronis-Gruppe</a>
                <div id="158koronis" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(158) Koronis</a>
                </div>
              </div>
              <div id="eosGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Eos-Gruppe</a>
                <div id="221eos" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(221) Eos</a>
                </div>
              </div>
              <div id="themisGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Themis-Gruppe</a>
                <div id="24themis" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(24) Themis</a>
                </div>
              </div>
              <div id="hygieaGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Hygiea-Gruppe</a>
                <div id="10hygiea" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">(10) Hygiea</a>
                </div>
              </div>
            </div>
          </div>
          <div id="outerPlanets" className="type-1 pure-u-1">
            <a href="#" className="item-name">Äußere Planeten</a>
            <div id="jupiter" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Jupiter</a>
              <div id="jupiterMoons" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Jupiter-Monde</a>
                <div id="io" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Io</a>
                </div>
              </div>
              <div id="jupiterTrojans" className="type-3 pure-u-3-4">
                <a href="#" className="item-name">Jupiter-Trojaner</a>
              </div>
            </div>
            <div id="centaurs1" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Zentauren</a>
            </div>
            <div id="saturn" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Saturn</a>
              <div id="saturnMoons" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Saturn-Monde</a>
                <div id="mimas" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Mimas</a>
                </div>
              </div>
            </div>
            <div id="centaurs2" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Zentauren</a>
            </div>
            <div id="uranus" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Uranus</a>
              <div id="uranusMoons" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Uranus-Monde</a>
                <div id="ariel" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Ariel</a>
                </div>
              </div>
            </div>
            <div id="centaurs3" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Zentauren</a>
            </div>
            <div id="neptune" className="type-2 pure-u-4-5">
              <a href="#" className="item-name">Neptun</a>
              <div id="neptuneMoons" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Neptun-Monde</a>
                <div id="triton" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Triton</a>
                </div>
              </div>
              <div id="neptuneTrojans" className="type-3 pure-u-3-4">
                <a href="#" className="item-name">Neptun-Trojaner</a>
              </div>
            </div>
          </div>
          <div id="transneptunianObjects" className="collapsed type-1 pure-u-1">
            <a href="#" className="item-name">Transneptunische Objekte (TNO)</a>
            <div id="kuiperbelt" className="collapsed type-2 pure-u-4-5">
              <a href="#" className="item-name">Kuipergürtel</a>
              <div id="kuiperbeltObjects" className ="group collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Kuipergürtelobjekte (KBO)</a>
                <div id="pluto" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Pluto</a>
                  <div id="charon" className="type-5 pure-u-1-2">
                    <a href="#" className="item-name">Charon</a>
                  </div>
                </div>
              </div>
              <div id="sednoidGroup" className="collapsed type-3 pure-u-3-4">
                <a href="#" className="item-name">Sednoiden</a>
                <div id="sedna" className="type-4 pure-u-2-3">
                  <a href="#" className="item-name">Sedna</a>
                </div>
              </div>
            </div>
          </div>
          <div id="oortCloud" className="collapsed type-1 pure-u-1">
            <a href="#" className="item-name">Oortsche Wolke</a>
          </div>
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default SolarSystemComponent;
