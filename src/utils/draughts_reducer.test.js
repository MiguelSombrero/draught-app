import DraughtsReducer from "./draughtsReducer";

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

const reducer = new DraughtsReducer();

describe('draughts reducer', ()=> {
  describe('reduce by date', () => {
    it('should reduce draughts by date', () => {
      const reducedDraughts = reducer.reduceByDate(draughts);
      expect(reducedDraughts.length).toBe(2);
    });

    it('should count units correctly for one draught', () => {
      const reducedDraughts = reducer.reduceByDate(draughts);
      const oneDraught = reducedDraughts[1];
      expect(oneDraught.units).toBe(1.72);
    });

    it('should count units correctly for many draughts', () => {
      const reducedDraughts = reducer.reduceByDate(draughts);
      const manyDraughts = reducedDraughts[0];
      expect(manyDraughts.units).toBe(7.18);
    });
  });
});