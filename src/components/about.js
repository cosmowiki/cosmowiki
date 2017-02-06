import React from 'react';

const questions = {
  what: {
    question: 'Was ist CosmoWiki.org?',
    answer:
      <li>
        <p>
          CosmoWiki.org ist ein gemeinnütziges, nicht-kommerzielles Projekt zur
          Verbreitung von Wissen über die Bereiche Astronomie und Raumfahrt.<br/>
          Mit der Wikipedia existiert ein gewaltiger Wissensschatz, der von
          Enthusiasten mit größter Sorgfalt für jedermann erstellt und gepflegt wird.
          Doch warum sollte dieser phantastische Speicher nicht über seine
          eigentlichen Grenzen hinaus genutzt werden?
        </p>
        <p>
          Wir recherchieren unzählige Informationen aus Wikipedia und anderen
          Quellen, sammeln, veknüpfen und bereiten sie hier in möglichst übersichtlicher Weise auf.
          CosmoWiki.org ist also ein zentraler Platz im Netz, an dem der Nutzer zwei der
          faszinierendsten Gebiete aus Wissenschaft und Technik auf neue Weise entdecken kann.
        </p>
        <p>
          CosmoWiki.org dient interessierten Laien ebenso wie begeisterten Amateuren
          und allen anderen Space-Fans. Jeder Nutzer kann hier frei das gewaltige
          Universum der Astronomie und Raumfahrt unter einem Dach entdecken,
          die Geschichte dieser zwei wohl bedeutendsten Bereiche menschlichen
          Schaffens erkunden und zielgerichtet Informationen über Personen, Orte oder Objekte finden.
        </p>
        <p>
          Selbst sind wir natürlich auch fasziniert von allem, was mit dem
          Weltall zu tun hat. So lautet unser Motto: <b>Nutzer arbeiten für Nutzer!</b>
        </p>
        <p>
          Ausblick:
        </p>
        <p>
          Dieses Projekt wird nie fertiggestellt sein, da sich auch Astronomie
          und Raumfahrt permanent weiterentwickeln. Unsere Datenbank wächst
          ständig um neue Inhalte an, bestehende Einträge werden um weitere
          interessante Fakten ergänzt. Zusätzlich wird auch die Seite selbst
          weiterentwickelt, neue Funktionen werden das Nutzererlebnis verbessern.
          Wir hoffen auch, CosmoWiki.org bald in anderen Sprachen anbieten zu können.
        </p>
        <p>
          Die Community ist das Zentrum dieser Seite. Wir setzen auf den
          Enthusiasmus von Amateuren genauso wie auf die Fachkenntnisse von
          Wissenschaftlern und Historikern um ein Werk zu schaffen, das auch
          kritischen Analysen standhält.
        </p>
      </li>
  },
  license: {
    question: 'Darf ich Inhalte von CosmoWiki.org verwenden? Unter welcher Lizenz steht CosmoWiki.org?',
    answer:
      <li>
        <p>
          Alle Inhalte von CosmoWiki.org und die von Wikipedia eingebundenen Inhalte
          stehen unter der <a href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank">
          <i className="fa fa-creative-commons" /> Creative-Commons-Lizenz Attribution-ShareAlike 3.0 Unported (CC-by-sa-3.0)</a>, wenn nichts anderes ausgewiesen wird.
        </p>
        <p>
          Gemäß den Bestimmungen der von Wikipedia verwendeten Lizenz <i className="fa fa-creative-commons" /> CC-by-sa-3.0 weisen wir darauf hin,
          dass CosmoWiki.org Artikel oder Teile von Artikeln von Wikipedia verwendet und einbindet.
          Dadurch steht CosmoWiki.org ebenfalls unter der <i className="fa fa-creative-commons" /> Creative Commons Lizenz CC BY-SA 3.0.
        </p>
        <p>
          Sie dürfen:<br/>Teilen — das Material in jedwedem Format oder Medium
          vervielfältigen und weiterverbreiten.<br/>Bearbeiten — das Material
          remixen, verändern und darauf aufbauen und zwar für beliebige Zwecke, sogar kommerziell.
        </p>
        <p>
          Weitere Informationen zu der verwendeten Lizenz erhalten sie hier: <a href="http://creativecommons.org/licenses/by-sa/3.0/de/" target="_blank">http://creativecommons.org/licenses/by-sa/3.0/de/</a>
        </p>
      </li>
  },
  contribute: {
    question: 'Wie kann ich helfen CosmoWiki.org zu verbessern?',
    answer:
      <li>
        <p>
          Sie sind Hobby-Astronom oder Professor der Astrophysik, Historiker oder
          interessierter Laie, Raumfahrt-Begeisterter oder Astronaut? Sie haben
          Fehler gefunden, möchten Daten ergänzen oder diese Seite auf andere Weise bereichern?
          Wenn Sie etwas zu CosmoWiki.org beitragen und das Projekt unterstützen möchten,
          dann <a href="http://de.CosmoWiki.org/kontakt" target="_self" title="Contact">kontaktieren Sie uns bitte hier</a>.
        </p>
        <p>
          Software-Entwickler und Programmierer können auch
          auf <a href="https://github.com/cosmowiki/cosmowikide" target="_blank" title="github">Github</a> an
          CosmoWiki.org mitarbeiten.
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
          An dieser Stelle möchten wir uns ganz herzlich
          bei <a title="Wikimedia" href="https://www.wikimedia.org" target="_blank"><b>Wikimedia</b></a>, der
          Online-Enzyklopädie <a title="Wikipedia.org" href="http://de.wikipedia.org/" target="_blank"><b>Wikipedia.org</b></a> und
          seinen vielen freiwilligen Mitarbeitern für das größte Lexikon
          der Welt bedanken! Sie alle haben das Wissen der Menschheit in das
          21. Jahrhundert katapultiert und uns allen damit einen unschätzbaren Dienst erwiesen.
        </p>
        <p>
          Weiterhin bedanken wir uns von ganzem Herzen bei <a title="Wolfram Kriesing" href="https://twitter.com/wolframkriesing" target="_blank"><b>Wolfram Kriesing</b></a> für
          die Programmierung des gesamten Unterbaus dieser Seite,
          unzählige andere Hilfestellungen rund um die Webprogrammierung und die
          generelle Unterstützung des Projektes.
        </p>
      </li>
  },
  imprint: {
    question: 'Impressum',
    answer:
      <li>
        <p>

        </p>
      </li>
  }
};

