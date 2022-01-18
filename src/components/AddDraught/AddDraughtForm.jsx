import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from '../FormikTextInput';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

const AddDraughtForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="beverageType"
        placeholder="beer, wine, whisky etc"
        testID='beverageTypeField'
      />
      <FormikTextInput
        name="abv"
        keyboardType='decimal-pad'
        placeholder="abv percents"
        testID='abvField'
      />
      <FormikTextInput
        name="volume"
        keyboardType='numeric'
        placeholder="volume in millilitres"
        testID='volumeField'
      />
      <Button
        onPress={onSubmit}
        title="Add Draught"
        testID='addDraughtButton'
      />
    </View>
  );
};

export default AddDraughtForm;