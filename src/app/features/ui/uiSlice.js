import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    errors: {},
    success: {}
};

const uISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setErrors(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    },
    setSuccess(state, action) {
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    },
    clearErrors(state, _action) {
      return {
        ...state,
        loading: false,
        errors: {},
      };
    },
    loadingUi(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    stopLoadingUi(state, _action) {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { setErrors, clearErrors, loadingUi, stopLoadingUi, setSuccess } = uISlice.actions;

export default uISlice.reducer;