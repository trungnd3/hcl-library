import { Routes, Route } from 'react-router-dom';

import NotFound from '../../pages/NotFound';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Borrowing from '../../pages/Borrowing';
import History from '../../pages/History';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/borrowing' element={<Borrowing />} />
      <Route path='/history' element={<History />} />
    </Routes>
  );
};

export default AppRoutes;
