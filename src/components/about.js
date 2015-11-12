import React from 'react';

const questions = {
  what: {
    question: 'Was ist CosmoWiki.de überhaupt?',
    answer:
      <li>
        <p>
          CosmoWiki.de ist ein nichtkommerzielles Projekt zur Verbreitung von Wissen über die Bereiche Astronomie und Raumfahrt.<br/>
          Auf Plattformen wie z.B. Wikipedia existiert ein gewaltiger Wissensschatz, der von Enthusiasten mit größter Sorgfalt für jedermann erstellt und gepflegt wird.
          Doch warum sollte dieser phantastische Speicher nicht über seine eigentlichen Grenzen hinaus genutzt werden?
        </p>
        <p>
          Wir recherchieren unzählige Informationen aus Wikipedia und anderen Quellen, sammeln, veknüpfen und bereiten sie hier in möglichst übersichtlicher Weise auf.
          Cosmowiki.de ist also im Grunde ein Hybride aus Enzyklopädie und Aggregator - ein zentraler Platz im Netz,
          an dem der Nutzer zwei der faszinierendsten Gebiete aus Wissenschaft und Technik auf neue Weise entdecken kann.
        </p>
      </li>
  },
  who: {
    question: 'Wem nützt CosmoWiki.de, für wen wurde es geschaffen?',
    answer: 
      <li>
        <p>
          CosmoWiki.de dient uns allen - interessierten Laien ebenso wie begeisterten Amateuren und allen anderen Space-Fans.
          Jeder Nutzer kann hier frei das gewaltige Universum der Astronomie und Raumfahrt unter einem Dach entdecken, die Geschichte dieser zwei wohl bedeutendsten Bereiche menschlichen Schaffens
          erkunden und zielgerichtet Informationen über Personen, Orte oder Objekte finden.
        </p>
        <p>
          Selbst sind wir natürlich auch fasziniert von allem, was mit dem Weltall zu tun hat. So lautet unser Motto: <b>Nutzer arbeiten für Nutzer!</b>
        </p>
      </li>
  },
  license: {
    question: 'Darf ich Inhalte von CosmoWiki.de verwenden? Unter welcher Lizenz steht CosmoWiki.de?',
    answer:
      <li>
        <p>
          Alle Inhalte von CosmoWiki.de und die von Wikipedia eingebundenen Inhalte stehen unter der <a href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank">
          <i className="fa fa-creative-commons" /> Creative-Commons-Lizenz Attribution-ShareAlike 3.0 Unported (CC-by-sa-3.0)</a>, wenn nichts anderes ausgewiesen wird.
        </p>
        <p>
          Gemäß den Bestimmungen der von Wikipedia verwendeten Lizenz <a href="http://creativecommons.org/licenses/by-sa/3.0/legalcode" target="_blank">
          <i className="fa fa-creative-commons" /> Creative-Commons-Lizenz Attribution-ShareAlike 3.0 Unported (CC-by-sa-3.0)</a> weisen wir darauf hin,
          dass CosmoWiki.de Artikel oder Teile von Artikeln von Wikipedia verwendet und einbindet.
          Dadurch steht CosmoWiki.de ebenfalls unter der <i className="fa fa-creative-commons" /> Creative Commons Lizenz CC BY-SA 3.0.
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
  },
  future: {
    question: 'Wie geht es weiter? Wie sieht die Zukunft von CosmoWiki.de aus?',
    answer:
      <li>
        <p>
          Dieses Projekt wird nie fertiggestellt sein, da sich auch Astronomie und Raumfahrt permanent weiterentwickeln. Unsere Datenbank wächst ständig um neue Inhalte an,
          bestehende Einträge werden um interessante Fakten ergänzt. Zusätzlich wird auch die Seite selbst weiterentwickelt, neue Funktionen werden das Nutzererlebnis verbessern.
          Wir hoffen auch, CosmoWiki.de bald auch in anderen Sprachen anbieten zu können.
        </p>
        <p>
          Die Community ist das Zentrum dieser Seite. Wir setzen auf den Enthusiasmus von Amateuren genauso wie auf die Fachkenntnisse von Naturwissenschaftlern und Historikern um ein Werk zu schaffen,
          das auch kritischen Analysen standhält.
        </p>
      </li>
  },
  contribute: {
    question: 'Wie kann ich helfen CosmoWiki.de zu verbessern?',
    answer:
      <li>
        <p>
          Wenn Sie etwas zu CosmoWiki.de beitragen und das Projekt unterstützen möchten, lassen Sie es uns wissen.
          Sie sind Hobby-Astronom oder Professor der Astrophysik, Historiker oder interessierter Laie, Raumfahrt-Begeisterter oder Astronaut, dann
          <a href="http://de.cosmowiki.de/kontakt" target="_self" title="Contact">kontaktieren Sie uns bitte hier</a>.
        </p>
        <p>
          Für Software-Entwickler und Programmierer ist CosmoWiki.de auch auf <a href="https://github.com/cosmowiki/cosmowikide" target="_blank" title="github">Github</a> zu finden.
        </p>
        <p>
          Wir sind stets offen für Ihre Anregungen und Ideen, jede Hilfe ist willkommen.
        </p>
      </li>
  },
  thx: {
    question: 'Danke!',
    answer:
      <li>
        <p>
          An dieser Stelle möchten wir uns ganz herzlich bei <a title="Wikimedia" href="https://www.wikimedia.org" target="_blank"><b>Wikimedia</b></a>,
        der Online-Enzyklopädie <a title="Wikipedia.org" href="http://de.wikipedia.org/" target="_blank"><b>Wikipedia.org</b></a> und seinen vielen freiwilligen Mitarbeitern
        für das größte Lexikon der Welt bedanken! Sie alle haben die Welt der Lexika in das 21. jahrhundert katapultiert und der Menschheit damit einen unschätzbaren Dienst erwiesen.
        </p>
        <p>
          Weiterhin bedanken wir uns sehr bei <a title="Wolfram Kriesing" href="https://twitter.com/wolframkriesing" target="_blank"><b>Wolfram Kriesing</b></a>
        für die Kartenanwendung auf der <a href="places.php" target="_self">"Orte"-Seite</a>, unzählige andere Hilfestellungen rund um die Webprogrammierung
        und die generelle Unterstützung des Projektes.
        </p>
      </li>
  }
};

