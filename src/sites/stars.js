import React from 'react';
import StarsComponent from '../components/stars';

export default class Stars {
  
  static componentWithData(stars) {
    return <StarsComponent stars={stars} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Star.fromRawData(raw))
  }
  
}

class Star {
  
  static fromRawData(raw) {
    const star = new Star();
    return star;
  }
  
}

/*
  {
    "name": "Azmidiske ",
    "histname": "Azmidiske ",
    "link": "https://de.wikipedia.org/wiki/Xi_Puppis",
    "altname": "Aspidiske, Asmidiske",
    "bay": "Xi Puppis",
    "short": "ξ Pup",
    "flam": "7 Puppis",
    "hr": "HR 3045",
    "saoSao": "SAO SAO 174601",
    "hd": "HD 63700",
    "hip": "HIP 38170",
    "sao": "SAO 174601",
    "const": "Achterdeck des Schiffs",
    "constlink": "https://de.wikipedia.org/wiki/Puppis_%28Sternbild%29",
    "appmag": "3,34",
    "class": "G6 Ia",
    "dist": 1200,
    "rekt": "07h 49m 17,66s",
    "dekli": "-24° 51′ 35,2″"
  },

 */