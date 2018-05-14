import React from 'react';
import Notes from './notes';
import {Summary} from './chunks/summary';

const SolarSystemComponent = ({ items }) => {

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
          wird von 69 bekannten Monden umkreist, Saturn von 62! Die Eisriesen Uranus
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
          {items.filter(item => item.index === '0').map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
          {items.filter(item => item.index === '1').map((item, idx) => <ItemComponent item={ item } key={idx}>
            {items.filter(item => item.index === '1.1').map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            {items.filter(item => item.index === '1.2').map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            {items.filter(item => item.index === '1.3').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '1.3.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '1.3.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '1.3.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('1.3.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
              {items.filter(item => item.index === '1.3.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index.startsWith('1.3.2.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
              </ItemComponent>)}
              {renderItemsFrom1(items, '1.3.3')}
            </ItemComponent>)}
            {items.filter(item => item.index === '1.4').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '1.4.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '1.4.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '1.4.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('1.4.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '1.4.1.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '1.4.1.2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('1.4.1.2.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
              {items.filter(item => item.index === '1.4.2').map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
              {items.filter(item => item.index === '1.4.3').map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            </ItemComponent>)}
          </ItemComponent>)}
          {items.filter(item => item.index === '2').map((item, idx) => <ItemComponent item={ item } key={idx}>
            {items.filter(item => item.index === '2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '2.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '2.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.1.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.1.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
            </ItemComponent>)}
            {items.filter(item => item.index === '2.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '2.2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '2.2.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.2.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.2.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '2.2.1.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.2.1.2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.2.1.2.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '2.2.1.3').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.2.1.3.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.2.1.3.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
            </ItemComponent>)}
            {items.filter(item => item.index === '2.3').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '2.3.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '2.3.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.3.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.3.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '2.3.1.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.3.1.2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.3.1.2.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
            </ItemComponent>)}
            {items.filter(item => item.index === '2.4').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '2.4.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '2.4.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.4.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.4.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '2.4.1.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.4.1.2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.4.1.2.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '2.4.1.3').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.4.1.3.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.4.1.3.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '2.4.1.4').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '2.4.1.4.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('2.4.1.4.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
            </ItemComponent>)}
          </ItemComponent>)}
          {items.filter(item => item.index === '3').map((item, idx) => <ItemComponent item={ item } key={idx}>
            {items.filter(item => item.index === '3.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '3.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '3.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '3.1.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('3.1.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                  {items.filter(item => item.index === '3.1.1.1.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('3.1.1.1.2.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
              {items.filter(item => item.index.startsWith('3.1.2')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            </ItemComponent>)}
            {items.filter(item => item.index === '3.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index.startsWith('3.2.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            </ItemComponent>)}
            {items.filter(item => item.index === '3.3').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '3.3.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '3.3.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '3.3.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('3.3.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                    </ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              {items.filter(item => item.index.startsWith('3.3.2.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            </ItemComponent>)}
            {items.filter(item => item.index === '3.4').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '3.4.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '3.4.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '3.4.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('3.4.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '3.4.1.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '3.4.1.2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('3.4.1.2.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
              {items.filter(item => item.index.startsWith('3.4.2.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            </ItemComponent>)}
          </ItemComponent>)}
          {items.filter(item => item.index === '4').map((item, idx) => <ItemComponent item={ item } key={idx}>
          </ItemComponent>)}
          {items.filter(item => item.index === '5').map((item, idx) => <ItemComponent item={ item } key={idx}>
            {items.filter(item => item.index === '5.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index === '5.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                {items.filter(item => item.index === '5.1.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index.startsWith('5.1.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '5.1.1.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '5.1.1.2.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index === '5.1.1.2.1.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                      {items.filter(item => item.index.startsWith('5.1.1.2.1.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                    </ItemComponent>)}
                  </ItemComponent>)}
                  {items.filter(item => item.index === '5.1.1.2.2').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('5.1.1.2.2.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '5.1.1.3').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index.startsWith('5.1.1.3.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                </ItemComponent>)}
                {items.filter(item => item.index === '5.1.1.4').map((item, idx) => <ItemComponent item={ item } key={idx}>
                  {items.filter(item => item.index === '5.1.1.4.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
                    {items.filter(item => item.index.startsWith('5.1.1.4.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
                  </ItemComponent>)}
                </ItemComponent>)}
              </ItemComponent>)}
            </ItemComponent>)}
          </ItemComponent>)}
          {items.filter(item => item.index === '6').map((item, idx) => <ItemComponent item={ item } key={idx}>
            {items.filter(item => item.index === '6.1').map((item, idx) => <ItemComponent item={ item } key={idx}>
              {items.filter(item => item.index.startsWith('6.1.')).map((item, idx) => <ItemComponent item={ item } key={idx}></ItemComponent>)}
            </ItemComponent>)}
          </ItemComponent>)}
          {items.filter(item => item.index === '7').map((item, idx) => <ItemComponent item={ item } key={idx}>
          </ItemComponent>)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

const renderItemsFrom1 = (items, startAt) => {
  return items.filter(item => item.index === startAt).map((item, idx) => <ItemComponent item={ item } key={idx}>
    {renderItemsFrom(items, `${startAt}.1`)}
    {renderItemsFrom(items, `${startAt}.2`)}
    {renderItemsFrom(items, `${startAt}.3`)}
  </ItemComponent>)
};

const renderItemsFrom = (items, startAt) => {
  const item = items.find(item => item.index === startAt);
  const findChildrenOfStartAt = new RegExp(`^${startAt}\\.\\d+$`);
  const subItemNumbers = items
    .filter(item => findChildrenOfStartAt.test(item.index))
    .map(item => parseInt(item.index.replace(`${startAt}.`, '')))
  ;
  return (
    <ItemComponent item={item} key={startAt}>
      {subItemNumbers.map(num => multiItems(items, `${startAt}.${num}`))}
    </ItemComponent>
  );
};

const multiItems = (items, startAt) => {
  const item = items.find(item => item.index === startAt);
  const subItems = items.filter(item => item.index.startsWith(`${startAt}.`));
  return (
    <ItemComponent item={item} key={startAt}>
      {subItems.map((item, idx) => <ItemComponent item={item} key={idx} />)}
    </ItemComponent>
  );
}

export default SolarSystemComponent;

const ItemComponent = ({ item, children }) => {
  let pureGridWith = item.type;
  {pureGridWith === 'level-1' ? pureGridWith = 'pure-u-1' : pureGridWith = 'pure-u-11-12 pure-u-sm-7-8 pure-u-md-4-5';}
  let itemDivStyles;
  {item.name ? itemDivStyles = `${item.index} ${item.type} ${item.category} ${pureGridWith} ${item.color}` : itemDivStyles = `${pureGridWith} placeholder`;}

  return (
          <div id={item.name2} className={itemDivStyles}>
            <p>{item.wikipediaUrl ? <a href={item.wikipediaUrl} title={item.name}>{item.name}</a> : <span>{item.name}</span>}</p>
            {children}
          </div>
  );
};
