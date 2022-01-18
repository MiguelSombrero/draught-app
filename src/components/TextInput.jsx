import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <NativeTextInput
      autoCapitalize = 'none'
      style={textInputStyle}
      {...props}
    />
  );
};

export default TextInput;