
export const reduceUnitsByDate = (units) => {
  return Object.values(
    units.reduce(dateReducer, {})
  );
};

const dateReducer = (accumulation, unit) => {
  const created = unit.date.substring(0, 10);

  const newUnits = unit.units;

  accumulation[created] = accumulation[created]
    ? { date: created, units: accumulation[created].units + newUnits }
    : { date: created, units: newUnits };

  return accumulation;
};