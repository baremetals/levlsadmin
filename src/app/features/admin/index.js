import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  notifications: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loading(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setAuthenticated(state, _action) {
      return {
        ...state,
        authenticated: true,
      };
    },
    setUnAuthenticated(_state, _action) {
      return initialState;
    },
    setUser(_state, action) {
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    },
    login(_userData) {},
    getAdminData() {},
    resetPassword(_email) {},
    logOut() {},
    setAuthorizationHeader() {},
  },
});

export const {
  loading,
  setUnAuthenticated,
  setAuthenticated,
  login,
  logOut,
  setAuthorizationHeader,
  resetPassword,
  setUser,
  getAdminData,
} = adminSlice.actions;

export default adminSlice.reducer;
