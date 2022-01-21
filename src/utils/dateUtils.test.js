import { parseDateTimeFromTimestamp } from './dateUtils';

describe('date utils', ()=> {
  describe('parse datetime from timestamp', () => {
    it('should parse datetime correctly', () => {
      const datetime = parseDateTimeFromTimestamp("2022-01-15T08:11:19.410Z");
      expect(datetime).toBe("2022-01-15");
    });
  });
});