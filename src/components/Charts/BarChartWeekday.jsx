import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryLabel, VictoryAxis, VictoryChart, VictoryTheme } from "victory-native";
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground,
    marginVertical: 20,
  },
});

const BarChartWeekday = ({ data, text, y }) => {
  return (
    <View style={styles.container}>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryLabel
          text={text}
          x={180}
          y={30}
          textAnchor="middle"
        />
        <VictoryBar
          data={data}
          x="date"
          y={y}
          alignment='middle'
          categories={{
            x: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
          }}
        />
        <VictoryAxis
          label="consumed"
          style={{
            axisLabel: { padding: 30 }
          }}
        />
        <VictoryAxis dependentAxis
          label="alcohol units"
          style={{
            axisLabel: { padding: 40 }
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default BarChartWeekday;