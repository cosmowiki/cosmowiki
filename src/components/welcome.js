import React from 'react';

const WelcomeComponent = ({appUrl}) => {
	return (
		<main role="main" className="pure-u-1">
			<div id="siteTitle" className="pure-u-1 welcome center">
				<div id="siteTitleContainer">
					<h1>Willkommen</h1>
					<h3>auf CosmoWiki.org</h3>
				</div>
			</div>
			<div id="welcomeArea" className="pure-u-1">
				<div className="welcome-container pure-u-1">
					<div id="welcomeEvents" className="module">
						<h4>7. Januar 1610</h4>
						<p>
							An diesem Tag entdeckte Galileo Galilei in Padua mit einem Nachbau
							des nur ein Jahr zuvor von Hans Lipperhey in Holland erfundenen Fernrohres
							die vier größten Monde des Jupiter - Io, Europa, Ganymed und Kallisto.
							Seine Beobachtungen und bahnbrechenden Erkenntnisse über den Mond,
							das Jupiter-System und die Sterne veröffentlichte er noch im gleichen
							Jahr in seinem Werk <i>"Sidereus nuncius"</i> - der Sternenbote. Die
							Ringe des Saturn deutete er übrigens als Henkel des Planeten ;-)
						</p>
						<p>
							Weitere <code>[numberOfEvents]-1</code> Ereignisse aus der spannenden Geschichte
							von Astronomie und Raumfahrt finden Sie <a href="/events">hier</a>.
						</p>
		 	 		</div>
		 	 	</div>
				<div className="welcome-container pure-u-1 pure-u-md-1-2">
					<div id="welcomeScientists" className="module">
						<h4><code>[countAstronomers]</code> Astronomen!</h4>
						<p>
							Hier finden Sie zwar nicht alle, aber zumindest die bedeutendsten
							Astronomen der Menschheitsgeschichte. Bereits die frühen Menschen
							dürften sich gefragt haben, was dort oben am Himmel Nacht für Nacht
							vorüberzieht. In Babylonien, dem antiken China, Ägypten und Griechenland
							entstand aus der Astrologie allmälig die Astronomie als vielleicht
							älteste Wissenschaft. Doch CosmoWiki.org bietet noch viel
							mehr: <code>[countScientists]-[countAstronomers]</code> weitere Wissenschaftler - Physiker,
							Mathematiker, Kosmologen und Ingenieure mit Angaben zu ihrer Person,
							ihren größten Erfolgen und Auszeichnungen finden Sie <a href="/scientists">hier</a>.
						</p>
					</div>
		 	 	</div>
				<div className="welcome-container pure-u-1 pure-u-md-1-2">
					<div id="welcomeAstronauts" className="module">
						<h4><code>[totalAstronautsHoursInSpace]</code></h4>
						<p>
							Eine unglaubliche Zahl! So viele Stunden haben alle <code>[countAstronauts]</code>
							Astronauten zusammengerechnet bis heute<sup>*</sup> im All verbracht.
							Sie reisen in hauchdünnen Röhren aus Aluminium auf hunderten Tonnen
							hochentzündlicher Treibstoffe mit mehreren Kilometern pro Sekunde
							ins All. Dort erforschen sie neue Materialien und Fertigungsmethoden,
							führen Installationen und Reparaturen an Raumschiffen durch und
							setzen ihre Fußabdrücke auf fremde Himmelskörper. Sie sind die Botschafter
							der Menschheit im Universum. Besuchen Sie unsere Seite über <a href="/astronauts">Raumfahrer</a>.<br />
							<sup>*</sup> <small>Stand: <code>[lastUpdated]</code></small>
						</p>
					</div>
				</div>
			</div>
		</main>
	)
};

export default WelcomeComponent;
