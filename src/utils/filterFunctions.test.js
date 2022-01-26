import {
  filterUnitsForLast7Days,
  filterUnitsForLastMonth,
  filterDraughtsFromYesterday
} from './filterFunctions';
import {
  getDateXDaysAgo,
  getDateXMonthsAgo
} from './dateUtils';

const units = [
  {
    date: getDateXDaysAgo(1).toISOString(),
    units: 2.75
  },
  {
    date: getDateXDaysAgo(6).toISOString(),
    units: 1.0
  },
  {
    date: getDateXDaysAgo(7).toISOString(),
    units: 3.75
  },
  {
    date: getDateXDaysAgo(21).toISOString(),
    units: 6.75
  },
  {
    date: getDateXDaysAgo(31).toISOString(),
    units: 3.0
  },
  {
    date: getDateXMonthsAgo(2).toISOString(),
    units: 0.0
  },
];

describe('filter functions', ()=> {
  describe('filter units by last 7 days', () => {
    it('should return only unit within 7 days', () => {
      const filteredUnits = filterUnitsForLast7Days(units);
      expect(filteredUnits.length).toBe(2);
    });
  });

  describe('filter units by last month', () => {
    it('should return only unit within one month', () => {
      const filteredUnits = filterUnitsForLastMonth(units);
      expect(filteredUnits.length).toBe(4);
    });
  });

  describe('filter draughts from yesterday', () => {
    const draughts = [
      {
        id: 1,
        createdAt: "2022-01-25T08:11:19.410Z"
      },
      {
        id: 2,
        createdAt: getDateXDaysAgo(0)
      },
      {
        id: 3,
        createdAt: "2020-01-15T08:43:19.410Z"
      },
      {
        id: 4,
        createdAt: "2022-01-18T08:11:19.410Z"
      },
      {
        id: 5,
        createdAt: getDateXDaysAgo(0)
      },
    ];
    
    it('should return only draughts added today', () => {
      const filteredDraughts = filterDraughtsFromYesterday(draughts);
      expect(filteredDraughts.length).toBe(2);
    });
  });
});