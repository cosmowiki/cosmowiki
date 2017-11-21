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
				<div id="welcomeCosmowiki">
					<div className="welcome-cosmowiki">
						<p>
							<a href="#welcomeEvents">4 2 3  E r e i g n i s s e </a> <a href="#welcomeScientists">6 3 8  W i s s e n s c h a f t l e r </a> <a href="#welcomeAstronauts">3 8 7  R a u m f a h r e r </a> <a href="#welcomePlaces">3 6 5  O r t e </a> <a href="#welcomeSolsys">2 2 6  H i m m e l s k ö r p e r </a> <a href="#welcomeConstellations">8 8  S t e r n b i l d e r </a> <a href="#welcomeStars">4 4 6  S t e r n e </a> <a href="#welcomeSpacestations">2 2  R a u m s t a t i o n e n </a> <a href="#welcomeSpacetelescopes">9 8  W e l t r a u m t e l e s k o p e </a> <a href="#welcomeSpacewalkes">3 8 9  W e l t r a u m a u s s t i e g e </a> <a href="#welcomeMissions">7 4 2  M i s s i o n e n</a>
						</p>
					</div>
				</div>
				<div id="welcomeEvents" className="welcome-container">
					<h4>7. Januar 1610</h4>
					<div className="welcome-text pure-u-1">
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
				<div id="welcomeScientists" className="welcome-container">
					<h4><code>[countAstronomers]</code> Astronomen!</h4>
					<div className="welcome-text pure-u-1">
						<p>
							Hier finden Sie zwar nicht alle, aber zumindest die bedeutendsten
							Astronomen der Menschheitsgeschichte. Bereits die frühen Menschen
							dürften sich gefragt haben, was dort oben am Himmel Tag für Tag und
							Nacht für Nacht	vorüberzieht. In Babylonien, dem antiken China, Ägypten
							und Griechenland entstand aus der Astrologie allmälig die Astronomie
							als vielleicht älteste Wissenschaft.
						</p>
						<p>
							Weitere <code>[countScientists]-[countAstronomers]</code> Astrophysiker,
							Kosmologen, Mathematiker und andere Wissenschaftler finden
							Sie <a href="/scientists">hier</a>.
						</p>
					</div>
		 	 	</div>
				<div id="welcomeAstronauts" className="welcome-container">
					<h4><code>[totalAstronautsHoursInSpace]</code></h4>
					<div className="welcome-text pure-u-1">
						<p>
							Eine unglaubliche Zahl! So viele Stunden haben alle <code>[countAstronauts]</code>
							Astronauten zusammengerechnet bis heute<sup>*</sup> im All verbracht.
							Sie reisen in hauchdünnen Röhren aus Aluminium auf hunderten Tonnen
							hochentzündlicher Treibstoffe mit mehreren Kilometern pro Sekunde
							ins All. Dort erforschen sie neue Materialien und Fertigungsmethoden,
							führen Installationen und Reparaturen an Raumschiffen durch und
							setzen ihre Fußabdrücke auf fremde Himmelskörper. Sie sind die Botschafter
							der Menschheit im Universum.
						</p>
						<p>
							Besuchen Sie unsere Seite über <a href="/astronauts">Raumfahrer</a>.<br />
							<sup>*</sup> <small>Stand: <code>[lastUpdated]</code></small>
						</p>
					</div>
				</div>
				<div id="welcomePlaces" className="welcome-container">
					<h4>28° 37&prime; 4&Prime; N, 80° 36&prime; 45&Prime; W</h4>
					<div className="welcome-text pure-u-1">
						<p>
							Genau dort befindet sich der Launch Complex 39, und von dort starteten
							Neil Armstrong, Buzz Aldrin und Michael Collins am 16. Juli 1969 mit
							Apollo 11 zu ihrem legendären Flug zum Mond. Doch hier begannen nicht
							nur	sämtliche Apollo-Missionen, auch alle 135 Space-Shuttle-Flüge
							zwischen 1981 und 2011 starteten	hier. LC-39 mit seinen zwei Plattformen
							A	und B ist der einzige	Startplatz des Kennedy Space Center. Am Cape
							Canaveral befinden sich zwar über 30 weitere, meist inaktive Startplätze,
							die allerdings zur Cape Canaveral Air Force Station (CCAFS)	gehören.
						</p>
						<p>
							Erkunden Sie <code>[countPlaces]</code> interessante <a href="/places">Orte</a> der
							Astronomie und Raumfahrt.
						</p>
		 	 		</div>
		 	 	</div>
				<div id="welcomeSolsys" className="welcome-container">
					<h4>Götter und Nymphen ...</h4>
					<div className="welcome-text pure-u-1">
						<p>
							... sind die Namensgeber vieler Himmelskörper in unserem Sonnensytem.
							Die Planeten tragen die Namen römischer Götter. Lediglich Uranus
							wurde von seinem Entdecker Wilhelm Herschel im Jahr 1781 nach dem
							griechischen Himmelsgott Uranos benannt. Sein Sohn John Herschel gab
							zwei Uranus-Monden die Namen von Figuren aus Shakespeares Sommernachtstraum
							- Titania und Oberon.
						</p>
						<p>
							Entdecken Sie <code>[countSolsysBodies]</code> Himmelskörper unseres <a href="/solar-system">Sonnensystems</a>.
						</p>
		 	 		</div>
		 	 	</div>
				<div id="welcomeConstellations" className="welcome-container">
					<h4></h4>
					<div className="welcome-text pure-u-1">
						<p></p>
						<p><a href="/constellations">Sternbilder</a></p>
		 	 		</div>
		 	 	</div>
				<div id="welcomeStars" className="welcome-container">
					<h4></h4>
					<div className="welcome-text pure-u-1">
						<p></p>
						<p><a href="/stars">Sterne</a></p>
		 	 		</div>
		 	 	</div>
				<div id="welcomeSpacestations" className="welcome-container">
					<h4></h4>
					<div className="welcome-text pure-u-1">
						<p></p>
						<p><a href="/space-stations">Weltraumstationen</a></p>
		 	 		</div>
		 	 	</div>
				<div id="welcomeSpacetelescopes" className="welcome-container">
					<h4></h4>
					<div className="welcome-text pure-u-1">
						<p></p>
						<p><a href="/space-telescopes">Weltraumteleskope</a></p>
		 	 		</div>
		 	 	</div>
				<div id="welcomeMissions" className="welcome-container">
					<h4></h4>
					<div className="welcome-text pure-u-1">
						<p></p>
						<p><a href="/missions">Missionen</a></p>
		 	 		</div>
		 	 	</div>
			</div>
		</main>
	)
};

export default WelcomeComponent;
