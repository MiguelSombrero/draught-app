import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useUsers from '../hooks/useUsers';

import theme from '../theme';

const styles = StyleSheet.create({
  form: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.mainBackground,
    padding: 8,
  },
  formElement: {
    padding: 5,
  }
});

const initialValues = {
  username: '',
  password: '',
  name: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(29, 'Username must be less than 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(29, 'Password must be less than 30 characters')
    .required('Password is required'),
  name: yup
    .string()
    .min(2, 'Name must be at least 5 characters')
    .max(29, 'Name must be less than 30 characters')
    .required('Name is required'),
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput style={styles.formElement} name="username" placeholder="username" />
      <FormikTextInput style={styles.formElement} name="password" placeholder="password" secureTextEntry/>
      <FormikTextInput style={styles.formElement} name="name" placeholder="display name" />
      <Pressable style={styles.formElement} onPress={onSubmit}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const { createUser } = useUsers();

  const onSubmit = async (values) => {
    try {
      await createUser(values);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;