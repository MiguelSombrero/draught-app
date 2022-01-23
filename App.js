import React from 'react';
import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './src/theme';

const authStorage = new AuthStorage();

const App = () => {
  return (
    <>
      <NativeRouter>
        <AuthStorageContext.Provider value={authStorage}>
          <PaperProvider theme={theme} >
            <Main />
          </PaperProvider>
        </AuthStorageContext.Provider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;