import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryLabel, VictoryAxis, VictoryChart, VictoryTheme } from "victory-native";
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground,
    marginVertical: 20,
  },
});

const ChartsContainer = ({ data }) => {
  console.log(data);

  return (
    <View style={styles.container}>
      <Text fontSize='subheading' fontWeight='bold' >Statictics of alcohol use</Text>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryLabel
          text="Alcohol consumption last seven days"
          x={180}
          y={30}
          textAnchor="middle"
        />
        <VictoryBar
          data={data}
          x="date"
          y="units"
          alignment='start'
        />
        <VictoryAxis
          label="date"
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

export default ChartsContainer;