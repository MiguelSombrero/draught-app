import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

const Button = ({ text, onPress, loading, testID }) =>
  <PaperButton
    onPress={onPress}
    loading={loading}
    testID={testID}
    mode="contained"
  >{text}
  </PaperButton>;

export default Button;