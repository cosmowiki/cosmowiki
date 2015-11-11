import React from 'react';
import StarsComponent from '../components/stars';
import Grouper from './helper/grouper';

export default class Stars {
  
  static componentWithData(stars) {
    const groups = new Grouper(stars).byName();
    return <StarsComponent groupedStars={groups} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Star.fromRawData(raw))
  }
  
}

class Star {
  
  static fromRawData(raw) {
    const star = new Star();
    star.name = raw.starname;
    star.link = raw.starlink;
    star.historicalName = raw.historicalname;
    star.alternativeName = raw.alternativename;
    star.hr = raw.hr;
    star.hd = raw.hd;
    star.hip = raw.hip;
    star.sao = raw.sao;
    star.flamsteed = raw.flamsteed;
    
    star.bayerName = raw.bayername;
    star.shortName = raw.shortname;
    star.constellation = raw.constellation;
    star.constLink = raw.constlink; // TODO make it a real ref to the constellation
    
    star.dekli = raw.dekli;
    star.rekt = raw.rekt;
    star.appMag = raw.appmag;
    star.spectrClass = raw.spectrclass;
    
    star.dist = raw.dist;
    star.mass = raw.mass;
    star.radius = raw.radius;
    
    return star;
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