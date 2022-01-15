import { useState } from 'react';
import Constants from 'expo-constants';
import AuthStorage from '../utils/authStorage';

const API_URI = Constants.manifest.extra.draughts_api_uri;

const useSignIn = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const signIn = async ({ username, password }) => {
    setLoading(true);

    const response = await fetch(`${API_URI}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username, password
      }),
    });
    
    const json = await response.json();

    setLoading(false);
    AuthStorage.setLoggedUser(json);

    console.log("onko user:");
    console.log(AuthStorage.getLoggedUser());
  };

  return { user, loading, signIn };
};

export default useSignIn;