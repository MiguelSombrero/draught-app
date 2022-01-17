import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignUpContainer from './SignUpContainer';

describe('SignUp', () => {
  describe('SignUpContainer', () => {
    it('calls onSubmit prop after pressing the Sign Up button with valid input', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignUpContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('usernameField'), 'somero');
      fireEvent.changeText(getByTestId('passwordField'), 'salainen');
      fireEvent.changeText(getByTestId('nameField'), 'miika');
      fireEvent.press(getByTestId('signUpButton'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'somero',
          password: 'salainen',
          name: 'miika'
        });
      });
    });

    it('does not call onSubmit prop after pressing the Sign Up button with invalid input', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignUpContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('usernameField'), 's');
      fireEvent.changeText(getByTestId('passwordField'), 'salainen');
      fireEvent.changeText(getByTestId('nameField'), 'miika');
      fireEvent.press(getByTestId('signUpButton'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(0);
      });
    });
  });
});