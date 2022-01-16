import { useState } from 'react';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    console.log("use sign out");
    setLoading(true);
    await authStorage.removeLoggedUser();
    setLoading(false);
  };

  return { loading, signOut };
};

export default useSignOut;