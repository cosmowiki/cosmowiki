import React from 'react';
require('isomorphic-fetch');

export default class VcardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      paragraphs: [],
    };
  }

  loadWikipediaText() {
    const { item } = this.props;
    const url = 'https://wt-wolfram--github-kriesing-de-0.run.webtask.io/wikipedia-article-extract?article-url=';
    fetch(`${ url }${ encodeURIComponent(item.link) }`)
      .then((response) => response.json())
      .then((text) => {
        this.setState({ paragraphs: text.trim().split('\n') });
      })
    ;
  }

  componentDidMount() {
    document.addEventListener('keydown', (evt) => this.onKeyDown(evt));
    this.loadWikipediaText();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (evt) => this.onKeyDown(evt));
  }

  onKeyDown(event) {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  }

  render() {
    const {
      item, onClose
    } = this.props;

    const shortName = item.shortName
      ? <div id="vcardItemShort">{ item.shortName }</div>
      : null;

    const image = item.imageUrl
      ? <div id="vcardItemImg"><img src={ item.imageUrl }/></div>
      : null;

    const article = () => {
      return this.state.paragraphs.map((paragraph, idx) => <p key={ idx }>{ paragraph }</p>);
    };

    const wikipediaArticle = this.state.paragraphs.length === 0
      ? <p>Loading...</p>
      : article();

    return (
      <div>
        <div id="vcardBackground"></div>
        <div id="vcardOverlay">
          <div id="vcard">
            <a id="vcardClose" title="Schlie&szlig;en" onClick={ onClose }></a>
            <div id="vcardContainer">
              <div id="vcardHeader">
                <div id="vcardHistory">
                  Verlauf: <a href="path/to/home">Home</a> > <a
                  href="path/to/subPage">subPage</a> > <a
                  href="path/to/1stVisitedItem">1stVisitedItem</a> > <a
                  href="path/to/2ndVisitedItem">2ndVisitedItem</a> > <a
                  href="path/to/currentItem">currentItem</a>
                </div>
              </div>
              <div id="vcardMain">
                <div id="vcardContent" className="pure-u-1 pure-u-md-3-4 pure-u-lg-4-5">
                  { image }
                  <div id="vcardItemName">
                    <h3>{ item.name }</h3>
                  </div>
                  { shortName }
                  <div id="vcardItemArticle">{ wikipediaArticle }</div>
                </div>
                <div id="vcardRelations" className="pure-u-1 pure-u-md-1-4 pure-u-lg-1-5">
                  <ul className="vcardItemRelations">
                    <li>relationCategory1</li>
                    <ul className="vcardItemRelationsList">
                      <li><a href="path/to/vcardRelatedItem">relatedItem1 relatedItem1</a></li>
                      <li><a href="path/to/vcardRelatedItem">relatedItem2</a></li>
                      <li><a href="path/to/vcardRelatedItem">relatedItem3</a></li>
                    </ul>
                    <li>relationCategory2</li>
                    <ul className="vcardItemRelationsList">
                      <li><a href="path/to/vcardRelatedItem">relatedItem1</a></li>
                      <li><a href="path/to/vcardRelatedItem">relatedItem2</a></li>
                      <li><a href="path/to/vcardRelatedItem">relatedItem3</a></li>
                    </ul>
                    <li>relationCategory3</li>
                    <ul className="vcardItemRelationsList">
                      <li><a href="path/to/vcardRelatedItem">relatedItem1</a></li>
                      <li><a href="path/to/vcardRelatedItem">relatedItem2</a></li>
                      <li><a href="path/to/vcardRelatedItem">relatedItem3</a></li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div id="vcardFooter">
                <div id="vcardItemWpLink">
                  Artikel in der Wikipedia ansehen: <a href={ item.link } target="_blank">{ decodeURIComponent(item.link) }</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
