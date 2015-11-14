import Star from './star';
import Person from './person';
import ConstellationName from './constellation-name';

export default class Constellation {

  constructor({name, wikipediaUrl, author, brightStar, visibility, y, sphere, sqDeg, starsOver3Mag, starsOver4Mag, magMax}) {
    this.name = name;
    this.wikipediaUrl = wikipediaUrl;
    this.author = author;
    this.brightStar = brightStar;
    this.visibility = visibility;
    this.y = y;
    this.sphere = sphere;
    this.sqDeg = sqDeg;
    this.starsOver3Mag = starsOver3Mag;
    this.starsOver4Mag = starsOver4Mag;
    this.magMax = magMax;
  }
  
  static fromRawData(raw) {
    const item = {
      name: new ConstellationName({name: raw.constname, latin: raw.constlatin, short: raw.constshort}),
      wikipediaUrl: raw.constlink,
      author: new Person({name: raw.constauthor, wikipediaUrl: raw.constauthorlink}),
      brightStar: new Star({name: raw.constbrightstar, wikipediaUrl: raw.constbrightstarlink}),
      visibility: new Visibility({from: raw.constvisfrom, to: raw.constvisto}),
      y: raw.consty,
      sphere: raw.constsphere,
      sqDeg: raw.constsqdeg, // TODO better name please!!!
      starsOver3Mag: raw['stars>3mag'],
      starsOver4Mag: raw['stars>4mag'],
      magMax: raw.constmagmax
    };
    return new Constellation(item);
  }
  
}

class Visibility {
  constructor({from, to}) {
    this.from = from;
    this.to = to;
  }
}

/*
  {
    "constname": "Achterdeck des Schiffs", 
    "constlink": "https://de.wikipedia.org/wiki/Puppis_%28Sternbild%29", 
    "constmaplink": "https://de.wikipedia.org/wiki/Datei:Puppis_constellation_map.png", 
    "constlistlink": "http://vizier.u-strasbg.fr/viz-bin/VizieR-4?-source=IV%2F27%2Fcatalog&-out.max=200&-out.all=1&-sort=Vmag&-order=I&Cst=%2APup", 
    "constlatin": "Puppis", 
    "constlatingenitiv": "Puppis", 
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
  }, 
*/
