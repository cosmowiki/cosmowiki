import React from 'react';

const defaultNotes = (
  <div id="notesDefault">
    <div id="notComplete" className="pure-u-1 center">
      <p>
        Sie kennen noch mehr Daten zu dieser Seite?<br/>
        <a href="/about#contact" target="_self" title="Kontakt">Bereichern Sie cosmowiki.org.</a>
      </p>
    </div>
  </div>
);

const constellationNotes = (
  <div id="notesConstellations">
    <div id="notesUnits" className="pure-u-1">
      <h4>Einheiten:</h4>
      <p>
        <i>deg<sup>2</sup></i> = <a href="https://de.wikipedia.org/wiki/Raumwinkel" target="_blank" title="Raumwinkel">Raumwinkel</a> (Fl&auml;che) in Quadratgrad
      </p>
      <p>
        <i>mag</i> = <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> in Magnitudo
      </p>
    </div>
  </div>
);

const starNotes = (
  <div id="notesStars">
    <div id="notesGlossary" className="pure-u-1 pure-u-lg-1-2">
      <h4>Hinweise:</h4>
      <p>
        Die Daten der einzelnen Sterne stammen aus den englischen Wikipedia-Artikeln,
        da diese meist umfangreicher und mit genaueren Quellenangaben belegt sind.
      </p>
      <h4>Griechische Buchstaben:</h4>
      <div className="notesTable">
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">α = Alpha</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">β = Beta</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">γ = Gamma</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">δ = Delta</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ε = Epsilon</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ζ = Zeta</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">η = Eta</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">θ = Theta</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ι = Iota</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">κ = Kappa</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">λ = Lambda</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">μ = My</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ν = Ny</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ξ = Xi</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ο = Omikron</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">π = Pi</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ρ = Rho</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">σ = Sigma</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">τ = Tau</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">υ = Ypsilon</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">φ = Phi</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">χ = Chi</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ψ = Psi</div>
        <div className="pure-u-1-3 pure-u-sm-1-4 pure-u-md-1-5 pure-u-lg-1-6">ω = Omega</div>
      </div>
    </div>
    <div id="notesUnits" className="pure-u-1 pure-u-lg-1-2">
      <h4>Einheiten:</h4>
      <p>
        <i>Lj</i> = <a href="https://de.wikipedia.org/wiki/Lichtjahr" target="_blank" title="Lichtjahr">Entfernung Erde-Stern in Lichtjahren</a>
      </p>
      <p>
        <i>mag</i> = <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> in Magnitudo
      </p>
      <p>
        <i>M<sub>&#9737;</sub></i> = <a href="https://de.wikipedia.org/wiki/Sonnenmasse" target="_blank" title="Sonnenmassen">Sonnenmassen</a>
      </p>
      <p>
        <i>R<sub>&#9737;</sub></i> = <a href="https://de.wikipedia.org/wiki/Sonnenradius" target="_blank" title="Sonnenradien">Sonnenradien</a>
      </p>
    </div>
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
