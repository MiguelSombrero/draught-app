import React from 'react';
import useUsers from '../../hooks/useUsers';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const { createUser } = useUsers();

  const onSubmit = async (values) => {
    try {
      await createUser(values);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;