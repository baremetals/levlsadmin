import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  apprenticeships: [],
  apprenticeship: {},
  loading: false,
};

const apprenticeshipSlice = createSlice({
  name: 'apprenticeship',
  initialState,
  reducers: {
    loadingData(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setApprenticeships(state, action) {
      return {
        ...state,
        apprenticeships: action.payload,
        loading: false,
      };
    },
    setApprenticeship(state, action) {
      return {
        ...state,
        apprenticeship: action.payload,
      };
    },

    removeApprenticeship(state, action) {
      let index = state.apprenticeships.findIndex(app => app.apprenticeshipId === action.payload);
      state.apprenticeships.splice(index, 1);
    },
    createApprenticeship(state, action) {
      return {
        ...state,
        apprenticeships: [action.payload, ...state.apprenticeships],
      };
    },
    getApprenticeships() {},
    getApprenticeship() {},
    deleteApprenticeship(_id) {},
    editApprenticeship(_data) {},
    createApprenticeshipEntity(_data) {},
  },
});

export const {
  loadingData,
  editApprenticeship,
  createApprenticeship,
  createApprenticeshipEntity,
  deleteApprenticeship,
  removeApprenticeship,
  setApprenticeships,
  setApprenticeship,
  getApprenticeships,
  getApprenticeship,
} = apprenticeshipSlice.actions;

export default apprenticeshipSlice.reducer;
