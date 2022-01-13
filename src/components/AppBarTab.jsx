import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ text }) => {
  return (
    <Pressable >
      <Text fontWeight='bold' style={{ padding: 10, color: 'white' }} >{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;