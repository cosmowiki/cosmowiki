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
    fetch(`${ url }${ encodeURIComponent(item.wikipediaUrl) }`)
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
      return this.state.paragraphs.map((paragraph) => <p>{ paragraph }</p>);
    };

    const wikipediaArticle = this.state.paragraphs.length === 0
      ? <p>Loading...</p>
      : article();

    return (
      <div>
        <div id="vcardBackground"></div>
        <div id="vcardOverlay">
          <div id="vcard">
            <div id="vcardContainer">
              <a className="center" id="vcardClose" title="Schlie&szlig;en" onClick={ onClose }>&times;</a>
              <div id="vcardHeader">
                <div id="vcardHistory">
                  Verlauf: <a href="path/to/home">Home</a> &rarr; <a href="path/to/subPage">subPage</a> &rarr; <a
                  href="path/to/1stVisitedItem">1stVisitedItem</a> &rarr; <a href="path/to/2ndVisitedItem">2ndVisitedItem</a> &rarr;
                  <a href="path/to/openItem">openItem</a>
                </div>
              </div>
              <div id="vcardContent">
                <div id="vcardContentLeft">
                  { image }
                  <div id="vcardItemName">
                    <h3>{ item.name }</h3>
                  </div>
                  { shortName }
                  <div id="vcardItemLong" className="justify">{ wikipediaArticle }</div>
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
                  Wikipedia-Artikel ansehen: <a href={ item.wikipediaUrl } target="_blank">{ decodeURIComponent(item.wikipediaUrl) }</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
