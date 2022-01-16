import { useState } from 'react';
import Constants from 'expo-constants';
import useAuthStorage from '../hooks/useAuthStorage';

const API_URI = Constants.manifest.extra.draughts_api_uri;

const useSignIn = () => {
  const authStorage = useAuthStorage();
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
    await authStorage.setLoggedUser(json);
  };

  return { loading, signIn };
};

export default useSignIn;