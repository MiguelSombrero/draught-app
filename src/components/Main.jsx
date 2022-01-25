import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import BottomBar from './BottomBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Stack = createNativeStackNavigator();

const Main = () => {
  const { user, loading, signIn, signOut } = useSignIn();

  const anonymousView = () => 
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Sign In'>
          <Stack.Screen name="Sign In">
            {(props) => <SignIn {...props} signIn={signIn} loading={loading} />}
          </Stack.Screen>
          <Stack.Screen name="Sign Up" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>;

  const userView = () => 
    <View style={styles.container}>
      <NavigationContainer>
        <AppBar />
        <BottomBar signOut={signOut} />
      </NavigationContainer>
    </View>;

  return user ? userView() : anonymousView();
};

export default Main;