export default class AboutComponent extends React.Component {
  
  constructor() {
    super();
    this.state = {visibleSection: ''};
  }

  render() {
    const {appUrl} = this.props;
    
    const toggleSection = name => this.state.visibleSection === name ? this.setState({visibleSection: ''}) : this.setState({visibleSection: name});
    const classNames = sectionName => this.state.visibleSection === sectionName ? 'answer visible' : 'answer hidden';
    const toggleOnClick = name => toggleSection.bind(null, name);
    const categories = Object.keys(questions);
    
    return (
		<main role="main" className="pure-u-1">
			<div id="featured" className="about center">
				<h1>Wir über uns</h1>
				<h3>Ohne Idee keine Entwicklung</h3>
			</div>
			<div id="about" className="justify">
				<ul id="aboutMenu">
          {categories.map(category => <Question which={category} toggleOnClick={toggleOnClick} classNames={classNames} />)}
				</ul>
			</div>
		</main>
    )
  }
}

class Question {
  
  render() {
    const {toggleOnClick, classNames, which} = this.props;
    const {question, answer} = questions[which];
    
    return (
      <li className="question">
         <a href={'#' + which} onClick={toggleOnClick(which)}><i className="fa fa-caret-right fa-fw" />{' ' + question}</a>
        <ul id={which} className={classNames(which)}>{answer}</ul>
      </li>
    );
    
  }
  
}