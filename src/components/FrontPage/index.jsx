import React from 'react';
import FrontPageContainer from './FrontPageContainer';
import { filterDraughtsFromYesterday } from '../../utils/filterFunctions';
import { mapDraughtsToUnits } from '../../utils/mapFunctions';
import { reduceUnitsByDate, reduceDraughtsByMaximumCreated } from '../../utils/reduceFunctions';
import { getDaysBetweenTwoDates } from '../../utils/dateUtils';

const FrontPage = ({ draughts }) => {
  if (!draughts) {
    return null;
  }

  const draughtsToday = filterDraughtsFromYesterday(draughts);

  const latestDraught = reduceDraughtsByMaximumCreated(draughts);

  const latestDraughtConsumed = getDaysBetweenTwoDates(latestDraught.createdAt, new Date().toISOString());

  console.log(new Date().toISOString());
  console.log(latestDraught.createdAt);
  const unitsToday = mapDraughtsToUnits(draughtsToday);

  const unitsTotalToday = reduceUnitsByDate(unitsToday);

  return <FrontPageContainer latestDraughtConsumed={latestDraughtConsumed} latestDraught={latestDraught} units={unitsTotalToday.units || 0} />;
};

export default FrontPage;