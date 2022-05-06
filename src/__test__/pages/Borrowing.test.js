import React from 'react';
import Borrowing from '../../pages/Borrowing';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { prettyDOM, render, screen, fireEvent } from '../utils/render';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

let user;

describe('Borrowing component using RTL', () => {
  beforeEach(() => {
    render(<Borrowing />);
    user = userEvent.setup();
  });

  test('render snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Borrowing />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display empty data', () => {
    const emptyText = screen.getByText(
      'You are currently not borrowing any book.'
    );
    expect(emptyText).toBeInTheDocument();
  });

  // test('should display borrowing table', () => {
  //   const table = screen.getByRole('table');
  //   console.log(table);
  // });
});
