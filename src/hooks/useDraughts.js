import { useState } from 'react';
import Constants from 'expo-constants';
import useAuthStorage from '../hooks/useAuthStorage';

const API_URI = Constants.manifest.extra.draughts_api_uri;

const useDraughts = () => {
  const authStorage = useAuthStorage();
  const [draughts, setDraughts] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDraughts = async () => {
    setLoading(true);

    const user = await authStorage.getLoggedUser();

    const response = await fetch(`${API_URI}/draught`, {
      headers: {
        Accept: 'application/json',
        Authorization: `bearer ${user.token}`,
      },
    });

    const json = await response.json();

    setLoading(false);
    setDraughts(json);
  };

  const addDraught = async (draught) => {
    setLoading(true);

    const user = await authStorage.getLoggedUser();

    const response = await fetch(`${API_URI}/draught`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `bearer ${user.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(draught),
    });
    
    const json = await response.json();

    setLoading(false);
    setDraughts([ ...draughts, json ]);
  };

  return { draughts, loading, fetchDraughts, addDraught };
};

export default useDraughts;