import { useState } from 'react';
import Constants from 'expo-constants';

const API_URI = Constants.manifest.extra.draughts_api_uri;

const useUsers = () => {
  const [loading, setLoading] = useState(false);

  const createUser = async ({ username, password, name }) => {
    setLoading(true);

    await fetch(`${API_URI}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username, password, name
      }),
    });

    setLoading(false);
  };

  return { loading, createUser };
};

export default useUsers;