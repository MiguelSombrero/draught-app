import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    flexDirection: 'row',
  },
});

const AppBarContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Home' to='/' />
        <AppBarTab text='Sign In' to='/signin' />
        <AppBarTab text='Sign Up' to='/signup' />
      </ScrollView>  
    </View>
  );
};

export default AppBarContainer;