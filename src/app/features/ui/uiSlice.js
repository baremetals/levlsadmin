import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    errors: {}
};

const uISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setErrors(state, action) {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        },
        clearErrors(state, action) {
            return {
                ...state,
                loading: false,
                errors: {}
            }
        },
        loadingUi(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        stopLoadingUi(state, action) {
            return {
                ...state,
                loading: false
            }
        }
    }
});

export const { setErrors, clearErrors, loadingUi,  stopLoadingUi } = uISlice.actions;

export default uISlice.reducer;