import React from 'react';
import {Summary} from './chunks/summary';
import Notes from './notes';

const PlacesComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="pure-u-1 places center">
        <div id="siteTitleContainer">
          <h1>Orte</h1>
          <h3>Wo ist was?</h3>
        </div>
      </div>
      <Summary>
        <p className="summary-text">
          Wie hat sich das Wissen der Menschheit entwickelt? Welche astronomischen
          Kenntnisse enthüllen die Höhlenmalereien steinzeitlicher Menschen? Wo beobachteten die
          Philosophen der Antike den Himmel, wo forschten die Astronomen des Mittelalters
          und mit welchen Hilfsmitteln? Die Archäologie liefert viele Puzzleteile
          für die Wissenschaftsgeschichte.
        </p>
        <p className="summary-text">
          Artefakte wie der Mechanismus von Antikythera oder Bauwerke wie die Kreisgrabenanlage von Goseck
          werden gefunden, doch ihre Bedeutung bleibt meist noch lange im Dunkeln.
          Ist die geografische Ausrichtung einer Kultstätte von Bedeutung? Wurde sie genau so ausgerichtet,
          damit Schamanen und Priester zuverlässig den richtigen Zeitpunkt für Aussaat oder Ernte bestimmen konnten?
          Die Archäoastronomie konnte in den letzten Jahrzehnten viele solcher Fragen beantworten.
          Doch manche Geheimnisse können oft erst nach vielen Jahren interdisziplinärer Forschung entschlüsselt werden.
        </p>
        <p className="summary-text">
          Observatorien werden heute nach konkreten Vorgaben errichtet. Trocken,
          frei von Verschmutzung, arm an Turbulenzen muss die Luft sein,
          um möglichst klare Aufnahmen mit optischen Teleskopen zu erzielen.
          Vor allem aber ist natürlich Dunkelheit enorm wichtig. Doch wo genau finden sich solche Bedingungen,
          wo stehen die aktuell leistungsfähigsten Teleskope?
        </p>
        <p className="summary-text">
          Nicht ohne Grund finden sich keine modernen Sternwarten an den Küsten
          Englands oder in der Nähe chinesischer Großstädte. Sie stehen weit abgelegen
          in den chilenischen Anden, auf Hawaii, in Arizona oder auf den Gipfeln der Kanarischen Inseln.
        </p>
        <h4>Wussten Sie schon?</h4>
        <ul className="summary-list">
          <li>

          </li>
        </ul>
      </Summary>
      <div id="dataArea" className="places module pure-u-1">
        <div id="placesMap">
          Place the map here.
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default PlacesComponent;
