import { reduceUnitsByDate } from "./reduceFunctions";

const units = [
  {
    date: "2022-01-19T08:11:19.410Z",
    units: 2.75
  },
  {
    date: "2022-01-21T08:11:19.410Z",
    units: 6.75
  },
  {
    date: "2021-12-22T08:11:19.410Z",
    units: 1.5
  },
  {
    date: "2022-01-21T08:11:19.410Z",
    units: 1.0
  },
  {
    date: "2022-01-21T08:11:19.410Z",
    units: 3.75
  },
];

describe('map and reduce functions', ()=> {
  describe('reduce units by date', () => {
    it('should reduce units by date', () => {
      const reducedUnits = reduceUnitsByDate(units);
      expect(reducedUnits.length).toBe(3);
    });

    it('should count units correctly for one unit', () => {
      const reducedUnits = reduceUnitsByDate(units);
      const oneUnit = reducedUnits[2];
      expect(oneUnit.units).toBe(1.5);
    });

    it('should count units correctly for many units', () => {
      const reducedUnits = reduceUnitsByDate(units);
      const oneUnit = reducedUnits[1];
      expect(oneUnit.units).toBe(11.5);
    });
  });
});