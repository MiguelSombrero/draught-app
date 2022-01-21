import moment from 'moment';

export const createChartDataFor7Days = (units) => {
  const initialData = initializeDataFor7Days();
  return initialData;
};

const initializeDataFor7Days = () => {
  const data = [new Date()];

  for (let i = 0; i < 7; i++) {
    const newDate = moment(data[i]).subtract(1, 'd').toDate();
    data.push({ date: newDate, units: 0 });
  }

  return null;
};