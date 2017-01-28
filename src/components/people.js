import React from 'react';
import Notes from './notes';
import LetterLinks from './chunks/letter-links';

const PeopleComponent = ({groupedPeople}) => {
  const allFirstLetters = Object.keys(groupedPeople);
  const groupsIterable = allFirstLetters.map(key => groupedPeople[key]);

  return (
    <main role="main" className="pure-u-1">
      <div id="featured" className="persons pure-u-1 center">
        <h1>Personen</h1>
        <h3>Entdecker, Pioniere, Wissenschaftler</h3>
      </div>
      <div id="todo" className="pure-u-1">
        @wolfram pls hide the filter-option "astronauts" on astronomers- and astronauts-site<br />
        @wolfram pls set a comma between 1st and 2nd name only if 2nd exists (e.g. at Aristoteles)<br />
        @all find a way for sorter and filter on small screens (toggle-buttons?)<br />
        @all hide letterLinks on small screens?
      </div>
      <div id="functionArea" className="persons pure-u-1">
        <div id="sort" className="people">
          <a href="#" className="toggle-sort" name="toggle-sort">Sortieren</a>
          <div id="sortArea">
            <form id="sortPeople" className="sort-form">
              <select name="sortPeople">
                <option value="sortPeopleNameUp" selected>Name - aufsteigend</option>
                <option value="sortPeopleNameDown">Name - absteigend</option>
                <option value="sortPeopleBornUp">Geburtsdatum - aufsteigend</option>//not important yet, too much items w/o dates
                <option value="sortPeopleBornDown">Geburtsdatum - absteigend</option>//not important yet, too much items w/o dates
                <option value="sortPeopleDiedUp">Sterbedatum - aufsteigend</option>//not important yet, too much items w/o dates
                <option value="sortPeopleDiedDown">Sterbedatum - absteigend</option>//not important yet, too much items w/o dates
              </select>
            </form>
          </div>
        </div>
        <div id="filter" className="people">
          <a href="#" className="toggle-filter" name="toggle-filter">Filtern</a>
          <div id="filterArea">
            <form id="filterPeople" className="filter-form">
              <label>Beruf:</label>
              <select name="filterPeopleProfession">
                <option value="filterPeopleAll" selected>alle</option>
                <option value="filterPeopleAstronomers">Astronomen</option>
                <option value="filterPeoplePhysicists">Physiker</option>
                <option value="filterPeopleAstronauts">Raumfahrer</option>
                <option value="filterPeoplePioneers">Raumfahrtpionier</option>
              </select>
            </form>
          </div>
        </div>
        <LetterLinks letters={allFirstLetters} />
      </div>
      <div id="dataArea" className="people pure-u-1">
        <div id="personsTable">
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
          <div id={groupKey} className="letter-section pure-u-1">
            <div className="letter-section-header pure-u-1">
              <div className="first-letter pure-u-1-2">
                <p name={`#${groupKey}`}>{groupKey}</p>
              </div>
              <div className="scroll-up-arrow pure-u-1-2 right">
                <p><a href="javascript:self.scrollTo(0,0);">&uarr;</a></p>
              </div>
            </div>
            {people.map((person, idx) => <PersonComponent person={person} key={idx} />)}
          </div>
  );
};

const PersonComponent = ({person}) => {
  return (
            <div className="person-row data-row pure-u-1">
              <div className="person-name pure-u-1 pure-u-md-1-2 pure-u-lg-7-24">
                <div className="pure-u-1">
                  <p><a href={person.link}>{person.name}</a></p>
                </div>
              </div>
              <div className="person-data1 pure-u-1 pure-u-md-3-24 pure-u-lg-5-24">
                <div className="person-born pure-u-1-2 pure-u-md-1 pure-u-lg-1-2 center">
                  <p>{person.born ? `∗ ${person.born}` : ''}</p>
                </div>
                <div className="person-died pure-u-1-2 pure-u-md-1 pure-u-lg-1-2 center">
                  <p>{person.died ? `† ${person.died}`: ''}</p>
                </div>
              </div>
              <div className="person-data2 pure-u-1 pure-u-md-9-24 pure-u-lg-1-2">
                <div className="person-country pure-u-1-2 pure-u-md-1 pure-u-lg-1-2 center">
                  <p>{person.country ? person.country : ''}</p>
                </div>
                <div className="person-profession pure-u-1-2 pure-u-md-1 pure-u-lg-1-2 center">
                  <p>{person.profession ? person.profession : ''}</p>
                </div>
              </div>
            </div>
  );
};

// old code with the tooltip on hover
// import classNames from 'classnames';
// class PersonComponent extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {detailsVisible: false};
//   }
//
//   render() {
//     const showDetails = () => {
//       this.setState({detailsVisible: true});
//     };
//     const hideDetails = () => {
//       this.setState({detailsVisible: false});
//     };
//
//     const {person} = this.props;
//     let cssClasses = ['person-infobox pure-u-1 pure-u-md-1-2 pure-u-lg-1-3'];
//     cssClasses.push(this.state.detailsVisible ? 'visible' : 'hidden');
//
//     return (
//             <div className="person-row data-row pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
//               <div className="person-item">
//                 <a onMouseOver={showDetails} onMouseOut={hideDetails} href={person.wikipediaUrl}>{person.name}</a>
//               </div>
//               <div className={classNames(cssClasses)}>
//                 <div className="person-profession">{person.profession}</div>
//                 <div className="person-life">
//                   {person.born ? `∗ ${person.born}` : ''} &nbsp;
//                   {person.died ? `† ${person.died}`: ''}</div>
//                 <div className="person-country">{person.country}</div>
//                 <div className="person-info justify">{person.description}</div>
//               </div>
//             </div>
//     );
//
//   }
//
// }
