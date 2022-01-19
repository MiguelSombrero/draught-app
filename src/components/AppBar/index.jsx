import React from 'react';
import { useHistory } from "react-router-dom";

import AppBarContainer from './AppBarContainer';

const AppBar = ({ user, signOut }) => {
  let history = useHistory();

  const handleLogout = async () => {
    await signOut();
    history.push("/");
  };
  
  return <AppBarContainer user={user} handleLogout={handleLogout} />;
};

export default AppBar;