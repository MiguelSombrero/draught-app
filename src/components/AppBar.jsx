import React from 'react';
import { View, Pressable, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useSignOut from '../hooks/useSignOut';
import { useHistory } from "react-router-dom";

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { signOut } = useSignOut();
  let history = useHistory();

  const handleLogout = async () => {
    await signOut();
    history.push("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Home' to='/' />
        <AppBarTab text='Add Draught' to='/draughts' />
        <AppBarTab text='Sign In' to='/signin' />
        <AppBarTab text='Sign Up' to='/signup' />
        <Pressable onPress={handleLogout} >
          <Text fontWeight='bold' color='textSecondary' style={{ padding: 10 }} >Logout</Text>
        </Pressable>
      </ScrollView>  
    </View>
  );
};

export default AppBar;