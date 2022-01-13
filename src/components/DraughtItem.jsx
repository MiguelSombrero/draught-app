import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const DraughtItem = ({ draught }) => {
    return (
      <View>
        <Text style={{ padding: 10 }} >{draught.beverageType}</Text>
      </View>
    );
  };

export default DraughtItem;