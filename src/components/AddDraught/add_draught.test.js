import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AddDraughtContainer from './AddDraughtContainer';

describe('AddDraught', () => {
  describe('AddDraughtContainer', () => {
    it('calls onSubmit prop after pressing the Add Draught button with valid input', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<AddDraughtContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('beverageTypeField'), 'beer');
      fireEvent.changeText(getByTestId('abvField'), '5.5');
      fireEvent.changeText(getByTestId('volumeField'), '500');
      fireEvent.press(getByTestId('addDraughtButton'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      
        expect(onSubmit.mock.calls[0][0]).toEqual({
          beverageType: 'beer',
          abv: '5.5',
          volume: '500',
        });
      });
    });

    it('does not call onSubmit prop after pressing the Add Draught button with invalid input', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<AddDraughtContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('beverageTypeField'), 'b');
      fireEvent.changeText(getByTestId('abvField'), '5.5');
      fireEvent.changeText(getByTestId('volumeField'), '500');
      fireEvent.press(getByTestId('addDraughtButton'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(0);
      });
    });
  });
});