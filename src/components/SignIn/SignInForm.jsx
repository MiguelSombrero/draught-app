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

const SignInForm = ({ onSubmit, loading }) => {
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
        loading={loading}
        text="Sign In"
        testID='signInButton'
      />
    </View>
  );
};

export default SignInForm;