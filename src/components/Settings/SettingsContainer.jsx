import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../Button';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Settings = ({ handleSignOut }) => (
  <View style={styles.container}>
    <Button
      onPress={handleSignOut}
      text="Logout"
      testID='logoutButton'
    />
  </View>
);

export default Settings;