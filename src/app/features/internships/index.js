import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  internships: [],
  internship: {},
  loading: false,
};

const internshipSlice = createSlice({
  name: 'internship',
  initialState,
  reducers: {
    loadingData(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setInternships(state, action) {
      return {
        ...state,
        internships: action.payload,
        loading: false,
      };
    },
    setInternship(state, action) {
      return {
        ...state,
        internship: action.payload,
      };
    },

    removeInternship(state, action) {
      let index = state.internships.findIndex(intern => intern.internshipId === action.payload);
      state.internships.splice(index, 1);
    },
    createInternship(state, action) {
      return {
        ...state,
        internships: [action.payload, ...state.internships],
      };
    },
    getInternships() {},
    getInternship() {},
    deleteInternship(_id) {},
    editInternship(_data) {},
    createInternshipEntity(_data) {},
  },
});

export const {
  loadingData,
  editInternship,
  createInternship,
  createInternshipEntity,
  deleteInternship,
  removeInternship,
  setInternships,
  setInternship,
  getInternships,
  getInternship,
} = internshipSlice.actions;

export default internshipSlice.reducer;
