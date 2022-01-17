import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
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

const SignUpForm = ({ onSubmit }) => {
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
      <FormikTextInput
        name="name"
        placeholder="display name"
        testID='nameField'
      />
      <Button
        onPress={onSubmit}
        title="Sign Up"
        testID='signUpButton'
      />
    </View>
  );
};

export default SignUpForm;