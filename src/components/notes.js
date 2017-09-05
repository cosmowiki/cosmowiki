import React from 'react';

const defaultNotes = (
  <div id="defaultNotes">
    <div id="notComplete" className="pure-u-1 center">
      <p>
        Sie kennen noch mehr Daten zu dieser Seite?<br/>
        <a href="/about#contact" target="_self" title="Kontakt">Bereichern Sie cosmowiki.org.</a>
      </p>
    </div>
  </div>
);

const constellationNotes = (
  <div id="constellationNotes">
    <p>
      <b>Lage des Sternbildes innerhalb der <a href="https://de.wikipedia.org/wiki/Himmelskugel" target="_blank" title="Himmeskugel">Himmelskugel</a>:</b>
    </p>
    <p>
      <i>N</i> - die Sternbilder liegen auf der Nordhalbkugel des Himmels,
    </p>
    <p>
      <i>S</i> - die Sternbilder liegen auf der Südhalbkugel des Himmels,
    </p>
    <p>
      <i>N S</i> und <i>S N</i> - die Sternbilder liegen etwa mittig auf dem Himmels&auml;quator,
    </p>
    <p>
      <i>Ns</i> und <i>Sn</i> - nur ein kleiner Teil des Sternbildareals liegt auf der mit dem Kleinbuchstaben bezeichneten Halbkugel.
    </p>
    <p>
      <b>Einheiten:</b>
    </p>
    <p>
      <i>deg<sup>2</sup></i> - Fl&auml;che (Raumwinkel) des Sternbildes in <a href="https://de.wikipedia.org/wiki/Quadratgrad" target="_blank" title="Quadratgrad">Quadratgrad</a>,
    </p>
    <p>
      <i>>3<sup>m</sup></i> - Zahl der Sterne im Sternbild mit <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbarer Helligkeit</a> über 3 mag,
    </p>
    <p>
      <i>>4<sup>m</sup></i> - Zahl der Sterne im Sternbild mit <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbarer Helligkeit</a> über 4 mag,
    </p>
    <p>
      <i>Mag<sub>max</sub></i> - <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> des hellsten Sterns im Sternbild in mag.
    </p>
  </div>
);

const starNotes = (
  <div id="starNotes">
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
      <i>Lj</i> = <a href="https://de.wikipedia.org/wiki/Lichtjahr" target="_blank" title="Lichtjahr">Entfernung Erde-Stern in Lichtjahren</a>,
    </p>
    <p>
      <i>mag</i> = <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> in mag,
    </p>
    <p>
      <i>M<sub>&#9737;</sub></i> = <a href="https://de.wikipedia.org/wiki/Sonnenmasse" target="_blank" title="Sonnenmassen">Sonnenmassen</a>,
    </p>
    <p>
      <i>R<sub>&#9737;</sub></i> = <a href="https://de.wikipedia.org/wiki/Sonnenradius" target="_blank" title="Sonnenradien">Sonnenradien</a>.
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
