import moment from 'moment';

export const parseDateFromTimestamp = (timestamp) => {
  return timestamp.substring(0, 10);
};

export const getweekday = (dateString) => {
  return moment(dateString).day();
};

export const getEndOfYesterday = () => {
  return moment(getDateXDaysAgo(1)).endOf('day').toDate();
};

export const getDateXDaysAgo = (days) => {
  return moment(new Date()).subtract(days, 'days').toDate();
};

export const getDateXMonthsAgo = (months) => {
  return moment(new Date()).subtract(months, 'month').toDate();
};
