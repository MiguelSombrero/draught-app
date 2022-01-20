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
      console.log(reducedDraughts);
      expect(reducedDraughts.length).toBe(2);
    });
  });
});