import React from 'react';
import StarsComponent from '../components/stars';
import Grouper from './helper/grouper';
import Star from './entities/star';

export default class Stars {
  
  static componentWithData(stars) {
    const groups = new Grouper(stars).byName();
    const constellations = allConstellationsSorted(stars);
    return <StarsComponent groupedStars={groups} constellations={constellations} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Star.fromRawData(raw))
  }
  
}

function allConstellationsSorted(stars) {
  const allConstellations = stars.map(star => star.constellation);
  const uniques = Array.from(new Set(allConstellations).values());
  const emptyValue = value => value;
  return uniques
    .filter(emptyValue)
    .sort();
}
