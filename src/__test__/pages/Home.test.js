import React from 'react';
import Home from '../../pages/Home';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Home component using RTL', () => {
  test('render snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('render Home', () => {
    render(<Home />);
    const homeText = screen.getByText('Welcome member!');
    expect(homeText).toBeInTheDocument();
  });
});
