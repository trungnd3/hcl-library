import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from '../components/UI/FormGroup';

import { login } from '../app/action-creators/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(login(username, password));
    navigate('/');
  };

  return (
    <Fragment>
      <div className='d-flex justify-content-center mt-4'>
        <Form onSubmit={submitHandler} className='w-50'>
          <FormGroup
            type='text'
            label='Username'
            name='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <FormGroup
            type='text'
            label='Password'
            name='password'
            className='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Form.Group className='d-flex'>
            <Button
              variant='primary-library'
              type='submit'
              className='w-25 me-2'
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  );
};

export default Login;
