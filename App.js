import React from 'react';
import Main from './src/components/Main';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './src/theme';

const authStorage = new AuthStorage();

const App = () => {
  return (
    <AuthStorageContext.Provider value={authStorage}>
      <PaperProvider theme={theme} >
        <Main />
      </PaperProvider>
    </AuthStorageContext.Provider>
  );
};

export default App;