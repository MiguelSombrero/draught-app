import React from 'react';
import { Text, View } from 'react-native';

const DraughtItem = ({ draught }) => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text>{draught.beverageType}</Text>
      </View>
    );
  };

export default DraughtItem;