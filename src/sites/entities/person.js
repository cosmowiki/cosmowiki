export default class Person {
  
  constructor({name, wikipediaUrl, profession, country, description, born, died, type}) {
    this.name = name;
    this.wikipediaUrl = wikipediaUrl;
    this.profession = profession;
    this.country = country;
    this.description = description;
    this.born = born;
    this.died = died;
    this.type = type;
  }
  
  static fromRawData(raw) {
    //"personname": "Abbe",
    //"personfirstname": "Cleveland",
    //"personprof": "Astronom, Meteorologe",
    //"personcountry": "USA",
    //"personborny": "1838",
    //"personbornm": "12",
    //"personbornd": "3",
    //"persondiedy": "1916",
    //"persondiedm": "10",
    //"persondiedd": "28",
    //"persondescript": "erster Meteorologe",
    //"personlink": "https://de.wikipedia.org/wiki/Cleveland_Abbe",
    //"type": 1       1-astronomer 2-astronaut 3-both 0-neither
    let item = {
      name: [raw.personname, raw.personfirstname].join(', '),
      wikipediaUrl: raw.personlink,
      profession: raw.personprof,
      country: raw.personcountry,
      description: raw.persondescript,
      born: [raw.personbornd, raw.personbornm, raw.personborny].filter(v => v).join('.'),
      died: [raw.persondiedd, raw.persondiedm, raw.persondiedy].filter(v => v).join('.'),
      type: raw.type
    };
    //item.tags = raw.tags.split(',');
    return new Person(item);
  }
  
}
Person.ASTRONOMER = 1;
Person.ASTRONAUT = 2;
Person.ASTRONOMER_AND_ASTRONAUT = 3;
