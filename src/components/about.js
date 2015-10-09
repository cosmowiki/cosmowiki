import React from 'react';

export default class AboutComponent {

  render() {
    const {appUrl} = this.props;
    return (
		<main role="main" className="pure-u-2-3">
			<div id="featured" className="about center">
				<h1>Wir &uuml;ber uns</h1>
				<p>Ohne Idee keine Entwicklung</p>
			</div>
			<div id="about" className="justify">
				<ul id="aboutMenu">
					<li className="question"><a href="#" className="question" onclick="toggleAnswer('what')"><i className="fa fa-caret-right fa-fw"></i> Was ist CosmoWiki.de überhaupt?</a>
						<ul id="what" className="answer hidden">
							<li>
								<p>
									CosmoWiki.de ist ein nichtkommerzielles Projekt zur Verbreitung von Wissen über die Bereiche Astronomie und Raumfahrt.<br/>
									Auf Plattformen wie z.B. Wikipedia existiert ein gewaltiger Wissensschatz, der von Enthusiasten mit gr&ouml;&szlig;ter Sorgfalt f&uuml;r jedermann erstellt und gepflegt wird.
									Doch warum sollte dieser phantastische Speicher nicht &uuml;ber seine eigentlichen Grenzen hinaus genutzt werden?
								</p>
								<p>
									Wir recherchieren unz&auml;hlige Informationen aus Wikipedia und anderen Quellen, sammeln, vekn&uuml;pfen und bereiten sie hier in m&ouml;glichst &uuml;bersichtlicher Weise auf.
									Cosmowiki.de ist also im Grunde ein Hybride aus Enzyklop&auml;die und Aggregator - ein zentraler Platz im Netz,
									an dem der Nutzer zwei der faszinierendsten Gebiete aus Wissenschaft und Technik auf neue Weise entdecken kann.
								</p>
							</li>
						</ul>
					</li>
					<li className="question"><a href="#" className="question" onclick="toggleAnswer('who')"><i className="fa fa-caret-right fa-fw"></i> Wem n&uuml;tzt CosmoWiki.de, für wen wurde es geschaffen?</a>
						<ul id="who" className="answer hidden">
							<li>
								<p>
									CosmoWiki.de dient uns allen - interessierten Laien ebenso wie begeisterten Amateuren und allen anderen Space-Fans.
									Jeder Nutzer kann hier frei das gewaltige Universum der Astronomie und Raumfahrt unter einem Dach entdecken, die Geschichte dieser zwei wohl bedeutendsten Bereiche menschlichen Schaffens
									erkunden und zielgerichtet Informationen &uuml;ber Personen, Orte oder Objekte finden.
								</p>
								<p>
									Selbst sind wir nat&uuml;rlich auch fasziniert von allem, was mit dem Weltall zu tun hat. So lautet unser Motto: <b>Nutzer arbeiten f&uuml;r Nutzer!</b>
								</p>
							</li>
						</ul>
					</li>
					<li className="question"><a href="#" className="question" onclick="toggleAnswer('licence')"><i className="fa fa-caret-right fa-fw"></i> Darf ich Inhalte von CosmoWiki.de verwenden? Unter welcher Lizenz steht CosmoWiki.de?</a>
						<ul id="licence" className="answer hidden">
							<li>
								<p>
									Alle Inhalte von CosmoWiki.de und die von Wikipedia eingebundenen Inhalte stehen unter der <a href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank">
									<i className="fa fa-creative-commons"></i> Creative-Commons-Lizenz Attribution-ShareAlike 3.0 Unported (CC-by-sa-3.0)</a>, wenn nichts anderes ausgewiesen wird.
								</p>
								<p>
									Gem&auml;&szlig; den Bestimmungen der von Wikipedia verwendeten Lizenz <a href="http://creativecommons.org/licenses/by-sa/3.0/legalcode" target="_blank">
									<i className="fa fa-creative-commons"></i> Creative-Commons-Lizenz Attribution-ShareAlike 3.0 Unported (CC-by-sa-3.0)</a> weisen wir darauf hin,
									dass CosmoWiki.de Artikel oder Teile von Artikeln von Wikipedia verwendet und einbindet.
									Dadurch steht CosmoWiki.de ebenfalls unter der <i className="fa fa-creative-commons"></i> Creative Commons Lizenz CC BY-SA 3.0.
								</p>
								<p>
									Sie dürfen:<br/>Teilen — das Material in jedwedem Format oder Medium vervielfältigen und weiterverbreiten.<br/>Bearbeiten — das Material remixen, verändern und darauf aufbauen
									und zwar für beliebige Zwecke, sogar kommerziell.
								</p>
								<p>
									Weitere Informationen zu der verwendeten Lizenz erhalten sie hier:
									<a href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank">http://creativecommons.org/licenses/by-sa/3.0/de/</a>
								</p>
							</li>
						</ul>
					</li>
					<li className="question"><a href="#" className="question" onclick="toggleAnswer('future')"><i className="fa fa-caret-right fa-fw"></i> Wie geht es weiter? Wie sieht die Zukunft von CosmoWiki.de aus?</a>
						<ul id="future" className="answer hidden">
							<li>
								<p>
									Dieses Projekt wird nie fertiggestellt sein, da sich auch Astronomie und Raumfahrt permanent weiterentwickeln. Unsere Datenbank w&auml;chst st&auml;ndig um neue Inhalte an,
									bestehende Eintr&auml;ge werden um interessante Fakten erg&auml;nzt. Zus&auml;tzlich wird auch die Seite selbst weiterentwickelt, neue Funktionen werden das Nutzererlebnis verbessern.
									Wir hoffen auch, CosmoWiki.de bald auch in anderen Sprachen anbieten zu k&ouml;nnen.
								</p>
								<p>
									Die Community ist das Zentrum dieser Seite. Wir setzen auf den Enthusiasmus von Amateuren genauso wie auf die Fachkenntnisse von Naturwissenschaftlern und Historikern um ein Werk zu schaffen,
									das auch kritischen Analysen standh&auml;lt.
								</p>
							</li>
						</ul>
					</li>
					<li className="question"><a href="#" className="question" onclick="toggleAnswer('contribute')"><i className="fa fa-caret-right fa-fw"></i> Wie kann ich helfen CosmoWiki.de zu verbessern?</a>
						<ul id="contribute" className="answer hidden">
							<li>
								<p>
									Wenn Sie etwas zu CosmoWiki.de beitragen und das Projekt unterst&uuml;tzen m&ouml;chten, lassen Sie es uns wissen.
									Sie sind Hobby-Astronom oder Professor der Astrophysik, Historiker oder interessierter Laie, Raumfahrt-Begeisterter oder Astronaut, dann
									<a href="http://de.cosmowiki.de/kontakt" target="_self" title="Contact">kontaktieren Sie uns bitte hier</a>.
								</p>
								<p>
									F&uuml;r Software-Entwickler und Programmierer ist CosmoWiki.de auch auf <a href="https://github.com/cosmowiki/cosmowikide" target="_blank" title="github">Github</a> zu finden.
								</p>
								<p>
									Wir sind stets offen f&uuml;r Ihre Anregungen und Ideen, jede Hilfe ist willkommen.
								</p>
							</li>
						</ul>
					</li>
					<li className="question"><a href="#" className="question" onclick="toggleAnswer('thx')"><i className="fa fa-caret-right fa-fw"></i> Danke!</a>
						<ul id="thx" className="answer hidden">
							<li>
								<p>
									An dieser Stelle m&ouml;chten wir uns ganz herzlich bei <a title="Wikimedia" href="https://www.wikimedia.org" target="_blank"><b>Wikimedia</b></a>,
								der Online-Enzyklop&auml;die <a title="Wikipedia.org" href="http://de.wikipedia.org/" target="_blank"><b>Wikipedia.org</b></a> und seinen vielen freiwilligen Mitarbeitern
								f&uuml;r das gr&ouml;&szlig;te Lexikon der Welt bedanken! Sie alle haben die Welt der Lexika in das 21. jahrhundert katapultiert und der Menschheit damit einen unschätzbaren Dienst erwiesen.
								</p>
								<p>
									Weiterhin bedanken wir uns sehr bei <a title="Wolfram Kriesing" href="https://github.com/wolframkriesing" target="_blank"><b>Wolfram Kriesing</b></a>
								f&uuml;r die Kartenanwendung auf der <a href="places.php" target="_self">"Orte"-Seite</a>, unzählige andere Hilfestellungen rund um die Webprogrammierung
								und die generelle Unterst&uuml;tzung des Projektes.
								</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</main>
    )
  }
}