import { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetchDraughts();
  }, []);

  return { draughts, loading, refetch: fetchDraughts };
};

export default useDraughts;