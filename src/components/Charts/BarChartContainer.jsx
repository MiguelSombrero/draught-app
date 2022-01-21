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

const ChartsContainer = ({ data, text, xLabel, yLabel, xAxisText, yAxisText }) => {
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
          x={xLabel}
          y={yLabel}
          alignment='start'
        />
        <VictoryAxis
          label={xAxisText}
          style={{
            axisLabel: { padding: 30 }
          }}
        />
        <VictoryAxis dependentAxis
          label={yAxisText}
          style={{
            axisLabel: { padding: 40 }
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default ChartsContainer;