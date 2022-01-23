import React from 'react';
import { useHistory } from "react-router-dom";
import SignInContainer from './SignInContainer';

const SignIn = ({ signIn, loading }) => {
  let history = useHistory();

  const onSubmit = async (values) => {
    try {
      await signIn(values);
      history.push('/draughts');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} loading={loading} />;
};

export default SignIn;