import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import DraughtItem from './DraughtItem';
import useDraughts from '../hooks/useDraughts';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const DraughtList = () => {
  const { draughts } = useDraughts();
  
  return (
    <FlatList
      data={draughts}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <DraughtItem draught={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DraughtList;