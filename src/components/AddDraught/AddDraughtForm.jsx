import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../Button';
import FormikTextInput from '../FormikTextInput';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.mainBackground,
    marginBottom: 20,
  },
});

const AddDraughtForm = ({ onSubmit, loading }) => {
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
        loading={loading}
        text="Add Draught"
        testID='addDraughtButton'
      />
    </View>
  );
};

export default AddDraughtForm;