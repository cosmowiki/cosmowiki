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
    star.name = raw.name;
    star.histName = raw.histname; // TODO should this be "historicalName" ?
    star.altName = raw.altname;
    star.hr = raw.hr;
    star.hd = raw.hd;
    star.hip = raw.hip;
    star.sao = raw.sao;
    
    star.bay = raw.bay;
    star.short = raw.short;
    star.const = raw.const;
    star.constlink = raw.constlink; // TODO make it a real ref to the constellation
    
    star.dekli = raw.const;
    star.rekt = raw.rekt;
    star.appMag = raw.appmag;
    
    star.dist = raw.dist;
    star.mass = raw.mass;
    star.radius = raw.radius;
    
    //star.spektr = raw.???; not found in the data
    
    return star;
  }
  
}

/*
  {
    "name": "Gemma A",
    "histname": "Gemma A",
    "link": "https://de.wikipedia.org/wiki/Alpha_Coronae_Borealis",
    "altname": "Alphecca, Alphekka, Gnosia, Asteroth",
    "bay": "Alpha Coronae Borealis A",
    "short": "α CrB A",
    "flam": "5 Coronae Borealis",
    "hr": "HR 5793",
    "saoSao": "SAO SAO 83893",
    "hd": "HD 139006",
    "hip": "HIP 76267",
    "sao": "SAO 83893",
    "const": "Nördliche Krone",
    "constlink": "https://de.wikipedia.org/wiki/Nördliche_Krone",
    "appmag": 2.24,
    "class": "A0",
    "dist": 75,
    "rekt": "15h 34m 41s",
    "dekli": "26° 42′ 53″",
    "mass": 2.58,
    "radius": 2.89
  },
 */