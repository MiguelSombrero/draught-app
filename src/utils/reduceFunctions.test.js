import {
  reduceUnitsByDate,
  reduceUnitsByWeekday,
  reduceDraughtsByMaximumCreated
} from "./reduceFunctions";

describe('map and reduce functions', ()=> {
  describe('reduce units by date', () => {
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

  describe('reduce units by weekday', () => {
    const units = [
      {
        date: "2022-01-19T08:11:19.410Z",
        units: 2.75
      },
      {
        date: "2022-01-12T08:11:19.410Z",
        units: 6.75
      },
      {
        date: "2021-12-08T08:11:19.410Z",
        units: 1.5
      }, // up from this is wednesday
      {
        date: "2022-01-22T08:11:19.410Z",
        units: 1.0
      }, // saturday
      {
        date: "2022-01-23T08:11:19.410Z",
        units: 3.75
      }, // sunday
    ];

    it('should reduce units by weekday', () => {
      const reducedUnits = reduceUnitsByWeekday(units);
      expect(reducedUnits.length).toBe(3);
    });

    it('should count units correctly for one unit', () => {
      const reducedUnits = reduceUnitsByWeekday(units);
      const oneUnit = reducedUnits[2];
      expect(oneUnit.units).toBe(1.0);
      expect(oneUnit.count).toBe(1);
    });

    it('should count units correctly for many units', () => {
      const reducedUnits = reduceUnitsByWeekday(units);
      const manyUnits = reducedUnits[1];
      expect(manyUnits.units).toBe(11);
      expect(manyUnits.count).toBe(3);
    });
  });

  describe('reduce draughts by maximum created', () => {
    const draughts = [
      {
        id: 1,
        createdAt: "2022-01-05T08:11:19.410Z"
      },
      {
        id: 2,
        createdAt: "2022-01-06T08:11:19.410Z"
      },
      {
        id: 3,
        createdAt: "2022-01-18T12:11:19.410Z"
      },
      {
        id: 4,
        createdAt: "2020-01-15T08:43:19.410Z"
      },
      {
        id: 5,
        createdAt: "2022-01-18T08:11:19.410Z"
      },
    ];

    it('should return draught with greatest createdAt', () => {
      const maximumDraught = reduceDraughtsByMaximumCreated(draughts);
      expect(maximumDraught.id).toBe(3);
    });
  });
});