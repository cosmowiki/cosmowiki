export default class StarName {
  constructor({name, historical, alternative, bayer, short}) {
    this.name = name;
    this.historical = historical;
    this.alternative = alternative;
    this.bayer = bayer;
    this.short = short;
  }
  toString() {
    return this.name;
  }
}

