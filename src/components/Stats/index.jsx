import React from 'react';
import StatsContainer from './StatsContainer';
import useDraughts from '../../hooks/useDraughts';

const Stats = () => {
  const { draughts } = useDraughts();

  const data = draughts ? draughts.map(draught => {
    const item = { date: new Date(draught.createdAt), abv: draught.abv };
    return item;
  })
    : [];

  return <StatsContainer data={data} />;
};

export default Stats;