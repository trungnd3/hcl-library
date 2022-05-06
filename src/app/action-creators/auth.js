import { onLogin, onLogout } from '../slices/auth';

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const login = (username, password) => {
  return (dispatch) => {
    localStorage.setItem('user', username);
    dispatch(onLogin(username));
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(onLogout());
  };
};
