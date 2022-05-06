import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  init: false,
  borrowing: [],
  borrowed: [],
};

const authSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    onReplace(state, action) {
      state.init = true;
      state.borrowing = action.payload.borrowing;
      state.borrowed = action.payload.borrowed;
    },
  },
});

export const { onReplace } = authSlice.actions;

export default authSlice.reducer;
