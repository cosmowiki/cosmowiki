import React from 'react';

const WelcomeComponent = ({appUrl}) => {
  return (
    <main role="main" className="pure-u-1">
      <div id="siteTitle" className="pure-u-1 welcome center">
        <h1>Willkommen</h1>
        <h3>auf CosmoWiki.org</h3>
      </div>
      <div id="welcomeArea" class="pure-u-1">
          <div id="presentationEvents" class="welcome-container pure-u-1">
          	<div class="welcome">
          		<h4>7. Januar 1610</h4>
          		<p>
        	  	        An diesem Tag entdeckte Galileo Galilei in Padua mit einem Nachbau des nur ein Jahr zuvor von Hans Lipperhey in Holland erfundenen Fernrohres die vier größten Monde des Jupiter - Io, Europa, Ganymed und Kallisto.  Seine Beobachtungen und bahnbrechenden Erkenntnisse über den Mond, das Jupiter-System und die Sterne veröffentlichte er noch im gleichen Jahr in seinem Werk <i>"Sidereus nuncius"</i>. Die Ringe des Saturn deutete er übrigens als Henkel des Planeten ;-)
        	  	</p>
        	  	<p>
        	  	  Weitere {[numberOfEvents]-1} Ereignisse aus der spannenden Geschichte von Astronomie und Raumfahrt finden Sie <a href="/events">>>> hier</a>.
        	  	</p>
       	 	  </div>
       	 	</div>
          <div id="presentationScientists" class="presentation-container pure-u-1 pure-u-md-1-2">
          	<div class="presentation">
          		<h4>{[countAstronomers]} Astronomen!</h4>
          		<p>
          			Hier finden Sie zwar nicht alle, aber zumindest die bedeutendsten Astronomen der Menschheitsgeschichte. Bereits die frühen Menschen dürften sich gefragt haben, was dort oben am Himmel Nacht für Nacht vorüberzieht. In Babylonien, dem antiken China, Ägypten und Griechenland entstand aus der Astrologie allmälig die Astronomie als vielleicht älteste Wissenschaft. Doch CosmoWiki.org bietet noch viel mehr: {[countScientists]-[countAstronomers]} weitere Wissenschaftler - Physiker, Mathematiker, Kosmologen und Ingenieure mit Angaben zu ihrer Person, ihren größten Erfolgen und Auszeichnungen finden Sie <a href="/scientists">>>> hier</a>.
          		</p>
          	</div>
          </div>
          <div id="presentationAstronauts" class="presentation-container pure-u-1 pure-u-md-1-2">
          	<div class="presentation">
          		<h4>{[totalAstronautsHoursInSpace]}</h4>
          		<p>
          			Eine unglaubliche Zahl! So viele Stunden haben alle {[countAstronauts]} Astronauten zusammengerechnet bis heute<sup>*</sup> im All verbracht. Sie reisen in hauchdünnen Röhren aus Aluminium auf hunderten Tonnen hochentzündlicher Treibstoffe mit mehreren Kilometern pro Sekunde ins All. Dort erforschen sie neue Materialien und Fertigungsmethoden, führen Installationen und Reparaturen an Raumschiffen durch und setzen ihre Fußabdrücke auf fremde Himmelskörper. Sie sind die Botschafter der Menschheit im Universum. Besuchen Sie unsere Seite über <a href="/astronauts">Raumfahrer</a>.<br />
          			<sup>*</sup> <small>Stand: {[lastUpdated]}</small>
          		</p>
          	</div>

    </main>
  )
};

export default WelcomeComponent;
