import React from 'react';
import useSignOut from '../../hooks/useSignOut';
import { useHistory } from "react-router-dom";
import useAuthStorage from '../../hooks/useAuthStorage';

import AppBarContainer from './AppBarContainer';

const AppBar = () => {
  const authStorage = useAuthStorage();
  const { signOut } = useSignOut();
  let history = useHistory();

  const handleLogout = async () => {
    await signOut();
    history.push("/");
  };

  const user = {};
  
  return <AppBarContainer user={user} handleLogout={handleLogout} />;
};

export default AppBar;