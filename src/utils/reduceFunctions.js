import { parseDateFromTimestamp, getweekday } from './dateUtils';

export const reduceUnitsByDate = (units) => {
  return Object.values(
    units.reduce(dateReducer, {})
  );
};

export const reduceUnitsByWeekday = (units) => {
  return Object.values(
    units.reduce(weekdayReducer, {})
  );
};

const dateReducer = (accumulation, unit) => {
  const created = parseDateFromTimestamp(unit.date);

  const newUnits = unit.units;

  accumulation[created] = accumulation[created]
    ? { date: created, units: accumulation[created].units + newUnits }
    : { date: created, units: newUnits };

  return accumulation;
};

const weekdayReducer = (accumulation, unit) => {
  const weekday = getweekday(unit.date);

  const newUnits = unit.units;

  accumulation[weekday] = accumulation[weekday]
    ? { date: weekday, units: accumulation[weekday].units + newUnits, count: accumulation[weekday].count + 1 }
    : { date: weekday, units: newUnits, count: 1 };

  return accumulation;
};