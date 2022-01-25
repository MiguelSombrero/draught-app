import React from 'react';
import SignInContainer from './SignInContainer';

const SignIn = ({ signIn, loading, navigation }) => {

  const onSubmit = async (values) => {
    try {
      await signIn(values);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} loading={loading} navigation={navigation} />;

};

export default SignIn;