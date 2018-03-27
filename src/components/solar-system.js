import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const SolarSystemComponent = () => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="solar-system pure-u-1 center">
        <div id="siteTitleContainer">
          <h1>das Sonnensystem</h1>
          <h3>unsere kosmische Heimat</h3>
        </div>
      </div>
      <div id="todo" className="pure-u-1">
        <p>@wolfram: pls make it work according to the conditions in sites/solar-system.js</p>
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
          Mehr und mehr Materie stürzte in das Zentrum der Scheibe und verdichtete
          sich, bis schließlich unter enormem Druck und immmer weiter steigenden
          Temperaturen die <em>Kernfusion</em> zündete. Die Sonne war geboren.
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
          Astronomische Union</em> (IAU) den früher als Planet geführten <em>Pluto</em> im
          Jahr 2006 zum Zwergplanten herabstufte. Die Entfernungen dabei sind riesig.
          Der mittlere Abstand zwischen Sonne und Erde beträgt ca. 150 Millionen
          Kilometer, oder eine <em>Astronomische Einheit</em> (AU), während Saturn
          schon etwa zehnmal so weit von der Sonne entfernt ist und Neptun ca. das 30-fache.
        </p>
        <p className="summary-text">Die Inneren Planeten Merkur, Venus, Erde und Mars sind Gesteinsplaneten,
          deren Atmosphären zwischen sehr dicht (Venus) und sehr dünn (Mars) variieren.
          Merkur verfügt über keine nennenswerte Gashülle. Die sonnenächsten Körper
          Merkur und Venus besitzen keine Monde, während die Erde von einem und
          der Mars von zwei Trabanten - <em>Phobos</em> und <em>Deimos</em> begleitet wird.
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
          oder sogar teilweise flüssig wie im Fall von <em>Uranus</em> und <em>Neptun</em> sind.
          Im Innern besitzen sie wahrscheinlich alle einen kleinen, festen Kern
          aus Gestein und Eis. Die vier Riesen verfügen zusätzlich auch über Ringsysteme
          aus Gesteins- oder Eispartikeln unterschiedlicher Größe. Auf den Äquatorebenen
          der Planeten rotieren sie in mehreren Ringscheiben um sie herum. Jupiter
          wird von 62 Monden umkreist, Saturn sogar von 67! Die Eisriesen Uranus
          und Neptun verfügen über 27, bzw. 14 Monde.
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
          Größen, auch <em>Planetoiden</em> genannt, gekreuzt. Die meisten konzentrieren
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
            Auch Asteroiden und Zwergplaneten können Monde besitzen. <em>Charon</em>, <em>Nix</em>, <em>Hydra</em>, <em>Kerberos</em> und <em>Styx</em> umkreisen Pluto.
          </li>
          <li>
            Am 19. Oktober 2017 wurde mit dem Asteroiden  <em>1I/ʻOumuamua</em> das
            erste interstellare Objekt in unserem Sonnensystem entdeckt.
          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="solar-system module pure-u-1">
        <div id="solarsystemTable">
          <div id="sun" className="type1 star sun pure-u-1">
            <a href="#" title="item-name">Sonne</a>
          </div>
          <div id="innerPlanets" className="type1 innerPlanets group pure-u-1">
            <a href="#" title="item-name">Innere Planeten</a>
            <div id="mercury" className="type2 mercury planet pure-u-md-7-8">
              <a href="#" title="item-name">Merkur</a>
            </div>
            <div id="venus" className="type2 venus planet pure-u-md-7-8">
              <a href="#" title="item-name">Venus</a>
            </div>
            <div id="earth" className="type2 earth planet pure-u-md-7-8">
              <a href="#" title="item-name">Erde</a>
            </div>
            <div id="earthTrojans" className="type4 earth group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Erd-Trojaner</a>
            </div>
            <div id="2010tk7" className="type6 earth object pure-u-md-3-8">
              <a href="#" title="item-name">(2010) TK7</a>
            </div>
            <div id="earthMoon" className="type4 earth moon pure-u-md-5-8">
              <a href="#" title="item-name">Mond</a>
            </div>
            <div id="nearEarthobjects" className="type3 asteroids group pure-u-md-6-8">
              <a href="#" title="item-name" className="expanded">erdnahe Objekte</a>
            </div>
            <div id="atenAsteroids" className="type4 asteroids group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Aten-Typ-Asteroiden</a>
            </div>
            <div id="2062aten" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(2062) Aten</a>
            </div>
            <div id="apolloAsteroids" className="type4 asteroids group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Apollo-Typ-Asteroiden</a>
            </div>
            <div id="1862apollo" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(1862) Apollo</a>
            </div>
            <div id="amorAsteroids" className="type4 asteroids group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Amor-Typ-Asteroiden</a>
            </div>
            <div id="amor1Asteroids" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Amor-I-Asteroiden</a>
            </div>
            <div id="433eros" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(433) Eros</a>
            </div>
            <div id="amor2Asteroids" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Amor-II-Asteroiden</a>
            </div>
            <div id="1221amor" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(1221) Amor</a>
            </div>
            <div id="amor3Asteroids" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Amor-III-Asteroiden</a>
            </div>
            <div id="1036ganymed" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(1036) Ganymed</a>
            </div>
            <div id="amor4Asteroids" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Amor-IV-Asteroiden</a>
            </div>
            <div id="3552donquixote" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(3552) Don Quixote</a>
            </div>
            <div id="mars" className="type2 mars planet pure-u-md-7-8">
              <a href="#" title="item-name">Mars</a>
            </div>
            <div id="marsTrojanGroup" className="type4 mars group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Mars-Trojaner</a>
            </div>
            <div id="marsLagrange4Group" className="type5 mars group pure-u-md-4-8">
              <a href="#" title="item-name" className="collapsed">Lagrange-Punkt L4</a>
            </div>
            <div id="marsLagrange5Group" className="type5 mars group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Lagrange-Punkt L5</a>
            </div>
            <div id="5261eureka" className="type6 mars object pure-u-md-3-8">
              <a href="#" title="item-name">(5261) Eureka</a>
            </div>
            <div id="3119992007ns2" className="type6 mars object pure-u-md-3-8">
              <a href="#" title="item-name">(311999) 2007 NS2</a>
            </div>
            <div id="phobos" className="type4 mars moon pure-u-md-5-8">
              <a href="#" title="item-name">Phobos</a>
            </div>
            <div id="deimos" className="type4 mars moon pure-u-md-5-8">
              <a href="#" title="item-name">Deimos</a>
            </div>
          </div>
          <div id="asteroidBelt" className="type1 asteroidbelt group pure-u-1">
            <a href="#" title="item-name">Asteroidengürtel</a>
            <div id="1ceres" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(1) Ceres</a>
            </div>
            <div id="innerMainbelt" className="type4 asteroids group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Innerer Hauptgürtel</a>
            </div>
            <div id="floraGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Flora-Gruppe</a>
            </div>
            <div id="8flora" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(8) Flora</a>
            </div>
            <div id="vestaGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Vesta-Gruppe</a>
            </div>
            <div id="4vesta" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(4) Vesta</a>
            </div>
            <div id="nysaGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Nysa-Gruppe</a>
            </div>
            <div id="44nysa" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(44) Nysa</a>
            </div>
            <div id="middleMainbelt" className="type4 asteroids group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Mittlerer Hauptgürtel</a>
            </div>
            <div id="eunomiaGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Eunomia-Gruppe</a>
            </div>
            <div id="15eunomia" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(15) Eunomia</a>
            </div>
            <div id="gefionGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Gefion-Gruppe</a>
            </div>
            <div id="1272gefion" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(1272) Gefion</a>
            </div>
            <div id="outerMainbelt" className="type4 asteroids group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Äußerer Hauptgürtel</a>
            </div>
            <div id="koronisGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Koronis-Gruppe</a>
            </div>
            <div id="158koronis" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(158) Koronis</a>
            </div>
            <div id="243ida" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(243) Ida</a>
            </div>
            <div id="dactyl" className="type7 asteroids moon pure-u-md-2-8">
              <a href="#" title="item-name">Dactyl</a>
            </div>
            <div id="eosGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Eos-Gruppe</a>
            </div>
            <div id="221eos" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(221) Eos</a>
            </div>
            <div id="themisGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Themis-Gruppe</a>
            </div>
            <div id="24themis" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(24) Themis</a>
            </div>
            <div id="hygieaGroup" className="type5 asteroids group pure-u-md-4-8">
              <a href="#" title="item-name" className="expanded">Hygiea-Gruppe</a>
            </div>
            <div id="10hygiea" className="type6 asteroids object pure-u-md-3-8">
              <a href="#" title="item-name">(10) Hygiea</a>
            </div>
          </div>
          <div id="outerPlanets" className="type1 outerPlanets group pure-u-1">
            <a href="#" title="item-name">Äußere Planeten</a>
            <div id="jupiter" className="type2 jupiter planet pure-u-md-7-8">
              <a href="#" title="item-name">Jupiter</a>
            </div>
            <div id="jupiterTrojans" className="type4 jupiter group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Jupiter-Trojaner</a>
            </div>
            <div id="jupiterLagrange4Group" className="type5 jupiter group pure-u-md-4-8">
              <a href="#" title="item-name" className="collapsed">Lagrange-Punkt L4</a>
            </div>
            <div id="jupiterLagrange5Group" className="type5 jupiter group pure-u-md-4-8">
              <a href="#" title="item-name" className="collapsed">Lagrange-Punkt L5</a>
            </div>
            <div id="jupiterMoons" className="type3 jupiter group pure-u-md-6-8">
              <a href="#" title="item-name" className="expanded">Jupiter-Monde</a>
            </div>
            <div id="io" className="type4 jupiter moon pure-u-md-5-8">
              <a href="#" title="item-name">Io</a>
            </div>
            <div id="saturn" className="type2 saturn planet pure-u-md-7-8">
              <a href="#" title="item-name">Saturn</a>
            </div>
            <div id="saturnMoons" className="type3 saturn group pure-u-md-6-8">
              <a href="#" title="item-name" className="expanded">Saturn-Monde</a>
            </div>
            <div id="mimas" className="type4 saturn moon pure-u-md-5-8">
              <a href="#" title="item-name">Mimas</a>
            </div>
            <div id="uranus" className="type2 uranus planet pure-u-md-7-8">
              <a href="#" title="item-name">Uranus</a>
            </div>
            <div id="uranusMoons" className="type3 uranus group pure-u-md-6-8">
              <a href="#" title="item-name" className="expanded">Uranus-Monde</a>
            </div>
            <div id="ariel" className="type4 uranus moon pure-u-md-5-8">
              <a href="#" title="item-name">Ariel</a>
            </div>
            <div id="neptune" className="type2 neptune planet pure-u-md-7-8">
              <a href="#" title="item-name">Neptun</a>
            </div>
            <div id="neptuneTrojans" className="type4 neptune group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Neptun-Trojaner</a>
            </div>
            <div id="neptuneLagrange4Group" className="type5 neptune group pure-u-md-4-8">
              <a href="#" title="item-name" className="collapsed">Lagrange-Punkt L4</a>
            </div>
            <div id="neptuneLagrange5Group" className="type5 neptune group pure-u-md-4-8">
              <a href="#" title="item-name" className="collapsed">Lagrange-Punkt L5</a>
            </div>
            <div id="neptuneMoons" className="type3 neptune group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Neptun-Monde</a>
            </div>
            <div id="triton" className="type4 neptune moon pure-u-md-5-8">
              <a href="#" title="item-name">Triton</a>
            </div>
          </div>
          <div id="centaurs" className="type1 centaurs group pure-u-1">
            <a href="#" title="item-name">Zentauren</a>
          </div>
          <div id="transneptunianobjects" className="type1 transneptunianobjects group pure-u-1">
            <a href="#" title="item-name">Transneptunische Objekte (TNO)</a>
            <div id="kuiperbelt" className="type2 kuiperbelt group pure-u-md-7-8">
              <a href="#" title="item-name" className="expanded">Kuipergürtel</a>
            </div>
            <div id="kuiperbeltobjects" className ="type3 kuiperbelt group pure-u-md-6-8">
              <a href="#" title="item-name" className="expanded">Kuipergürtelobjekte (KBO)</a>
            </div>
            <div id="pluto" className="type5 kuiperbelt object pure-u-md-4-8">
              <a href="#" title="item-name">Pluto</a>
            </div>
            <div id="charon" className="type6 kuiperbelt moon pure-u-md-3-8">
              <a href="#" title="item-name">Charon</a>
            </div>
            <div id="hydra" className="type6 kuiperbelt moon pure-u-md-3-8">
              <a href="#" title="item-name">Hydra</a>
            </div>
            <div id="nix" className="type6 kuiperbelt moon pure-u-md-3-8">
              <a href="#" title="item-name">Nix</a>
            </div>
            <div id="kerberos" className="type6 kuiperbelt moon pure-u-md-3-8">
              <a href="#" title="item-name">Kerberos</a>
            </div>
            <div id="styx" className="type6 kuiperbelt moon pure-u-md-3-8">
              <a href="#" title="item-name">Styx</a>
            </div>
            <div id="sednoids" className="type4 kuiperbelt group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">Sednoiden</a>
            </div>
            <div id="sedna" className="type5 kuiperbelt object pure-u-md-4-8">
              <a href="#" title="item-name">Sedna</a>
            </div>
          </div>
          <div id="comets" className="type1 comets group pure-u-1">
            <a href="#" title="item-name">Kometen</a>
            <div id="periodicComets" className="type4 periodiccomets group pure-u-md-5-8">
              <a href="#" title="item-name" className="expanded">periodische Kometen</a>
            </div>
            <div id="1phalley" className ="type6 periodiccomets object pure-u-md-3-8">
              <a href="#" title="item-name">1P/Halley</a>
            </div>
            <div id="2pencke" className="type6 periodiccomets object pure-u-md-3-8">
              <a href="#" title="item-name">2P/Encke</a>
            </div>
            <div id="3dbiela" className ="type6 periodiccomets object pure-u-md-3-8">
              <a href="#" title="item-name">3D/Biela</a>
            </div>
            <div id="4pfaye" className="type6 periodiccomets object pure-u-md-3-8">
              <a href="#" title="item-name">4P/Faye</a>
            </div>
          </div>
          <div id="oortCloud" className="type1 oortCloud group pure-u-1">
            <a href="#" title="item-name">Oortsche Wolke</a>
          </div>
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default SolarSystemComponent;
