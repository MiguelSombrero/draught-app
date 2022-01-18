import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from '../FormikTextInput';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="username"
        testID='usernameField'
      />
      <FormikTextInput
        name="password"
        placeholder="password"
        secureTextEntry
        testID='passwordField'
      />
      <Button
        onPress={onSubmit}
        title="Sign In"
        testID='signInButton'
      />
    </View>
  );
};

export default SignInForm;