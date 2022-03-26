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
    loading(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    setAuthenticated(state, action) {
      return {
        ...state,
        authenticated: true,
      };
    },
    setUnAuthenticated(state, action) {
      return initialState;
    },
    setUser(state, action) {
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    },
    login(userData) {},
    getAdminData() {},
    resetPassword(email) {},
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
