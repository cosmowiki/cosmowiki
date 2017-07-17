import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const SolarSystemComponent = () => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="solar-system pure-u-1 center">
        <h1>das Sonnensystem</h1>
        <h3>unsere kosmische Heimat</h3>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram how to avoid border-bottom of last displayed div.item-name inside each div.type-1?</p>
      </div>
      <Summary>
        <p className="summary-text">
          In klaren Nächten sehen wir manchmal <em>Merkur</em>, <em>Venus</em>, <em>Mars</em>, <em>Jupiter</em> oder <em>Saturn</em> einzeln
          oder zu mehreren am Himmel stehen. Sie scheinen sich im Lauf der Zeit dabei etwa
          auf einer Linie zu bewegen. Im Altertum wurden sie deshalb als <em>Wandelsterne</em> bezeichnet.
          Es ist diese Linie, oder besser gesagt Ebene, die den Wissenschaftlern
          den wohl wichtigsten Hinweis auf die mögliche Entstehungsgeschichte unseres Heimatsystems lieferte.
        </p>
        <div className="summary-img float-left size-xl">
          <a href="/img/solarsystem/orbits_lg.jpg" title="die Ekliptik - Großansicht">
            <img src="/img/solarsystem/orbits_sm.jpg" alt="die Ekliptik" />
          </a>
          <p className="summary-img-text">
            die Ekliptik
          </p>
        </div>
        <p className="summary-text">
          Die Bahnen aller Planeten unseres Systems liegen nahezu auf dieser einen Ebene,
          der <em>Ekliptik</em>. Sie umrunden darauf die <em>Sonne</em> in der
          gleichen Richtung, in die sie sich selbst auch dreht - gegen den Uhrzeigersinn,
          würde der Beobachter auf den Nordpol der Sonne herunterschauen. Auch die
          Eigenrotation der Planeten entspricht dieser Richtung. Nur die Venus
          rotiert <em>retrograd</em> um ihre eigene Achse.
        </p>
        <p className="summary-text">
          Wissenschaftler vermuten den Ursprung des Sonnensystems in einem rotierenden
          Materienebel, der sich durch die Fliehkräfte zu einer <em>Akkretionsscheibe</em> verformte.
          Mehr und mehr Materie stürzte in das Zentrum der Scheibe und verdichtete sich, bis schließlich
          unter enormem Druck und immmer weiter steigenden Temperaturen die <em>Kernfusion</em> zündete.
          Die Sonne war geboren.
        </p>
        <p className="summary-text">
          Rings um den jungen Stern verklumpten Staubteilchen zu immer größeren
          Gebilden miteinander und formten die <em>Planetesimale</em>, die Bausteine
          der künftigen Planeten. Mit steigenden Massen und somit wachsenden
          Anziehungskräften wuchsen sie zu <em>Protoplaneten</em> heran und sammelten
          noch mehr Materie aus ihrem kosmischen Umfeld ein. Auf ihrem Umlauf
          um die Sonne und durch Resonanzen ihrer Gravitationskräfte räumten
          sie ihre Bahnen im Laufe von vielen Jahrmillionen leer.
        </p>
        <div className="summary-img width-100 center">
          <img src="/img/solarsystem/solarsystem.jpg" alt="das Sonnensystem" />
          <p className="summary-img-text">
            Sonne, Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun - maßstabs,- aber nicht abstandsgetreu<br />
            Quelle: <a href="http://iau.org/" title="IAU">IAU</a> <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="CC BY-SA 3.0">CC BY-SA 3.0</a>
          </p>
        </div>
        <p className="summary-text">
          So umkreisen heute acht Planeten unseren Zentralstern, seit die <em>Internationale
          Astronomische Union IAU</em> den früher als Planet geführten <em>Pluto</em> im
          Jahr 2006 zum Zwergplanten herabstufte. Die Entfernungen dabei sind riesig.
          So beträgt der mittlere Abstand zwischen Sonne und Erde ca. 150 Millionen
          Kilometer, oder eine <em>Astronomische Einheit AU</em>. Die Inneren Planeten
          Merkur, Venus, Erde und Mars sind Gesteinsplaneten, deren Atmosphären
          zwischen sehr dicht (Venus) und sehr dünn (Mars) variieren. Merkur verfügt
          über keine nennenswerte Gashülle. Die sonnenächsten Körper Merkur und
          Venus besitzen keine Monde, während die Erde von einem, der Mars von zwei
          Trabanten (<em>Phobos</em> und <em>Deimos</em>) begleitet wird.
        </p>
        <div className="summary-img float-right">
          <a href="/img/solarsystem/saturn_lg.jpg" title="Saturn - Großansicht">
            <img src="/img/solarsystem/saturn_sm.jpg" alt="Saturn" />
          </a>
          <p className="summary-img-text">
            Saturn mit Ringsystem, Quelle: NASA
          </p>
        </div>
        <p className="summary-text">
          Die Äußeren Planeten hingegen sind völlig anders beschaffen. Sie sind <em>Gasplaneten</em>,
          deren Atmosphären je nach Entfernung zur Sonne gasförmig (Jupiter und Saturn)
          oder sogar teilweise flüssig (<em>Uranus</em> und <em>Neptun</em>) sind. Im Innern besitzen
          sie wahrscheinlich alle einen kleinen, festen Kern aus Gestein und Eis.
          Die vier Riesen verfügen zusätzlich auch über Ringsysteme aus Gesteins- oder
          Eispartikeln unterschiedlicher Größe. Auf den Äquatorebenen der Planeten
          rotieren sie in mehreren Ringscheiben um sie herum. Jupiter wird von 62
          Monden umkreist, Saturn sogar von 67! Die Eisriesen Uranus und Neptun
          verfügen über 27, bzw. 14 Monde.
        </p>
        <div className="summary-img float-left size-lg">
          <a href="/img/solarsystem/mainbelt_and_trojans.png" title="Trojaner - Großansicht">
            <img src="/img/solarsystem/mainbelt_and_trojans.png" alt="Trojaner" />
          </a>
          <p className="summary-img-text">
            Trojaner, Quelle: Rivi<br />
            <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="CC BY-SA 3.0">CC BY-SA 3.0</a>
          </p>
        </div>
        <p className="summary-text">
          Neben den Planeten und ihren Monden existiert eine Vielzahl kleinerer
          Objekte in unserem Sonnensystem, die in der Entstehungsphase nicht von
          der Sonne oder den Planeten eingefangen wurden. So werden die Bahnen
          der inneren Planeten von unzähligen <em>Asteroiden</em> verschiedenster
          Größen (auch <em>Planetoiden</em> genannt) gekreuzt. Die meisten konzentrieren
          sich im <em>Hauptgürtel</em> zwischen Mars und Jupiter.
        </p>
        <div className="summary-img size-sm">
          <a href="/img/solarsystem/oort_cloud.jpg" title="Oortsche Wolke - Großansicht">
            <img src="/img/solarsystem/oort_cloud.jpg" alt="Oortsche Wolke" />
          </a>
          <p className="summary-img-text">
            Oortsche Wolke<br />
            Quelle: Dr. H. Sulzer<br />
            <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="CC BY-SA 3.0">CC BY-SA 3.0</a>
          </p>
        </div>
        <p className="summary-text">
          <em>Zentauren</em> werden Asteroiden genannt, die sich zwischen den Umlaufbahnen
          von Jupiter und Neptun um die Sonne bewegen. Asteroiden, die einem Planeten
          auf seinem Orbit entweder vorauseilen oder ihm nachfolgen, nennt man <em>Trojaner</em>.
          Die meisten sind bislang auf der Jupiterbahn bekannt. Nur Merkur und Saturn
          scheinen keine Trojaner zu besitzen.
        </p>
        <p className="summary-text">
          Noch weit außerhalb des Neptunorbits, liegt der <em>Kuipergürtel</em>, eine
          ringförmige Region mit tausenden meist kleinen, aber auch bis zu mehreren
          hundert Kilometern großen Objekten, so auch Pluto. Am äußeren Rand unseres
          Sonnensystems befindet sich vermutlich dann die <em>Oortsche Wolke</em>,
          eine Ansammlung astronomischer Objekte in Form einer Kugelschale.
          Beide Regionen gelten als Ursprungsgebiete von <em>Kometen</em>, die auf
          hochelliptischen Bahnen durch das Sonnensystem ziehen.
          Wissenschaftler erhoffen sich aus der Untersuchung dieser "Schweifsterne"
          auch mit Raumsonden wie zum Beispiel <em>Rosetta</em> genauere Erkenntnisse
          über die Entstehung unseres Systems.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>
            Die Sonne macht 99,86 % der Gesamtmasse unseres Systems aus. Ihr Durchmesser
            ist 109-mal größer als der der Erde.
          </li>
          <li>
            Der nächste Stern ist <em>Proxima Centauri</em> in ca. 4,22 Lichtjahren
            Entfernung. <em>Alpha Centauri</em>, das nächste System, ist 4,34 Lj entfernt.
          </li>
          <li>
            Die Erde umrundet die Sonne in 365,256 Tagen mit einer Geschwindigkeit
            von durchschnittlich ca. 30 Kilometern pro Sekunde.
          </li>
          <li>
            Auch Asteroiden und Zwergplaneten können Monde besitzen.
            <em>Charon</em>, <em>Nix</em>, <em>Hydra</em>, <em>Kerberos</em> und <em>Styx</em> umkreisen
            Pluto.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="solar-system pure-u-1">
        <div id="solarsystemTable">
          <div id="sun" className="type-1 pure-u-1">
            <a href="#" title="" className="item-name">Sonne</a>
          </div>
          <div id="innerPlanets" className="type-1 pure-u-1">
            <a href="#" className="item-name">Innere Planeten</a>
            <div id="mercury" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Merkur</a>
            </div>
            <div id="venus" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Venus</a>
            </div>
            <div id="atenAsteroids" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">Aten-Typ-Asteroiden</a>
              <div className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <div id="2062aten" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(2062) Aten</a>
                </div>
              </div>
            </div>
            <div id="earth" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Erde</a>
              <div className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <div id="moon" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Mond</a>
                </div>
              </div>
              <div id="nearEarthObjects" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name">erdnahe Objekte</a>
              </div>
            </div>
            <div id="apolloAsteroids" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">Apollo-Typ-Asteroiden</a>
              <div className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <div id="1862apollo" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(1862) Apollo</a>
                </div>
              </div>
            </div>
            <div id="mars" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Mars</a>
              <div className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <div id="phobos" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Phobos</a>
                </div>
                <div id="deimos" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Deimos</a>
                </div>
              </div>
              <div id="marsTrojanGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name">Mars-Trojaner</a>
              </div>
            </div>
            <div id="amorAsteroids" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">Amor-Typ-Asteroiden</a>
              <div id="amor1Asteroids" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name">Amor-I-Asteroiden</a>
              </div>
              <div id="amor2Asteroids" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Amor-II-Asteroiden</a>
                <div id="1221amor" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(1221) Amor</a>
                </div>
              </div>
              <div id="amor3Asteroids" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Amor-III-Asteroiden</a>
                <div id="1036ganymed" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(1036) Ganymed</a>
                </div>
              </div>
              <div id="amor4Asteroids" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Amor-IV-Asteroiden</a>
                <div id="3552donquixote" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(3552) Don Quixote</a>
                </div>
              </div>
            </div>
          </div>
          <div id="asteroidBelt" className="type-1 pure-u-1">
            <a href="#" className="item-name">Asteroidengürtel</a>
            <div id="innerMainbelt" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">Innerer Hauptgürtel</a>
              <div id="floraGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Flora-Gruppe</a>
                <div id="8flora" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(8) Flora</a>
                </div>
              </div>
              <div id="vestaGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Vesta-Gruppe</a>
                <div id="4vesta" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(4) Vesta</a>
                </div>
              </div>
              <div id="nysaGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Nysa-Gruppe</a>
                <div id="44nysa" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(44) Nysa</a>
                </div>
              </div>
            </div>
            <div id="middleMainbelt" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">Mittlerer Hauptgürtel</a>
              <div id="eunomiaGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Eunomia-Gruppe</a>
                <div id="15eunomia" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(15) Eunomia</a>
                </div>
              </div>
              <div id="gefionGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Gefion-Gruppe</a>
                <div id="1272gefion" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(1272) Gefion</a>
                </div>
              </div>
            </div>
            <div id="outerMainbelt" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">Äußerer Hauptgürtel</a>
              <div id="koronisGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Koronis-Gruppe</a>
                <div id="158koronis" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(158) Koronis</a>
                </div>
              </div>
              <div id="eosGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Eos-Gruppe</a>
                <div id="221eos" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(221) Eos</a>
                </div>
              </div>
              <div id="themisGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Themis-Gruppe</a>
                <div id="24themis" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(24) Themis</a>
                </div>
              </div>
              <div id="hygieaGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Hygiea-Gruppe</a>
                <div id="10hygiea" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">(10) Hygiea</a>
                </div>
              </div>
            </div>
          </div>
          <div id="outerPlanets" className="type-1 pure-u-1">
            <a href="#" className="item-name">Äußere Planeten</a>
            <div id="jupiter" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Jupiter</a>
              <div id="jupiterMoons" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Jupiter-Monde</a>
                <div id="io" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Io</a>
                </div>
              </div>
              <div id="jupiterTrojans" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name">Jupiter-Trojaner</a>
              </div>
            </div>
            <div id="centaurs1" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Zentauren</a>
            </div>
            <div id="saturn" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Saturn</a>
              <div id="saturnMoons" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Saturn-Monde</a>
                <div id="mimas" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Mimas</a>
                </div>
              </div>
            </div>
            <div id="centaurs2" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Zentauren</a>
            </div>
            <div id="uranus" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Uranus</a>
              <div id="uranusMoons" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Uranus-Monde</a>
                <div id="ariel" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Ariel</a>
                </div>
              </div>
            </div>
            <div id="centaurs3" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Zentauren</a>
            </div>
            <div id="neptune" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name">Neptun</a>
              <div id="neptuneMoons" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Neptun-Monde</a>
                <div id="triton" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Triton</a>
                </div>
              </div>
              <div id="neptuneTrojans" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name">Neptun-Trojaner</a>
              </div>
            </div>
          </div>
          <div id="transneptunianObjects" className="type-1 pure-u-1">
            <a href="#" className="item-name">Transneptunische Objekte (TNO)</a>
            <div id="kuiperbelt" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">Kuipergürtel</a>
              <div id="kuiperbeltObjects" className ="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Kuipergürtelobjekte (KBO)</a>
                <div id="pluto" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Pluto</a>
                  <div id="charon" className="type-5 pure-u-md-2-3 pure-lg-1-2">
                    <a href="#" className="item-name">Charon</a>
                  </div>
                </div>
              </div>
              <div id="sednoidGroup" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name collapsed">Sednoiden</a>
                <div id="sedna" className="type-4 pure-u-md-3-4 pure-lg-2-3">
                  <a href="#" className="item-name">Sedna</a>
                </div>
              </div>
            </div>
          </div>
          <div id="comets" className="type-1 pure-u-1">
            <a href="#" className="item-name">Kometen</a>
            <div id="periodicComets" className="type-2 pure-u-md-5-6 pure-lg-4-5">
              <a href="#" className="item-name collapsed">periodische Kometen</a>
              <div id="1phalley" className ="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name">1P/Halley</a>
              </div>
              <div id="2pencke" className="type-3 pure-u-md-4-5 pure-lg-3-4">
                <a href="#" className="item-name">2P/Encke</a>
              </div>
            </div>
          </div>
          <div id="oortCloud" className="type-1 pure-u-1">
            <a href="#" className="item-name">Oortsche Wolke</a>
          </div>
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default SolarSystemComponent;
