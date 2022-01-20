import AlcoholCalculator from "./alcoholCalculator";

const calculator = new AlcoholCalculator();

describe('alcohol calculator', ()=> {
  describe('alcohol units', () => {
    it('should return currect units', () => {
      const beer = {
        id: 1,
        beverageType: "beer",
        abv: 5.5,
        volume: 500,
      };

      const units = calculator.alcoholUnits(beer);
      expect(units).toBe(2.75);
    });
  });
});