import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    flexDirection: 'row',
  },
  bar: {
    flex: 1,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Draughts' to='/' />
        <AppBarTab text='Sign In' to='/login' />
      </ScrollView>  
    </View>
  );
};

export default AppBar;