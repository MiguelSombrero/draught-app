import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import useAuthStorage from '../hooks/useAuthStorage';

const API_URI = Constants.manifest.extra.draughts_api_uri;

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [user, setUser] = useState(null);
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

    await authStorage.setLoggedUser(json);
    setUser(json);
    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    await authStorage.removeLoggedUser();
    setUser(null);
    setLoading(false);
  };

  const getLoggedUser = async () => {
    const loggedUser = await authStorage.getLoggedUser();
    setUser(loggedUser);
  };

  useEffect(() => {
    getLoggedUser();
  }, []);

  return { user, loading, signIn, signOut };
};

export default useSignIn;