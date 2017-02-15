import React from 'react';

const defaultNotes = (
  <div id="defaultNotes" className="pure-u-1">
    <div className="scroll-up-link pure-u-1-24">
      <p><a id="scrollUpArrow" href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
    </div>
    <div id="notComplete" className="pure-u-11-12 center">
      <p>
        Sie kennen noch mehr Daten zu dieser Seite?<br/>Bereichern Sie cosmowiki.org und melden Sie uns diese bitte <a
        href="http://de.cosmowiki.de/?page_id=22" target="_self" title="Kontakt">hier</a>.
      </p>
    </div>
    <div className="scroll-up-link pure-u-1-24 right">
      <p><a id="scrollUpArrow" href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
    </div>
  </div>
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
  <div>
    <p className="center">
      Die Daten der einzelnen Sterne stammen aus den englischen Wikipedia-Artikeln, da diese meist umfangreicher und mit genaueren Quellenangaben belegt sind.
    </p>
    <p>
      <b>Griechische Buchstaben:</b>
    </p>
    <p>
      α = Alpha, β = Beta, γ = Gamma, δ = Delta, ε = Epsilon, ζ = Zeta, η = Eta, θ = Theta, ι = Iota, κ = Kappa, λ = Lambda,
      μ = My, ν = Ny, ξ = Xi, ο = Omikron, π = Pi, ρ = Rho, σ = Sigma, τ = Tau, υ = Ypsilon, φ = Phi, χ = Chi, ψ = Psi, ω = Omega
    </p>
    <p>
      <b>Einheiten:</b>
    </p>
    <p>
      Lj = <a href="https://de.wikipedia.org/wiki/Lichtjahr" target="_blank" title="Lichtjahr">Entfernung Erde-Stern in Lichtjahren</a>
    </p>
    <p>
      mag = <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> in mag
    </p>
    <p>
      M<sub>&#9737;</sub> = <a href="https://de.wikipedia.org/wiki/Sonnenmasse" target="_blank" title="Sonnenmassen">Sonnenmassen</a>
    </p>
    <p>
      R<sub>&#9737;</sub> = <a href="https://de.wikipedia.org/wiki/Sonnenradius" target="_blank" title="Sonnenradien">Sonnenradien</a>
    </p>
  </div>
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
