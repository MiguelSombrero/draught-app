
class AlcoholCalculator {
  constructor(unit = 10) {
    this.unit = unit;
  }

  alcoholUnits(draught) {
    const alcohol = draught.abv * draught.volume / 100;
    return alcohol / this.unit;
  }
}

export default AlcoholCalculator;