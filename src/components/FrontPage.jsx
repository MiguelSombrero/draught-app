import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const FrontPage = () => {
  return (
    <View style={styles.container}>
      <Text>Front Page</Text>
    </View>
  );
};

export default FrontPage;