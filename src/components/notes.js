import React from 'react';

const defaultNotes = (
  <p id="notComplete" className="center">
    Diese Liste ist nicht vollst&auml;ndig und wird st&auml;ndig erweitert.<br/>
    Sie kennen noch mehr Daten zu dieser Seite? Bereichern Sie dieses Lexikon und melden Sie uns diese bitte <a
    href="http://de.cosmowiki.de/?page_id=22" target="_self" title="Kontakt">hier</a>.
  </p>
);

const constellationNotes = (
  <ol className="small">
    <li>
      N / S - Lage des Sternbildes innerhalb der <a href="https://de.wikipedia.org/wiki/Himmelskugel" target="_blank" title="Himmeskugel">Himmelskugel.</a>
      Dabei steht N für die Nord- und S für die Südhalbkugel. Mit N S oder S N gekennzeichnete Sternbilder liegen ziemlich mittig auf dem Himmels&auml;quator.
      Bei Ns und Sn liegt nur ein sehr kleiner Teil des Sternbildareals auf der mit dem Kleinbuchstaben bezeichneten Halbkugel.</li>
    <li>
      deg<sup>2</sup> - Gibt die Fl&auml;che (Raumwinkel) des Sternbildes in <a href="https://de.wikipedia.org/wiki/Quadratgrad" target="_blank" title="Quadratgrad">Quadratgrad an.</a>
      Das Himmelsgew&ouml;lbe umfasst 41.253 Quadratgrade, die sich auf die 88 Sternbilder verteilen.
      Die Grenzen der Sternbilder wurden 1928 von der IAU festgelegt und genehmigt.
    </li>
    <li>
      >3<sup>m</sup> - Zahl der Sterne im Sternbild mit <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbarer Helligkeit</a> über 3 mag
    </li>
    <li>
      >4<sup>m</sup> - Zahl der Sterne im Sternbild mit <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbarer Helligkeit</a> über 4 mag
    </li>
    <li>
      Mag<sub>max</sub> - <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> des hellsten Sterns im Sternbild in mag
    </li>
  </ol>
);

export default class Notes {

  render() {

    return (
      <div id="notes">
        {defaultNotes}
      </div>
    )
  }
}

export class ConstellationNotes {
  
  render() {
    return (
      <div id="notes">
        {defaultNotes}
        {constellationNotes}
      </div>
      
    );
  }
  
}