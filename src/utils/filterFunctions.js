import moment from 'moment';

export const filterUnitsForLast7Days = (units) => {
  return units.filter(dateWithin7Days);
};

const dateWithin7Days = (units) => {
  const sevenDaysAgo = moment(new Date()).subtract(7, 'd');
  const unitConsumed = moment(units.date);
  return sevenDaysAgo.diff(unitConsumed) <= 0;
};