import React from 'react';
import BarChartContainer from './BarChartContainer';
import useDraughts from '../../hooks/useDraughts';
import { reduceUnitsByDate } from '../../utils/reduceFunctions';
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

const Charts = () => {
  const { draughts } = useDraughts();

  if (!draughts) {
    return null;
  }

  const units = mapDraughtsToUnits(draughts);

  const unitsByDate = reduceUnitsByDate(units);

  const unitsLast7Days = filterUnitsForLast7Days(unitsByDate);

  const unitsLastMonth = filterUnitsForLastMonth(unitsByDate);

  return (
    <ScrollView style={styles.container}>
      <Text fontSize='subheading' fontWeight='bold' >Statictics of alcohol usage</Text>
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
    </ScrollView>
  );
};

export default Charts;