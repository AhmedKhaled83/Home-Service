import {createSlice} from '@reduxjs/toolkit';

const CycleAppSlice = createSlice({
  name: 'cycle',
  initialState: {loading: true, tokenUser: null, tokenBoarding: null},
  reducers: {
    LogIn: (state, action) => {
      state.loading = false;
      state.tokenUser = action.payload;
    },
    LogOut: (state, action) => {
      state.loading = false;
      state.tokenUser = null;
    },
    UpdateAuth: (state, action) => {
      state.loading = false;
      state.tokenUser = action.payload;
    },
  },
});

export default CycleAppSlice.reducer;
export const {UpdateAuth, LogOut, LogIn, UpdateBoarding} =
  CycleAppSlice.actions;
