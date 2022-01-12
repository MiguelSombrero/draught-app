import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import DraughtItem from './DraughtItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const draughts = [
  {
    id: 1,
    beverageType: 'beer',
    abv: 5.5,
    volume: 500,
    userId: 1,
  },
  {
    id: 2,
    beverageType: 'beer',
    abv: 5.5,
    volume: 500,
    userId: 1,
  },
  {
    id: 3,
    beverageType: 'beer',
    abv: 6.7,
    volume: 330,
    userId: 1,
  },
  {
    id: 4,
    beverageType: 'wine',
    abv: 14,
    volume: 125,
    userId: 1,
  },
  {
    id: 5,
    beverageType: 'whisky',
    abv: 43,
    volume: 40,
    userId: 1,
  }
];

const ItemSeparator = () => <View style={styles.separator} />;

const DraughtList = () => {
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