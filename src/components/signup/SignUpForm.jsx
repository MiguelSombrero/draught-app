import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground,
    marginBottom: 20,
  },
});

const SignUpForm = ({ onSubmit, loading }) => {
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
        loading={loading}
        text="Sign Up"
        testID='signUpButton'
      />
    </View>
  );
};

export default SignUpForm;