export default class AboutComponent extends React.Component {

  constructor() {
    super();
    this.state = {visibleSection: ''};
  }

  toggleCategory(category) {
    const newState = this.state.visibleSection === category ? '' : category;
    this.setState({visibleSection: newState});
  }

  render() {
    const buildToggleFunctionFor = category => this.toggleCategory.bind(this, category);
    const categories = Object.keys(questions);
    const isVisible = category => this.state.visibleSection === category;

    return (
      <main role="main" className="pure-u-1">
        <div id="featured" className="pure-u-1 about center">
          <h1>Wir über uns</h1>
          <h3>Ohne Idee keine Entwicklung</h3>
        </div>
        <div id="todo" className="pure-u-1">
          <p>@wolfram pls make the links in #footerElse open the appropriate answers in the about-site</p>
          <p>@wolfram pls delete the autoscroll to the choosen answer</p>
        </div>
        <div id="about" className="justify">
          <ul id="aboutMenu">
            {categories.map(category =>
              <Question category={category} toggleFunction={buildToggleFunctionFor(category)} isVisible={isVisible(category)} key={category} />)}
          </ul>
        </div>
      </main>
    )
  }

  componentWillMount() {
    const category = typeof window !== 'undefined' && window.location.hash.replace(/^#/, '');
    this.toggleCategory(category);
  }
}

const Question = ({toggleFunction, category, isVisible}) => {
  const {question, answer} = questions[category];
  const classNames = isVisible ? 'answer visible' : 'answer hidden';

  return (
    <li className="question">
      <a className="question-link" href={'#' + category} onClick={toggleFunction}><i className="fa fa-caret-right fa-fw" />{' ' + question}</a>
      <ul id={category} className={classNames}>{answer}</ul>
    </li>
  );
};
