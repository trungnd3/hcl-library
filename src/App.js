import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import AppRoutes from './components/Route/AppRoutes';

import { selectUser } from './app/action-creators/auth';
import { fetchBorrowedBooks } from './app/action-creators/book';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBorrowedBooks(user));
  }, [dispatch, user]);

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
