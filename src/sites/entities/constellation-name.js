export default class ConstellationName {
  constructor({name, latin, short}) {
    this.name = name;
    this.latin = latin;
    this.short = short;
  }
  toString() {
    return this.name;
  }
}
