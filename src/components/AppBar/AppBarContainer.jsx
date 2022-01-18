import React from 'react';
import { View, Pressable, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    flexDirection: 'row',
  },
});

const AppBarContainer = ({ handleLogout, user }) => {

  console.log("käyttäjä on");
  console.log(user);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Home' to='/' />

        {true &&
          <>
            <AppBarTab text='Add Draught' to='/draughts' />
            <Pressable onPress={handleLogout} >
              <Text fontWeight='bold' color='textSecondary' style={{ padding: 10 }} >Logout</Text>
            </Pressable>
          </>
        }
        {true &&
          <>
            <AppBarTab text='Sign In' to='/signin' />
            <AppBarTab text='Sign Up' to='/signup' />
          </>
        }
        
      </ScrollView>  
    </View>
  );
};

export default AppBarContainer;