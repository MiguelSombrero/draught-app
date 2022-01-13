import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text fontWeight='bold' color='textSecondary' style={{ padding: 10 }} >Draughts</Text>
      </Link>
      <Link to="/login">
        <Text fontWeight='bold' color='textSecondary' style={{ padding: 10 }} >Sign In</Text>
      </Link>
    </View>
  );
};

export default AppBar;