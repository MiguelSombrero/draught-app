import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUpForm from './SignUpForm';

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

const SignUpContainer = ({ onSubmit }) => {
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

export default SignUpContainer;