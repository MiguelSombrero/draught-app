import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#f28e1c'
  },
});

const Add = ({ onPress }) => (
  <FAB
    style={styles.fab}
    icon="plus"
    onPress={onPress}
  />
);

export default Add;