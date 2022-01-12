import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const DraughtItem = ({ draught }) => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ padding: 10 }} fontWeight='bold' >{draught.beverageType}</Text>
      </View>
    );
  };

export default DraughtItem;