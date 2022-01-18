import React from 'react';
import { useHistory } from "react-router-dom";
import useDraughts from '../../hooks/useDraughts';
import AddDraughtContainer from './AddDraughtContainer';

const AddDraught = () => {
  const { addDraught } = useDraughts();
  let history = useHistory();

  const onSubmit = async (values) => {
    try {
      const draught = {
        beverageType: values.beverageType,
        abv: parseFloat(values.abv),
        volume: parseInt(values.volume),
      };

      await addDraught(draught);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <AddDraughtContainer onSubmit={onSubmit} />;
};

export default AddDraught;