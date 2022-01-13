import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import DraughtList from './DraughtList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <DraughtList />
    </View>
  );
};

export default Main;