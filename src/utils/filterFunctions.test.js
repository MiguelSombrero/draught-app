import { filterUnitsForLast7Days } from './filterFunctions';
  
const units = [
  {
    date: "2022-01-19",
    units: 2.75
  },
  {
    date: "2022-01-01",
    units: 6.75
  },
  {
    date: "2021-12-22",
    units: 0.0
  },
  {
    date: "2022-01-20",
    units: 1.0
  },
  {
    date: "2022-01-21",
    units: 3.75
  },
];

describe('filter functions', ()=> {
  describe('filter units by last 7 days', () => {
    it('should return only unit within 7 days', () => {
      const filteredUnits = filterUnitsForLast7Days(units);
      expect(filteredUnits.length).toBe(3);
    });
  });
});