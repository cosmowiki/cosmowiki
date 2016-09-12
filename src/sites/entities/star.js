import StarName from './star-name';

export default class Star {

  constructor({
    name, wikipediaUrl, hr, hd, hip, sao, flamsteed, constLink, constellation, dekli, rekt, appMag, spectrClass, dist, mass, radius
  }) {
    this.name = name;
    this.wikipediaUrl = wikipediaUrl;
    this.hr = hr;
    this.hd = hd;
    this.hip = hip;
    this.sao = sao;
    this.flamsteed = flamsteed;
    this.constellation = constellation;
    this.constLink = constLink;
    this.dekli = dekli;
    this.rekt = rekt;
    this.appMag = appMag;
    this.spectrClass = spectrClass;
    this.dist = dist;
    this.mass = mass;
    this.radius = radius;
  }
  
  static fromRawData(raw) {
    const item = {
      name: new StarName({
        name: raw.starname,
        historical: raw.historicalname,
        aternative: raw.alternativename,
        bayer: raw.bayername,
        short: raw.shortname
      }),
      wikipediaUrl: raw.starlink,
      hr: raw.hr,
      hd: raw.hd,
      hip: raw.hip,
      sao: raw.sao,
      flamsteed: raw.flamsteed,

      constellation: raw.constellation,
      constLink: raw.constlink,  // TODO make it a real ref to the constellation

      dekli: raw.dekli,
      rekt: raw.rekt,
      appMag: raw.appmag,
      spectrClass: raw.spectrclass,

      dist: raw.dist,
      mass: raw.mass,
      radius: raw.radius
    };
    return new Star(item);
  }
  
}

/*
  {
    "starname": "Alphard", 
    "starlink": "https://de.wikipedia.org/wiki/Alphard", 
    "historicalname": "Alphard", 
    "alternativename": "Soheil al Fard", 
    "bayername": "α Hydrae", 
    "shortname": "α Hya", 
    "flamsteed": "30 Hydrae", 
    "hr": "HR 3748", 
    "hd": "HD 81797", 
    "hip": "HIP 46390", 
    "sao": "SAO 136871", 
    "constellation": "Wasserschlange", 
    "constlink": "https://de.wikipedia.org/wiki/Wasserschlange_(Sternbild)", 
    "appmag": 1.99, 
    "spectrclass": "K3 III", 
    "dist": 180.3, 
    "rekt": "09h 27m 35s", 
    "dekli": "-8° 39′ 31″", 
    "mass": 3.03, 
    "radius": 50.5
  }, 
 */