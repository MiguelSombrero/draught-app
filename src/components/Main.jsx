import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import BottomBar from './BottomBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const { user, loading, signIn, signOut } = useSignIn();

  const anonymousView = () => 
    <View style={styles.container}>
      <AppBar />
      <SignIn signIn={signIn} loading={loading} />
    </View>;

  const userView = () => 
    <View style={styles.container}>
      <AppBar />
      <BottomBar signOut={signOut} />
    </View>;

  return user ? userView() : anonymousView();
};

export default Main;