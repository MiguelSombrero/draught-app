import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import DraughtList from './DraughtList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './signup/SignUp';
import theme from '../theme';
import FrontPage from './FrontPage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/draughts" exact>
          <DraughtList />
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