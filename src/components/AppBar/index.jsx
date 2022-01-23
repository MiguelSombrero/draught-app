import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
  const handleSearch = () => console.log('Searching');
  
  return (
    <Appbar.Header>
      <Appbar.Content title="Draught App" />
      <Appbar.Action icon="magnify" onPress={handleSearch} />
    </Appbar.Header>
  );
};

export default AppBar;