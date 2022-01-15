import Constants from 'expo-constants';

const API_URI = Constants.manifest.extra.draughts_api_uri;

let token = null;

export const setToken = newToken => {
  token = `bearer ${newToken}`;
};

export const useResource = (baseUrl) => {

    const getAll = async () => {
      const response = await fetch(`${API_URI}${baseUrl}`);
      const json = await response.json();
      return json;
    };
  
    const create = async (resource) => {
      const response = await fetch(`${API_URI}${baseUrl}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify(resource),
      });
      const json = await response.json();
      return json;
    };

    return  {
      getAll, create
    };
  };