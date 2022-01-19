import React from 'react';
import StatsContainer from './StatsContainer';
import useDraughts from '../../hooks/useDraughts';

const Stats = () => {
  const { draughts } = useDraughts();

  return <StatsContainer draughts={draughts} />;
};

export default Stats;