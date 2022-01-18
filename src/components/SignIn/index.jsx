import React from 'react';
import { useHistory } from "react-router-dom";
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';

const SignIn = () => {
  const { signIn } = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    try {
      await signIn(values);
      history.push('/draughts');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;