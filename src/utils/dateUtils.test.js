import { parseDateFromTimestamp, getweekday, getEndOfYesterday } from './dateUtils';

describe('date utils', ()=> {
  describe('parse date from timestamp', () => {
    it('should parse date correctly', () => {
      const datetime = parseDateFromTimestamp("2022-01-15T08:11:19.410Z");
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

  describe('get end of yesterday', () => {
    it('should return yesterday at the end of the day', () => {
      /* const yesterdayDate = parseDateFromTimestamp(new Date().toISOString());
      const yesterday = getEndOfYesterday().toISOString();
      expect(yesterday).toBe(yesterdayDate + "T21:59:59.999Z"); */
    });
  });
});