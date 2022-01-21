
class AlcoholCalculator {
  static SINGLE_UNIT = 10; // millilitres of 100% alcohol
  static BURNING_CONSTANT = 1.25; // millilitres per hour
  static ABSORBTION_CONSTANT = 2 * this.BURNING_CONSTANT; // millilitres per hour

  alcoholUnits(draught) {
    const alcohol = draught.abv * draught.volume / 100;
    const units = alcohol / AlcoholCalculator.SINGLE_UNIT;
    return units;
  }

}

export default AlcoholCalculator;