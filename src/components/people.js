import React from 'react';
import Notes from './notes';
import LetterLinks from './chunks/letter-links';

const PeopleComponent = ({groupedPeople}) => {
  const allFirstLetters = Object.keys(groupedPeople);
  const groupsIterable = allFirstLetters.map(key => groupedPeople[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="persons">
        <h1>Personen</h1>
        <h3>Entdecker, Pioniere, Wissenschaftler</h3>
      </div>

      <LetterLinks letters={allFirstLetters} />

      <div id="dataArea" className="people">
        <div id="personTable">
          {groupsIterable.map((group, idx) => <PersonGroupComponent group={group} key={idx} />)}
        </div>
      </div>
      <Notes />
    </main>
  );
};

export default PeopleComponent;

const PersonGroupComponent = ({group}) => {
  const groupKey = group.key;
  const people = group.data;

  return (
    <div id={groupKey} className="pure-u-1 letter-section">
      <div className="pure-u-1 letter-section-header">
        <a className="first-letter pure-u-1-2" name={`#${groupKey}`}>{groupKey}</a>
        <a className="scrollUpArrow pure-u-1-2 right" href="javascript:self.scrollTo(0,0);">&uarr;</a>
      </div>
      {people.map((person, idx) => <PersonComponent person={person} key={idx} />)}
    </div>
  );
};

import classNames from 'classnames';
class PersonComponent extends React.Component {

  constructor() {
    super();
    this.state = {detailsVisible: false};
  }

  render() {
    const showDetails = () => {
      this.setState({detailsVisible: true});
    };
    const hideDetails = () => {
      this.setState({detailsVisible: false});
    };

    const {person} = this.props;
    let cssClasses = ['personInfoBox'];
    cssClasses.push(this.state.detailsVisible ? 'visible' : 'hidden');

    return (
      <div className="personRow pure-u-1 pure-u-lg-1-3 pure-u-md-1-2">
        <div className="personItem">
          <a onMouseOver={showDetails} onMouseOut={hideDetails} href={person.wikipediaUrl}>{person.name}</a>
        </div>
        <div className={classNames(cssClasses)}>
          <div className="personProfession">{person.profession}</div>
          <div className="personLife">
            {person.born ? `∗ ${person.born}` : ''} &nbsp;
            {person.died ? `† ${person.died}`: ''}</div>
          <div className="personCountry">{person.country}</div>
          <div className="personInfo justify">{person.description}</div>
        </div>
      </div>
    );

  }

}
