import React from 'react';

export default class VcardComponent extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
      <div id="vcardBackground"></div>
      <div id="vcardOverlay">
      	<div id="vcard">
      		<div id="vcardContainer">
      			<a className="center" id="vcardClose" href="close/the/overlay" title="Schlie&szlig;en">&times;</a>
      			<div id="vcardHeader">
      				<div id="vcardHistory">
      					Verlauf: <a href="path/to/home">Home</a> &rarr; <a href="path/to/subPage">subPage</a> &rarr; <a href="path/to/1stVisitedItem">1stVisitedItem</a> &rarr; <a href="path/to/2ndVisitedItem">2ndVisitedItem</a> &rarr; <a href="path/to/openItem">openItem</a>
      				</div>
      			</div>
      			<div id="vcardContent">
      				<div id="vcardContentLeft">
      					<div id="vcardItemImg">
      						<img src="path/to/img.jpg" />
      					</div>
      					<div id="vcardItemName">
      						<h3>{ item.name }</h3>
      					</div>
      					<div id="vcardItemShort">
      						vcardItemShort  
      					</div>
      					<div id="vcardItemLong" className="justify">
      						vcardItemLong Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      					</div>
      				</div>
      				<div id="vcardContentRight">
      					<div className="vcardItemRelatedCat">
      						<h5>relatedCat1</h5>
      					</div>
      					<div className="vcardItemRelatedLinks">
      						<ul>
      							<li><a href="path/to/vcardItemRelated">relatedLink1 relatedLink1</a></li>
      							<li><a href="path/to/vcardItemRelated">relatedLink2</a></li>
      							<li><a href="path/to/vcardItemRelated">relatedLink3</a></li>
      						</ul>
      					</div>
      					<div className="vcardItemRelatedCat">
      						<h5>relatedCat2</h5>
      					</div>
      					<div className="vcardItemRelatedLinks">
      						<ul>
      							<li><a href="path/to/vcardItemRelated">relatedLink1</a></li>
      							<li><a href="path/to/vcardItemRelated">relatedLink2</a></li>
      							<li><a href="path/to/vcardItemRelated">relatedLink3</a></li>
      						</ul>
      					</div>
      					<div className="vcardItemRelatedCat">
      						<h5>relatedCat3</h5>
      					</div>
      					<div className="vcardItemRelatedLinks">
      						<ul>
      							<li><a href="path/to/vcardItemRelated">relatedLink1</a></li>
      							<li><a href="path/to/vcardItemRelated">relatedLink2</a></li>
      							<li><a href="path/to/vcardItemRelated">relatedLink3</a></li>
      						</ul>
      					</div>
      				</div>
      			</div>
      			<div id="vcardFooter">
      				<div id="vcardItemWpLink">
      					Wikipedia-Artikel ansehen: <a href={ item.wikipediaUrl } target="_blank">vcardItemWpLink</a>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
      </div>
    );
  }
};
