import React from 'react';

const questions = {
  whatis: {
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
          Quellen, sammeln, verknüpfen und bereiten sie hier in möglichst übersichtlicher Weise auf.
          CosmoWiki.org ist also ein zentraler Platz im Netz, an dem der Nutzer zwei der
          faszinierendsten Gebiete aus Wissenschaft und Technik auf neue Weise entdecken kann.
        </p>
        <p>
          CosmoWiki.org dient interessierten Laien ebenso wie begeisterten Amateuren
          und allen anderen Space-Fans. Jeder Nutzer kann hier frei das gewaltige
          Universum der Astronomie und Raumfahrt unter einem Dach entdecken,
          die Geschichte dieser zwei wohl bedeutendsten Bereiche aus Wissenschaft
          und Technik erkunden und zielgerichtet Informationen über Personen, Orte oder Objekte finden.
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
          interessante Fakten und Daten ergänzt. Zusätzlich wird auch die Seite selbst
          weiterentwickelt, neue Funktionen werden das Nutzererlebnis verbessern.
          Wir hoffen auch, CosmoWiki.org bald in anderen Sprachen anbieten zu können.
        </p>
        <p>
          Die Community soll das Zentrum dieser Seite sein. Wir setzen auf den
          Enthusiasmus von Amateuren genauso wie auf die Fachkenntnisse von
          Wissenschaftlern und Historikern um ein Werk zu schaffen, das auch
          kritischen Analysen standhält.
        </p>
        <p>
          Grundsätzliches:
        </p>
        <p>
          CosmoWiki wird und kann niemals die Ansprüche auf Richtigkeit, Vollständigkeit
          und Aktualität der hier angezeigten Daten erheben. Wir stützen uns hauptsächlich
          auf die Informationen der Wikimedia-Gemeinde, was gewisse Problemstellungen
          in sich birgt. Einerseits können auch die fleißigsten Autoren nicht die
          unglaubliche Flut von wissenschaftlichen Veröffentlichungen zeitnah und
          in Gänze in ihre Artikel einpflegen - und auch wir können nicht rund um
          die Uhr an diesem Projekt arbeiten.
        </p>
        <p>
          Andererseits existieren zum Teil widersprüchliche Aussagen verschiedener
          Quellen zu einer Sache, denn auch Forschungsergebnisse lassen sich häufig
          auf unterschiedliche Weise interpretieren. Ergeben sich zum Beispiel
          schon zwischen verschiedensprachigen Wikipedia-Artikeln zu den selben
          Objekten inhaltliche Unterschiede, beruhen diese möglicherweise auf einer
          unklaren Quellenlage, auf Übersetzungs- und auch Schreibfehlern. Verlässliche
          Informationen aufzubereiten ist so gesehen keine leichte Aufgabe, doch
          wir bemühen uns mit größtmöglicher Sorgfalt, Fehler zu vermeiden.
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
  thanks: {
    question: 'Danke!',
    answer:
      <li>
        <p>
          An dieser Stelle möchten wir uns ganz herzlich
          bei <a title="Wikimedia" href="https://www.wikimedia.org" target="_blank"><b>Wikimedia</b></a>, der
          Online-Enzyklopädie <a title="Wikipedia.org" href="http://de.wikipedia.org/" target="_blank"><b>Wikipedia.org</b></a> und
          seinen vielen freiwilligen Mitarbeitern für das größte Lexikon
          der Welt bedanken! Sie alle haben das Wissen der Menschheit in das
          21. Jahrhundert katapultiert und erweisen uns allen damit täglich einen unschätzbaren Dienst.
        </p>
        <p>
          Weiterhin bedanken wir uns von ganzem Herzen bei <a title="Wolfram Kriesing" href="https://twitter.com/wolframkriesing" target="_blank"><b>Wolfram Kriesing</b></a> für
          die Programmierung des gesamten Unterbaus dieser Seite,
          unzählige andere Hilfestellungen rund um die Webprogrammierung und die
          generelle Unterstützung des Projektes.
        </p>
      </li>
  },
  contact: {
    question: 'Kontakt',
    answer:
      <li className="center">
        <form className="pure-u-3-4 pure-u-sm-2-3 pure-u-md-1-2 pure-u-lg-1-3">
          <label htmlFor="name">Ihr Name:
            <input type="text" id="contactName" name="name" />
          </label>
          <label htmlFor="mail">Ihre Mailadresse:
            <input type="email" id="contactMail" name="mail" />
          </label>
          <label htmlFor="subject">Betreff:
            <input type="text" id="contactSubject" name="subject" />
          </label>
          <label htmlFor="message">Ihre Nachricht:
            <textarea id="contactMessage" name="message" cols="40" rows="10" />
          </label>
          <button>Senden</button>
        </form>
      </li>
  },
  imprint: {
    question: 'Impressum',
    answer:
      <li>
        <p>
          <img src="/img/imprint.png" />
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
        <div id="siteTitle" className="about pure-u-1 center">
          <div id="siteTitleContainer">
            <h1>Wir über uns</h1>
            <h3>Ohne Idee keine Entwicklung</h3>
          </div>
        </div>
        <div id="todo" className="pure-u-1">
          <p>@wolfram: pls when clicking on link in #footerElse jump to the question but avoid covering by branding</p>
          <p>@wolfram: pls make the contact form work, send mail to admin@cosmowiki.org</p>
        </div>
        <div id="about">
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
  const linkActivity = isVisible ? ' expanded' : ' collapsed';
  const listVisibility = isVisible ? ' visible' : ' hidden';

  return (
    <li className="question">
      <a className={'question-link' + linkActivity} href={'#' + category} onClick={toggleFunction}>{' ' + question}</a>
      <ul id={category} className={'answer' + listVisibility}>{answer}</ul>
    </li>
  );
};
