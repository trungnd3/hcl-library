import React from 'react';
import NotFound from '../../pages/NotFound';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('NotFound component using RTL', () => {
  test('render snapshot', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render NotFound', () => {
    render(<NotFound />);
    const notFoundText = screen.getByText('Page not found!');
    expect(notFoundText).toBeInTheDocument();
  });
});
