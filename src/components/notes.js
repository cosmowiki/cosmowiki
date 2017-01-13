import React from 'react';

const defaultNotes = (
  <p id="notComplete" className="center">
    Sie kennen noch mehr Daten zu dieser Seite?<br/>Bereichern Sie cosmowiki.org und melden Sie uns diese bitte <a
    href="http://de.cosmowiki.de/?page_id=22" target="_self" title="Kontakt">hier</a>.
  </p>
);

const constellationNotes = (
  <ul>
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
  </ul>
);

const starNotes = (
  <ul>
    <li>
      Legende:
    </li>
    <li>
      Die Daten der einzelnen Sterne stammen überwiegend aus den englischen Wikipedia-Artikeln, da diese meist umfangreicher und mit genaueren Quellenangaben belegt sind.
    </li>
    <li>
      Griechische Buchstaben:<br />
      α = Alpha, β = Beta, γ = Gamma, δ = Delta, ε = Epsilon, ζ = Zeta, η = Eta, θ = Theta, ι = Iota, κ = Kappa, λ = Lambda,
      μ = My, ν = Ny, ξ = Xi, ο = Omikron, π = Pi, ρ = Rho, σ = Sigma, τ = Tau, υ = Ypsilon, φ = Phi, χ = Chi, ψ = Psi, ω = Omega
    </li>
    <li>
      mag = <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> in mag
    </li>
    <li>
      Lj = <a href="https://de.wikipedia.org/wiki/Lichtjahr" target="_blank" title="Lichtjahr">Entfernung Erde-Stern in Lichtjahren</a>
    </li>
    <li>
      M<sub>&#9737;</sub> = <a href="https://de.wikipedia.org/wiki/Sonnenmasse" target="_blank" title="Sonnenmassen">Sonnenmassen</a>
    </li>
    <li>
      R<sub>&#9737;</sub> = <a href="https://de.wikipedia.org/wiki/Sonnenradius" target="_blank" title="Sonnenradien">Sonnenradien</a>
    </li>
  </ul>
);

const Notes = () => {
  return (
    <div id="notes" className="pure-u-1">
      {defaultNotes}
    </div>
  )
};

export default Notes;

export const ConstellationNotes = () => {
  return (
    <div id="notes" className="pure-u-1">
      {defaultNotes}
      {constellationNotes}
    </div>

  );
};

export const StarNotes = () => {
  return (
    <div id="notes" className="pure-u-1">
      {defaultNotes}
      {starNotes}
    </div>

  );
};
