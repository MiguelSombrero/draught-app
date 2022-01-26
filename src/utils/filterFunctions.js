import moment from 'moment';
import {
  getDateXDaysAgo,
  getDateXMonthsAgo,
  getEndOfYesterday
} from './dateUtils';

export const filterDraughtsFromYesterday = (draughts) => {
  return draughts.filter(addedToday);
};

export const filterUnitsForLast7Days = (units) => {
  return units.filter(dateWithin7Days);
};

export const filterUnitsForLastMonth = (units) => {
  return units.filter(dateWithinOneMonth);
};

const addedToday = (draught) => {
  const endOfYesterday = moment(getEndOfYesterday());
  const draughtConsumed = moment(draught.createdAt);
  return endOfYesterday.diff(draughtConsumed) <= 0;
};

const dateWithin7Days = (units) => {
  const sevenDaysAgo = moment(getDateXDaysAgo(7));
  const unitConsumed = moment(units.date);
  return sevenDaysAgo.diff(unitConsumed) <= 0;
};

const dateWithinOneMonth = (units) => {
  const monthAgo = moment(getDateXMonthsAgo(1));
  const unitConsumed = moment(units.date);
  return monthAgo.diff(unitConsumed) <= 0;
};