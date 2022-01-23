import React from 'react';
import SettingsContainer from './SettingsContainer';

const Settings = ({ signOut }) => {

  const handleSignOut = async () => {
    await signOut();
  };

  return <SettingsContainer handleSignOut={handleSignOut} />;
};

export default Settings;