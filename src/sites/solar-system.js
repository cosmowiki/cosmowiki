import React from 'react';
import SolarSystemComponent from '../components/solar-system';

export default class SolarSystem {

  static componentWithData(items) {
    return <SolarSystemComponent items={items} />;
  }

  static fromRawData(rawData) {
    return rawData.map(raw => Item.fromRawData(raw))
  }

}

class Item {

  static fromRawData(raw) {
    const item = new Item();
    item.index = raw.itemindex.replace('.0','.');
    item.name = raw.itemname;
    item.name2 = raw.itemname2 ? raw.itemname2 : '';//to use in id=""
    const alternativename1 = raw.itemname3 ? raw.itemname3 : '';
    const alternativename2 = raw.itemname4 ? `, ${raw.itemname4}`: '';
    item.alternativeName = `${alternativename1}${alternativename2}`;
    item.type = raw.itemtype ? raw.itemtype : '';//to control the Pure width
    item.category = raw.itemcategory ? raw.itemcategory : '';//star, group, planet, moon, object
    item.parent = raw.itemparent ? raw.itemparent : '';//solar-system, inner-planets, Earth, apollo-type-astroids ...
    item.color = raw.itemcolor ? raw.itemcolor : '';
    item.wikipediaUrl = raw.itemurl ? raw.itemurl : '';
    item.imageSmallUrl = raw.itemimgsmallurl ? raw.itemimgsmallurl : '';
    item.imageUrl = raw.itemimgurl ? raw.itemimgurl : '';
    item.imageSrc = raw.itemimgsrc ? raw.itemimgsrc : '';
    item.imageLicence = raw.itemimglicence ? raw.itemimglicence : '';
    item.imageLicenseUrl = raw.itemimglicenceurl ? raw.itemimglicenceurl : '';

    item.spectraltype = raw.itemspectraltype;

    item.semiMajorAxis = raw.semimajoraxis ? raw.semimajoraxis : '';
    item.farthest = raw.itemapoapsis ? raw.itemapoapsis : '';
    item.nearest = raw.itemperiapsis ? raw.itemperiapsis : '';
    item.eccentricity = raw.itemeccentricity ? raw.itemeccentricity : '';
    item.inclination = raw.iteminclination ? raw.iteminclination : '';
    item.orbitalPeriod = raw.itemorbitalperiod ? raw.itemorbitalperiod : '';
    item.synodicPeriod = raw.itemsynodicperiod ? raw.itemsynodicperiod : '';
    item.orbitalSpeed = raw.itemorbitalspeed ? raw.itemorbitalspeed : '';
    item.diameter = raw.itemdiameter ? raw.itemdiameter : '';
    item.measures = raw.itemmeasures ? raw.itemmeasures : '';
    item.mass = raw.itemmass ? raw.itemmass : '';
    item.density = raw.itemdensity ? raw.itemdensity : '';
    item.appMagnitude = raw.itemappmag ? raw.itemappmag : '';
    item.minTemperature = raw.itemmintemperature ? raw.itemmintemperature : '';
    item.midTemperature = raw.itemmidtemperature ? raw.itemmidtemperature : '';
    item.maxTemperature = raw.itemmaxtemperature ? raw.itemmaxtemperature : '';
    item.pressure = raw.itempressure ? raw.itempressure : '';
    item.atmosphere = raw.itematmosphere ? raw.itematmosphere : '';

    item.discoverer = raw.itemdiscoverer ? raw.itemdiscoverer : '';
    item.dicoveryDate = raw.itemdicoverydate ? raw.itemdicoverydate : '';

    return item;
  }

}
// {
//     "itemindex": "0",
//     "itemname": "Sonne",
//     "itemname2": "sun",
//     "itemurl": "https://de.wikipedia.org/wiki/Sonne",
//     "itemtype": "type1",
//     "itemcolor": "#fffacd (255,250,205)",
//     "itemcategory": "star",
//     "itemimgurl": "img/solarsystem/sun.jpg",
//     "itemimgsrc": "NASA",
//     "itemparent": "solar-system",
//     "angularsize": "31,5 - 32,5'",
//     "virtbright": "-26ᵐ74",
//     "itemspectraltype": "G2V",
//     "mean_distance_milky_way_core": "≈ 2.7 × 10¹⁷ km",
//     "galactic_period": "(2.25–2.50) × 10⁸ a",
//     "velocity": "≈ 220 km/s (Orbit um das Zentrum der Milchstraße)\n≈ 20 km/s (relativ zur Durchschnittsgeschwindigkeit anderer Sterne in stellarer Nachbarschaft)\n≈ 370 km/s (relativ zur Kosmischen Hintergrundstrahlung)",
//     "meandistancetoearth": "1 AU (149,6 Mio. km)",
//     "itemdistancetoearth": "0,98328877 AU - 1,01671123 AU (147,1 Mio. km - 152,1 Mio. km)",
//     "itemdiameter": "1.392.700 km (Äquator)",
//     "itemmass": "1,989 × 10³⁰ kg",
//     "itemdensity": "1,408 g/cm³",
//     "solareGravitationskonstante(g·M)": "1,32712440018 × 10²⁰ m³/s²",
//     "fallbeschleunigungAnDerOberfläche": "274 m/s²",
//     "fluchtgeschwindigkeit": "617,3 km/s",
//     "itemrotationperiod": "25,38 d",
//     "axial_tilt": "7,25°",
//     "absoluteHelligkeit": "4,83 mag",
//     "leuchtkraft": "3,846 × 10²⁶ W",
//     "itemmidtemperature": "5778 K",
//     "itematmosphere": "Wasserstoff: 92,1 %, Helium: 7,8 %, Sauerstoff: 500 ppm, Kohlenstoff: 230 ppm, Neon: 100 ppm, Stickstoff: 70 ppm",
//     "sonstiges": "Alter: 4,57 × 10⁹ a"
// },
// {
//     "itemindex": "1.0",
//     "itemname": "Innere Planeten",
//     "itemname2": "innerPlanets",
//     "itemurl": "https://de.wikipedia.org/wiki/Innerer_Planet",
//     "itemtype": "type1",
//     "itemcategory": "group",
//     "itemparent": "solar-system"
// },
// {
//     "itemindex": "1.1",
//     "itemname": "Merkur",
//     "itemname2": "mercury",
//     "itemurl": "https://de.wikipedia.org/wiki/Merkur_(Planet)",
//     "itemtype": "type2",
//     "itemcolor": "#eedc82 (238,220,130)",
//     "itemcategory": "planet",
//     "itemimgsmallurl": "img/solarsystem/mercury_sm.jpg",
//     "itemimgurl": "img/solarsystem/mercury_lg.jpg",
//     "itemimgsrc": "NASA",
//     "itemparent": "inner-planets",
//     "semimajoraxis": "57.909.000 km (0,3871 AE)",
//     "itemapoapsis": "69.863.200 km (0,467 AE)",
//     "itemperiapsis": "45.927.200 km (0,307 AE)",
//     "itemeccentricity": 0.2056,
//     "inclinationecliptic": "7,00°",
//     "itemdistancetoearth": "0,517 - 1,483 AE",
//     "itemorbitalperiod": "87,969 d",
//     "itemsynodicperiod": "115,88 d",
//     "itemorbitalspeed": "47,87 km/s",
//     "geometrischeAlbedo": 106,
//     "itemdiameter": "4.879,4 km (Äquator), 4.879,4 km (Pol)",
//     "itemmass": "3,302 × 10²³ kg",
//     "itemdensity": "5,427 g/cm³",
//     "fallbeschleunigungAnDerOberfläche": "3,7 m/s²",
//     "fluchtgeschwindigkeit": "4,3 km/s",
//     "itemrotationperiod": "58 d 15 h 36 min",
//     "axial_tilt": "0,01°",
//     "itemappmag": "-1,9 mag",
//     "itemmintemperature": "100 K (-173 °C)",
//     "itemmidtemperature": "440 K (+167 °C)",
//     "itemmaxtemperature": "700 K (+427 °C)",
//     "itempressure": "10⁻¹⁵ bar",
//     "itematmosphere": "Sauerstoff: 42 %, Natrium: 29 %, Wasserstoff: 22 %, Helium: 6 %, Kalium: 0,5 %"
// },
