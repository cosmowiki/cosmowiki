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
                  Verlauf: <a href="path/to/home">Home</a> > <a href="path/to/subPage">subPage</a> > <a
                  href="path/to/1stVisitedItem">1stVisitedItem</a> > <a href="path/to/2ndVisitedItem">2ndVisitedItem</a> >
                  <a href="path/to/openItem">openItem</a>
                </div>
              </div>
              <div id="vcardContent">
                <div id="vcardContentLeft" className="pure-u-3-4">
                  { image }
                  <div id="vcardItemName">
                    <h3>{ item.name }</h3>
                  </div>
                  { shortName }
                  <div id="vcardItemLong">{ wikipediaArticle }</div>
                </div>
                <div id="vcardContentRight" className="pure-u-1-4">
                  <div className="vcardItemRelatedCat">
                    <h4>relatedCat1</h4>
                  </div>
                  <div className="vcardItemRelatedList">
                    <ul>
                      <li><a href="path/to/vcardItemRelated">relatedLink1 relatedLink1</a></li>
                      <li><a href="path/to/vcardItemRelated">relatedLink2</a></li>
                      <li><a href="path/to/vcardItemRelated">relatedLink3</a></li>
                    </ul>
                  </div>
                  <div className="vcardItemRelatedCat">
                    <h4>relatedCat2</h4>
                  </div>
                  <div className="vcardItemRelatedList">
                    <ul>
                      <li><a href="path/to/vcardItemRelated">relatedLink1</a></li>
                      <li><a href="path/to/vcardItemRelated">relatedLink2</a></li>
                      <li><a href="path/to/vcardItemRelated">relatedLink3</a></li>
                    </ul>
                  </div>
                  <div className="vcardItemRelatedCat">
                    <h4>relatedCat3</h4>
                  </div>
                  <div className="vcardItemRelatedList">
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
                  Wikipedia-Artikel ansehen: <a href={ item.link } target="_blank">{ decodeURIComponent(item.link) }</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
