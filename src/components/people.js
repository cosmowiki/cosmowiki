import React from 'react';
import Notes from './notes';

export default class PeopleComponent {
  
  render() {
    
    const groupedPeople = this.props.groupedPeople;
    const allFirstLetters = groupedPeople.map(group => group.key);
    
    return (
      <main role="main" className="pure-u-2-3 pure-u-lg-1">
        <div id="featured" className="persons center">
          <h1>Personen</h1>
          <h3>Entdecker, Pioniere, Wissenschaftler</h3>
        </div>
        
        <LetterLinks letters={allFirstLetters} />
        
        <div id="dataTable" className="person">
          <div id="personTable">
            <div className="firstLetterRow">
            </div>
            {groupedPeople.map((group, idx) => <PersonGroupComponent group={group} key={idx} />)}
          </div>
        </div>
        <div id="notes">
          <Notes />
        </div>
      </main>    
    );
  }
  
}

class LetterLinks {
  
  render() {
    const {letters} = this.props;
    const lastIndex = letters.length - 1;
    return (
      <div id="letterLinks" className="person center">
        {letters.map((letter, index) => <Letter letter={letter} isLast={index == lastIndex} key={index} />)}
      </div>
    );
  }
  
}

class Letter {
  render() {
    const {letter, isLast} = this.props;
    const visibleString = isLast ? letter : letter + ' - ';
    return (<a href={`#${letter}`}>{visibleString}</a>)
  }
}

class PersonGroupComponent {
  
  render() {
    const group = this.props.group;
    const groupKey = group.key;
    const people = group.people;
    
    return (
      <div id={groupKey} className="pure-u-1 letter-section">
        <a className="first-letter" name={`#/people/${groupKey}`}>{groupKey}</a><br />
        {people.map((person, idx) => <PersonComponent person={person} key={idx} />)}
      </div>      
    );
  }
  
}

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
    
    const person = this.props.person;
    let cssClasses = ['personInfoBox'];
    cssClasses.push(this.state.detailsVisible ? 'visible' : 'hidden');
    
    return (
      <div className="personRow pure-u-1 pure-u-lg-1-3 pure-u-md-1-2">
        <div className="personItem">
          <a onMouseOver={showDetails} onMouseOut={hideDetails} href={person.wikipediaUrl}>{person.name}</a>
        </div>
        <div id={person.name} className={classNames(cssClasses)}>
          <div className="personProfession">{person.profession}</div>
          <div className="personLife">
            {person.born ? `∗ ${person.born}` : ''} &nbsp;
            {person.died ? `† ${person.died}`: ''}</div>
          <div className="personCountry">{person.country}</div>
          <div className="personInfo justify">{person.description}</div>
        </div>
      </div>
    );
    
//		$name = array($row[personName], $row[personFirstName]);
//		$name = implode(', ', array_filter($name));
//		// merge the date array elements yyyy mm dd to a dd.mm.yyyy string
//		$born = array($row[personBornD], $row[personBornM], $row[personBornY]);
//		$died = array($row[personDiedD], $row[personDiedM], $row[personDiedY]);
//		$born = implode('.', array_filter($born));
//		if (!empty($born)) {
//			$born = html_entity_decode('&lowast;').' '.$born;
//		}
//		$died = implode('.', array_filter($died));
//		if (!empty($died)) {
//			$died = html_entity_decode('&dagger;').' '.$died;
//		}
//		echo "<div class=\"personRow\">
//				<div class=\"personItem\">
//					<a onMouseOver=\"toggleIn('$name')\" onMouseOut=\"toggleOut('$name')\" href=$row[personLink]>$name</a>
//				</div>
//				<div id=\"$name\" class=\"hidden personInfoBox\">
//					<div class=\"personProfession\">$row[personProf]</div>
//					<div class=\"personLife\">$born   $died</div>
//					<div class=\"personCountry\">$row[personCountry]</div>
//					<div class=\"personInfo justify\">$row[personDescript]</div>
//				</div>
//			</div>";
  }
  
}

