import React from 'react';
import History from '../../pages/History';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

let user;

describe('History component using RTL', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <History />
      </Provider>
    );
    user = userEvent.setup();
  });
  test('render snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <History />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should contain month label select', () => {
    const monthLabel = screen.getByText('Month');
    expect(monthLabel).toBeInTheDocument();
  });

  test('should correctly set default month', () => {
    expect(
      screen.getByRole('option', { name: 'Select a month' }).selected
    ).toBe(true);
  });

  test('should display the correct number of month options', () => {
    const monthSelect = screen.getByRole('month-filter');
    expect(monthSelect.children.length).toBe(13);
  });

  test('contains year label select', () => {
    const yearLabel = screen.getByText('Year');
    expect(yearLabel).toBeInTheDocument();
  });

  test('should correctly set default year', () => {
    expect(screen.getByRole('option', { name: 'Select a year' }).selected).toBe(
      true
    );
  });

  test('should display the correct number of year options', () => {
    const yearSelect = screen.getByRole('year-filter');
    expect(yearSelect.children.length).toBe(4);
  });

  test('contains Filter button', () => {
    const filterButton = screen.getByRole('button', { name: 'Filter' });
    expect(filterButton).toBeInTheDocument();
  });

  test('should display empty data', () => {
    const emptyText = screen.getByText('No book found!');
    expect(emptyText).toBeInTheDocument();
  });

  // test('submit form when click Filter button', async () => {
  //   const filterButton = screen.getByRole('button', { name: 'Filter' });
  //   const usernameInput = screen.getByRole('textbox', {
  //     name: 'Username',
  //   });
  //   const passwordInput = screen.getByRole('textbox', {
  //     name: 'Password',
  //   });

  //   fireEvent.change(usernameInput, { target: { value: 'abc' } });
  //   fireEvent.change(passwordInput, { target: { value: '123456' } });

  //   await user.click(submitButton);

  //   expect(localStorage.getItem('user')).toBe(usernameInput.value);
  // });

  // test('render History', () => {
  //   render(<History />);
  //   const historyText = screen.getByText('Welcome member!');
  //   expect(historyText).toBeInTheDocument();
  // });
});
