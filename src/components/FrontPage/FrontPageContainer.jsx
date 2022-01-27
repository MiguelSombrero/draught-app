import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import Add from './Add';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
    margin: 10,
  },
});

const FrontPageContainer = ({ units, latestDraughtConsumed, latestDraught }) => {
  console.log(units);
  return (
    <View style={styles.container}>
      <Text>Units today {units}</Text>
      <Text>You have been clean {latestDraughtConsumed} days</Text>
      <Add />
    </View>
  );
};

export default FrontPageContainer;