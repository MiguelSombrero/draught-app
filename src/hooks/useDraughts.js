import { useState, useEffect } from 'react';
import Constants from 'expo-constants';

const API_URI = Constants.manifest.extra.draughts_api_uri;

const useDraughts = () => {
  const [draughts, setDraughts] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDraughts = async () => {
    setLoading(true);

    const response = await fetch(`${API_URI}/draughts`);
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