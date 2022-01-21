import AlcoholCalculator from "./alcoholCalculator";

const calculator = new AlcoholCalculator();

export const mapDraughtsToUnits = (draughts) => {
  return draughts.map(draught => {
    return {
      date: draught.createdAt,
      units: calculator.alcoholUnits(draught)
    };
  });
};