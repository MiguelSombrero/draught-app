import React from 'react';
import AddDraughtContainer from './AddDraughtContainer';

const AddDraught = ({ loading, addDraught, navigation }) => {

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