//<?php include("header.php")?>
//	<main role="main" class="pure-u-2-3">
//		<div id="featured" class="persons center">
//			<h1>Personen</h1>
//			<p>Entdecker, Pioniere, Wissenschaftler</p>
//		</div>
//		<div id="filter" class="person">
//			<form id="filterCountry">
//				<span style="font-weight: bold; ">filtern nach Land:</span>
//			</form>
//			<form id="filterProfession">
//				<span style="font-weight: bold; ">filtern nach Beruf:</span>
//			</form>
//		</div>
//		<div id="letterLinks" class="person center">
//			<a href="#A">A</a> -
//			<a href="#B">B</a> -
//			<a href="#C">C</a> -
//			<a href="#D">D</a> -
//			<a href="#E">E</a> -
//			<a href="#F">F</a> -
//			<a href="#G">G</a> -
//			<a href="#H">H</a> -
//			<a href="#I">I</a> -
//			<a href="#J">J</a> -
//			<a href="#K">K</a> -
//			<a href="#L">L</a> -
//			<a href="#M">M</a> -
//			<a href="#N">N</a> -
//			<a href="#O">O</a> -
//			<a href="#P">P</a> -
//			<a href="#Q">Q</a> -
//			<a href="#R">R</a> -
//			<a href="#S">S</a> -
//			<a href="#T">T</a> -
//			<a href="#U">U</a> -
//			<a href="#V">V</a> -
//			<a href="#W">W</a> -
//			<a href="#X">X</a> -
//			<a href="#Y">Y</a> -
//			<a href="#Z">Z</a>
//		</div>
//		<div id="dataTable" class="person">
//			<div id="personTable">
//				<div class="firstLetterRow">
//					<!--<span class="firstLetter">
//						<a name="" href="">$letter</a> name=\'$letter\'</a> 
//					</span>
//					<span class="firstLetterArrow">
//						<a href="javascript:self.scrollTo(0,0);">&uarr;</a>
//					</span>-->
//				</div>
//
//<?php
//$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
//mysqli_set_charset($link, "utf8");
//// check connection
//if (mysqli_connect_errno()) {
//	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
//	exit();
//}
//$query = "SELECT personName, personFirstName, personProf, personCountry,
//personBornY, personBornM, personBornD, personDiedY, personDiedM, personDiedD,
//personDescript, personLink, type FROM persons ORDER by personName";
//if ($result = mysqli_query($link, $query)) {
//// fetch object array
//	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
//		// merge the name array elements to a name string
//		$name = array($row[personName], $row[personFirstName]);
//		$name = implode(', ', array_filter($name));
//		// merge the date array elements yyyy mm dd to a dd.mm.yyyy string
//		$born = array($row[personBornD], $row[personBornM], $row[personBornY]);
//		$died = array($row[personDiedD], $row[personDiedM], $row[personDiedY]);
//		$born = implode('.', array_filter($born));
//		if (!empty($born)) {
//			$born = html_entity_decode('&lowast;').' '.$born;
//		}
//		$died = implode('.', array_filter($died));
//		if (!empty($died)) {
//			$died = html_entity_decode('&dagger;').' '.$died;
//		}
//		echo "<div class=\"personRow\">
//				<div class=\"personItem\">
//					<a onMouseOver=\"toggleIn('$name')\" onMouseOut=\"toggleOut('$name')\" href=$row[personLink]>$name</a>
//				</div>
//				<div id=\"$name\" class=\"hidden personInfoBox\">
//					<div class=\"personProfession\">$row[personProf]</div>
//					<div class=\"personLife\">$born   $died</div>
//					<div class=\"personCountry\">$row[personCountry]</div>
//					<div class=\"personInfo justify\">$row[personDescript]</div>
//				</div>
//			</div>";
//	}
//// free result set
//	mysqli_free_result($result);
//}
//// close connection
//mysqli_close($link);
//?>
//
//			</div>
//		</div>
//		<div id="notes">
//<?php include("notes.php")?>
//		</div>
//	</main><!-- #main -->
//<?php include("footer.php")?>