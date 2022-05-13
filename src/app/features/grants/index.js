import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fundingEntities: [],
  funding: {},
  loading: false,
};

const fundingSlice = createSlice({
  name: 'funding',
  initialState,
  reducers: {
    loadingData(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setFundingEntities(state, action) {
      return {
        ...state,
        fundingEntities: action.payload,
        loading: false,
      };
    },
    setFunding(state, action) {
      return {
        ...state,
        funding: action.payload,
      };
    },

    removeFunding(state, action) {
      let index = state.fundingEntities.findIndex(fund => fund.fundingId === action.payload);
      state.fundingEntities.splice(index, 1);
    },
    createFunding(state, action) {
      return {
        ...state,
        fundingEntities: [action.payload, ...state.fundingEntities],
      };
    },
    getFundingEntities() {},
    getFunding() {},
    deleteFunding(_id) {},
    editFunding(_data) {},
    createFundingEntity(_data) {},
  },
});

export const {
  loadingData,
  editFunding,
  createFunding,
  createFundingEntity,
  deleteFunding,
  removeFunding,
  setFundingEntities,
  setFunding,
  getFundingEntities,
  getFunding,
} = fundingSlice.actions;

export default fundingSlice.reducer;
