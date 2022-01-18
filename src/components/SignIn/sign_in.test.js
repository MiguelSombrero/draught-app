import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from './SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit prop after pressing the Sign In button with valid input', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('usernameField'), 'somero');
      fireEvent.changeText(getByTestId('passwordField'), 'salainen');
      fireEvent.press(getByTestId('signInButton'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'somero',
          password: 'salainen',
        });
      });
    });

    it('does not call onSubmit prop after pressing the Sign In button with invalid input', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(getByTestId('usernameField'), 's');
      fireEvent.changeText(getByTestId('passwordField'), 'salainen');
      fireEvent.press(getByTestId('signInButton'));
      
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(0);
      });
    });
  });
});