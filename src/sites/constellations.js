import React from 'react';
import ConstellationsComponent from '../components/constellations';

export default class Constellations {

  static componentWithData(constellations) {
    return <ConstellationsComponent constellations={constellations} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Constellation.fromRawData(raw))
  }

}

class Constellation {

  static fromRawData(raw) {
    const item = new Constellation();
    item.name = raw.itemname;
    item.latinName = raw.itemname2;
    item.shortName = raw.itemname4;
    item.wikipediaUrl = raw.itemurl;
    item.imageSmallUrl = raw.itemimgsmallurl;
    item.imageLargeUrl = raw.itemimgurl;
    item.imageSrc = raw.itemimgsrc;
    item.imageLicence = raw.itemimglicence;
    item.imageLicenceUrl = raw.itemimglicenceurl;
    item.namedYear = raw.itemdateyear;
    item.astronomer = raw.itemparent;
    item.astronomerUrl = raw.itemparenturl;
    item.rightAscension = raw.itemrightascension;
    item.declination = raw.itemdeclination;
    item.author = Author.fromRawData(raw);
    item.brightestStar = Star.fromRawData(raw);
    item.year = raw.itemdateyear;
    item.visibility = raw.itemproperty;
    item.visibleFrom = raw.itemproperty2;
    item.visibleTo = raw.itemproperty3;
    item.squareDegrees = raw.itemproperty4;
    item.starsOver3Mag = raw['itemproperty5'];
    item.highestBrightness = raw.itemproperty6;
    item.brightest = raw.itemproperty7;
    item.brightestUrl = raw.itemproperty8;
    return item;
  }

}

class Author {

  static fromRawData(raw) {
    const author = new Author();
    author.name = raw.itemparent;
    author.wikipediaUrl = raw.itemparenturl;
    return author;
  }

}

class Star {

  static fromRawData(raw) {
    const star = new Star();
    star.name = raw.itemproperty7;
    star.wikipediaUrl = raw.itemproperty8;
    return star;
  }

}

/*
{
    "itemname": "Achterdeck des Schiffs",
    "itemname2": "Puppis",
    "itemname3": "Puppis",
    "itemname4": "Pup",
    "itemurl": "https://de.wikipedia.org/wiki/Puppis_%28Sternbild%29",
    "itemurl2": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Puppis_IAU.svg/191px-Puppis_IAU.svg.png",
    "itemimgurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Puppis_IAU.svg/610px-Puppis_IAU.svg.png",
    "itemimgsrc": "IAU and Sky & Telescope magazine (Roger Sinnott & Rick Fienberg)",
    "itemimglicence": "CC by-sa 3.0",
    "itemimglicenceurl": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
    "itemdateyear": 1763,
    "itemparent": "Lacaille",
    "itemparenturl": "https://de.wikipedia.org/wiki/Nicolas_Louis_de_Lacaille",
    "itemrightascension": "07h 15m 28,8s",
    "itemdeclination": "−31° 10' 38,4\"",
    "itemproperty": "S",
    "itemproperty2": "39° N",
    "itemproperty3": "90° S",
    "itemproperty4": 673.434,
    "itemproperty5": 4,
    "itemproperty6": 2.06,
    "itemproperty7": "Naos",
    "itemproperty8": "https://de.wikipedia.org/wiki/Naos_%28Stern%29"
},
*/
