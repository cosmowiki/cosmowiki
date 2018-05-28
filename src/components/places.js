import React from 'react';
import {Summary} from './chunks/summary';

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
          Wie hat sich das Wissen der Menschheit entwickelt? Was wussten die Menschen vor 500 Jahren über die Gestirne,
          und was wussten sie noch nicht? Wo forschten die Astronomen des Mittelalters,
          und mit welchen Hilfsmitteln beobachteten die Philosophen der Antike den Himmel?
          Welche astronomischen Kenntnisse enthüllen die Höhlenmalereien steinzeitlicher Menschen?
          Die Archäologie liefert viele Puzzleteile für die Wissenschaftsgeschichte.
        </p>
        <p className="summary-text">
          Artefakte wie der Mechanismus von Antikythera oder Bauwerke wie die Kreisgrabenanlage von Goseck
          werden gefunden, doch ihre Bedeutung bleibt meist noch lange im Dunkeln.
          Ist die geografische Ausrichtung einer Kultstätte von Bedeutung? Wurde sie genau so ausgerichtet,
          damit Schamanen und Priester zuverlässig den richtigen Zeitpunkt für Aussaat oder Ernte der Feldfrüchte bestimmen konnten?
          Die Archäoastronomie konnte in den letzten Jahrzehnten viele solcher Fragen beantworten.
          Doch manche Geheimnisse können oft erst nach vielen Jahren interdisziplinärer Forschung entschlüsselt werden.
        </p>
        <p className="summary-text">
          Auch heute noch werden Observatorien nach konkreten Vorgaben errichtet.
          Trocken, frei von Verschmutzung und arm an Turbulenzen muss die Luft sein, um möglichst klare Aufnahmen zu erzielen.
          Doch wo genau stehen die aktuell leistungsfähigsten Teleskope?
          In den chilenischen Anden, auf Hawaii, in Arizona oder auf den Kanarischen Inseln?
        </p>
      </Summary>
    </main>
  );
};

export default PlacesComponent;
