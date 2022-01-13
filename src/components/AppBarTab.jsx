import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ text }) => {
  return (
    <Pressable >
      <Text fontWeight='bold' color='textSecondary' style={{ padding: 10 }} >{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;