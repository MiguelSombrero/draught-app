import { mapDraughtsToUnits } from './mapFunctions';

const draughts = [
  {
    id: 1,
    beverageType: "beer",
    abv: 5.5,
    volume: 500,
    userId: 1,
    updatedAt: "2022-01-15T08:11:19.410Z",
    createdAt: "2022-01-15T08:11:19.410Z"
  },
  {
    id: 2,
    beverageType: "beer",
    abv: 5.5,
    volume: 500,
    userId: 1,
    updatedAt: "2022-01-15T11:11:19.410Z",
    createdAt: "2022-01-15T11:11:19.410Z"
  },
  {
    id: 3,
    beverageType: "wine",
    abv: 14,
    volume: 120,
    userId: 1,
    updatedAt: "2022-01-15T08:43:19.410Z",
    createdAt: "2022-01-15T08:43:19.410Z"
  },
  {
    id: 4,
    beverageType: "whisky",
    abv: 43,
    volume: 40,
    userId: 1,
    updatedAt: "2022-01-18T08:11:19.410Z",
    createdAt: "2022-01-18T08:11:19.410Z"
  },
];

describe('map functions', ()=> {
  describe('map draughts to units', () => {
    it('should map draughts to units correctly', () => {
      const units = mapDraughtsToUnits(draughts);
      const firstUnit = units[0];

      expect(units.length).toBe(4);
      expect(firstUnit.date).toBe('2022-01-15T08:11:19.410Z');
      expect(firstUnit.units).toBe(2.75);
    });
  });
});