import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resources: [],
  resource: {},
  loading: false,
};

const resourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    loadingData(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setResources(state, action) {
      return {
        ...state,
        resources: action.payload,
        loading: false,
      };
    },
    setResource(state, action) {
      return {
        ...state,
        resource: action.payload,
      };
    },

    removeResource(state, action) {
      let index = state.resources.findIndex(resource => resource.resourceId === action.payload);
      state.resources.splice(index, 1);
    },
    createResource(state, action) {
      return {
        ...state,
        resources: [action.payload, ...state.resources],
      };
    },
    getResources() {},
    getResource() {},
    deleteResource(_id) {},
    editResource(_resourceData) {},
    createResourceEntity(
      _formData,
      _header = {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ) {},
  },
});

export const {
  loadingData,
  editResource,
  createResource,
  createResourceEntity,
  deleteResource,
  removeResource,
  setResources,
  setResource,
  getResources,
  getResource,
} = resourceSlice.actions;

export default resourceSlice.reducer;
