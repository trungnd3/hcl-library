import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { selectIsLoggedIn } from '../../app/action-creators/auth';
import { Fragment } from 'react';
import { logout } from '../../app/action-creators/auth';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const signOutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>The Grand ABC Library</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {isLoggedIn && (
              <Fragment>
                <LinkContainer to='/borrowing'>
                  <Nav.Link>My Borrowing</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/history'>
                  <Nav.Link>Borrowed History</Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={signOutHandler}>Logout</Nav.Link>
              </Fragment>
            )}
            {!isLoggedIn && (
              <Fragment>
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
