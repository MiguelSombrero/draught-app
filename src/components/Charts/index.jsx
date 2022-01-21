import React from 'react';
import ChartsContainer from './ChartsContainer';
import useDraughts from '../../hooks/useDraughts';
import { reduceUnitsByDate } from '../../utils/reduceFunctions';
import { filterUnitsForLast7Days } from '../../utils/filterFunctions';
import { mapDraughtsToUnits } from '../../utils/mapFunctions';

const Charts = () => {
  const { draughts } = useDraughts();

  if (!draughts) {
    return null;
  }

  const units = mapDraughtsToUnits(draughts);

  const unitsByDate = reduceUnitsByDate(units);

  const unitsLast7Days = filterUnitsForLast7Days(unitsByDate);

  return <ChartsContainer data={unitsLast7Days} />;
};

export default Charts;