import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import theme from '../theme';
import FrontPage from './FrontPage';
import AddDraught from './AddDraught';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const { user, signIn, signOut } = useSignIn();

  return (
    <View style={styles.container}>
      <AppBar user={user} signOut={signOut} />
      <Switch>
        <Route path="/draughts" exact>
          <AddDraught />
        </Route>
        <Route path="/signin" exact>
          <SignIn signIn={signIn} />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/" exact>
          <FrontPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;