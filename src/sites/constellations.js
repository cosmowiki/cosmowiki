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
    item.name = raw.constname;
    item.latinName = raw.constlatin;
    item.shortName = raw.constshort;
    item.wikipediaUrl = raw.constlink;
    item.author = Author.fromRawData(raw);
    item.brightStar = Star.fromRawData(raw);
    item.y = raw.consty;
    item.sphere = raw.constsphere;
    item.visFrom = raw.constvisfrom; // TODO better name please!!!
    item.visTo = raw.constvisto; // TODO better name please!!!
    item.sqDeg = raw.constsqdeg; // TODO better name please!!!
    item.starsOver3Mag = raw['stars>3mag'];
    item.starsOver4Mag = raw['stars>4mag'];
    item.magMax = raw.constmagmax;
    return item;
  }
  
}

class Author {
  
  static fromRawData(raw) {
    const author = new Author();
    author.name = raw.constauthor;
    author.wikipediaUrl = raw.constauthorlink;
    return author;
  }
  
}

class Star {
  
  static fromRawData(raw) {
    const star = new Star();
    star.name = raw.constbrightstar;
    star.wikipediaUrl = raw.constbrightstarlink;
    return star;
  }
  
}

/*
  "constname": "Achterdeck des Schiffs",
  "constlink": "https://de.wikipedia.org/wiki/Puppis_%28Sternbild%29",
  "constmaplink": "https://de.wikipedia.org/wiki/Datei:Puppis_constellation_map.png",
  "constlistlink": "http://vizier.u-strasbg.fr/viz-bin/VizieR-4?-source=IV%2F27%2Fcatalog&-out.max=200&-out.all=1&-sort=Vmag&-order=I&Cst=%2APup",
  "constlatin": "Puppis",
  "constlatingen": "Puppis",
  "constshort": "Pup",
  "constauthor": "Lacaille",
  "constauthorlink": "https://de.wikipedia.org/wiki/Nicolas_Louis_de_Lacaille",
  "consty": 1763,
  "constsqdeg": 673.434,
  "constsphere": "S",
  "constvisfrom": "39° N",
  "constvisto": "90° S",
  "constmagmax": 2.06,
  "stars>3mag": 4,
  "stars>4mag": 10,
  "constbrightstar": "Naos",
  "constbrightstarlink": "https://de.wikipedia.org/wiki/Naos_%28Stern%29"  
*/
