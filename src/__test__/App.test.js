import React from 'react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import renderer from 'react-test-renderer';
import { prettyDOM, render, screen, fireEvent } from './utils/render';
import userEvent from '@testing-library/user-event';

let user;
describe('App component using React Testing Library', () => {
  // beforeEach(() => {
  //   render(<App />);
  //   user = userEvent.setup();
  // });

  test('render snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test('has brand name of The Grand ABC Library', () => {
  //   const { container } = screen;
  //   console.log(screen);
  //   const brandName = container.querySelector('.navbar-brand').text;
  //   expect(brandName).toBe('The Grand ABC Library');
  // });

  // test('contains Home navigation', () => {
  //   const { container } = screen;
  //   // console.log(prettyDOM(container.('.nav-link')));
  //   expect(1).toEqual(1);
  // });
});

// describe('test suite of pet peers', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     console.log(wrapper.debug());
//   });

//   test('renders learn react link', () => {
//     const mounted = mount(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );
//     // console.log(mounted.debug());
//     // expect(wrapper.find('h1').text()).toContain('Pet');

//     // const { getByText } = render(<App />);
//     // const element = getByText('Pet Peers Portal');
//     // expect(element).toBeInTheDocument();
//   });
// });
