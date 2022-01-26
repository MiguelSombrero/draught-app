import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { filterDraughtsFromYesterday } from '../../utils/filterFunctions';
import { mapDraughtsToUnits } from '../../utils/mapFunctions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const FrontPage = ({ draughts }) => {
  if (!draughts) {
    return null;
  }

  const draughtsToday = filterDraughtsFromYesterday(draughts);

  const unitsToday = mapDraughtsToUnits(draughtsToday);

  console.log(unitsToday);

  return (
    <View style={styles.container}>
      <Text>front</Text>
    </View>
  );
};

export default FrontPage;