import React from 'react';
import BarChartContainer from './BarChartContainer';
import BarChartWeekday from './BarChartWeekday';
import { reduceUnitsByDate, reduceUnitsByWeekday } from '../../utils/reduceFunctions';
import { filterUnitsForLast7Days, filterUnitsForLastMonth } from '../../utils/filterFunctions';
import { mapDraughtsToUnits } from '../../utils/mapFunctions';
import { ScrollView, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Charts = ({ draughts }) => {
  if (!draughts) {
    return null;
  }

  const units = mapDraughtsToUnits(draughts);

  const unitsByDate = reduceUnitsByDate(units);

  const unitsByWeekday = reduceUnitsByWeekday(units);

  const unitsLastMonth = filterUnitsForLastMonth(unitsByDate);

  const unitsLast7Days = filterUnitsForLast7Days(unitsLastMonth);

  return (
    <ScrollView style={styles.container}>
      <Text fontSize='subheading' fontWeight='bold' >Statictics of your alcohol usage</Text>
      <BarChartContainer
        data={unitsLast7Days}
        text="Alcohol consumption last seven days"
        xLabel="date"
        yLabel="units"
        xAxisText="consumed"
        yAxisText="alcohol units"
      />
      <BarChartContainer
        data={unitsLastMonth}
        text="Alcohol consumption last month"
        xLabel="date"
        yLabel="units"
        xAxisText="consumed"
        yAxisText="alcohol units"
      />
      <BarChartWeekday
        data={unitsByWeekday}
        text="Alcohol consumption by weekday"
        y={(d) => d.units}
      />
      <BarChartWeekday
        data={unitsByWeekday}
        text="Alcohol consumption average by weekday"
        y={(d) => d.units / d.count}
      />
    </ScrollView>
  );
};

export default Charts;