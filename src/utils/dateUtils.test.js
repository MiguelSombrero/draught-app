import { parseDateTimeFromTimestamp, getweekday } from './dateUtils';

describe('date utils', ()=> {
  describe('parse datetime from timestamp', () => {
    it('should parse datetime correctly', () => {
      const datetime = parseDateTimeFromTimestamp("2022-01-15T08:11:19.410Z");
      expect(datetime).toBe("2022-01-15");
    });
  });

  describe('get weekday', () => {
    it('should return correct day of week', () => {
      const saturday = getweekday("2022-01-15T08:11:19.410Z");
      const sunday = getweekday("2022-01-16T08:11:19.410Z");
      expect(saturday).toBe(6);
      expect(sunday).toBe(0);
    });
  });
});