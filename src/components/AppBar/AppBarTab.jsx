import React from 'react';
import { Pressable } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';

const AppBarTab = ({ text, to, onPress }) => {
  return (
    <Pressable onPress={onPress} >
      <Link to={to}>
        <Text fontWeight='bold' color='textSecondary' style={{ padding: 10 }} >{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;