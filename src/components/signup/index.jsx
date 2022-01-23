import React from 'react';
import useUsers from '../../hooks/useUsers';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const { loading, createUser } = useUsers();

  const onSubmit = async (values) => {
    try {
      await createUser(values);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} loading={loading} />;
};

export default SignUp;