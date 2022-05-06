import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../../pages/Login';
import { Provider } from 'react-redux';
import { initialState } from '../../app/slices/auth';
import { store } from '../../app/store';
import userEvent from '@testing-library/user-event';

import { prettyDOM, render, screen, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';

const initialValue = {
  username: '',
  password: '',
};
let user;

describe('Login component using RTL', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    user = userEvent.setup();
  });

  test('contains username label input', () => {
    const usernameLabel = screen.getByText('Username');
    expect(usernameLabel).toBeInTheDocument();
  });

  test('contains username input', () => {
    const usernameInput = screen.getByRole('textbox', { name: 'Username' });
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput.value).toBe(initialValue.username);
  });

  test('contains password label input', () => {
    const passwordLabel = screen.getByText('Password');
    expect(passwordLabel).toBeInTheDocument();
  });

  test('contains password input', () => {
    const passwordInput = screen.getByRole('textbox', { name: 'Password' });
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.value).toBe(initialValue.password);
  });

  test('contains Submit button', () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });

  test('submit form when click Submit button', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    const usernameInput = screen.getByRole('textbox', {
      name: 'Username',
    });
    const passwordInput = screen.getByRole('textbox', {
      name: 'Password',
    });

    fireEvent.change(usernameInput, { target: { value: 'abc' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    await user.click(submitButton);

    expect(localStorage.getItem('user')).toBe(usernameInput.value);
  });
});
