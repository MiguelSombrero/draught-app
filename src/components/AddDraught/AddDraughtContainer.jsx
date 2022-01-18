import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AddDraughtForm from './AddDraughtForm';

const initialValues = {
  beverageType: '',
  abv: '5.5',
  volume: '500',
};

const validationSchema = yup.object().shape({
  beverageType: yup
    .string()
    .min(2, 'Beverage type must be at least 2 characters')
    .max(29, 'Beverage type must be less than 30 characters')
    .required('Beverage type is required'),
  abv: yup
    .number()
    .min(0.1, 'Abv must be at least 0.1 percents')
    .max(100.0, 'abv must be less than 100 percents')
    .required('Abv is required'),
  volume: yup
    .number()
    .min(1, 'Volume must be at least 1 millis')
    .max(2000, 'Volume must be less than 2000 millis')
    .required('Volume is required'),
});

const AddDraughtContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <AddDraughtForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default AddDraughtContainer;