import { createSlice } from '@reduxjs/toolkit';

const storedUser = localStorage.getItem('user');

export const initialState = {
  isLoggedIn: !!storedUser,
  user: storedUser || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    onLogout(state) {
      state.isLoggedIn = false;
      state.user = '';
    },
  },
});

export const { onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer;
