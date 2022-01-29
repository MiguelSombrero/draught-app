import React from 'react';
import AddDraughtContainer from './AddDraughtContainer';
import useDraughts from '../../hooks/useDraughts';

const AddDraught = ({ navigation }) => {
  const { loading, addDraught } = useDraughts();

  const onSubmit = async (values) => {
    try {
      const draught = {
        beverageType: values.beverageType,
        abv: parseFloat(values.abv),
        volume: parseInt(values.volume),
      };

      await addDraught(draught);
      navigation.navigate('Stats');
    } catch (e) {
      console.log(e);
    }
  };

  return <AddDraughtContainer onSubmit={onSubmit} loading={loading} />;
};

export default AddDraught;