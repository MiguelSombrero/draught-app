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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Home' to='/' />

        {user &&
          <>
            <AppBarTab text='Add Draught' to='/draughts' />
            <AppBarTab text='Stats' to='/stats' />
            <Pressable onPress={handleLogout} >
              <Text fontWeight='bold' color='textSecondary' style={{ padding: 10 }} >Logout</Text>
            </Pressable>
          </>
        }
        {!user &&
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