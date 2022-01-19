import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const StatsContainer = ({ draughts }) => {
  if (!draughts) {
    return null;
  }

  const data = draughts.map(draught => {
    const item = { date: draught.createdAt, abv: draught.abv };
    return item;
  });

  console.log(data);

  return (
    <View style={styles.container}>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="date" y="abv" />
      </VictoryChart>
    </View>
  );
};

export default StatsContainer;