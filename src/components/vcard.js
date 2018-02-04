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
        <div id="vcardOverlay">
          <div id="vcard">
            <div id="vcardHeader">
              <h3>{ item.name }</h3>
              <a className="close-btn" title="Schlie&szlig;en" onClick={ onClose }></a>
            </div>
            <div id="vcardMain">
              <div id="vcardContent">
                <div id="vcardArticle">{ wikipediaArticle }</div>
              </div>
              <div id="vcardRelations">
                <ul>
                  <li className="item-relations-category">relationCategory1</li>
                  <ul className="item-relations-list">
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem1 relatedItem1</a></li>
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem2</a></li>
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem3</a></li>
                  </ul>
                  <li className="item-relations-category">relationCategory2</li>
                  <ul className="item-relations-list">
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem1</a></li>
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem2</a></li>
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem3</a></li>
                  </ul>
                  <li className="item-relations-category">relationCategory3</li>
                  <ul className="item-relations-list">
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem1</a></li>
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem2</a></li>
                    <li className="item-relation"><a href="path/to/vcardRelatedItem">relatedItem3</a></li>
                  </ul>
                </ul>
              </div>
            </div>
            <div id="vcardFooter">
              <div id="vcardHistory">
                Verlauf: <a href="path/to/subPage">subPage</a> > <a
                href="path/to/firstVisitedItem">firstVisitedItem</a> > ... > <a
                href="path/to/lastVisitedItem">lastVisitedItem</a> > <a
                href="path/to/currentItem">{ item.name }</a>
              </div>
              <div id="vcardItemWpLink">
                Artikel in der Wikipedia ansehen: <a href={ item.link } target="_blank">{ decodeURIComponent(item.link) }</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
