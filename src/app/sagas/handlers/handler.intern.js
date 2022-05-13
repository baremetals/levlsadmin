import { call, put, takeLatest } from 'redux-saga/effects';

import {
  requestCreateInternship,
  requestInternships,
  requestEditInternship,
  requestDeleteInternship,
} from '../requests/request.intern';

import {
  setInternships,
  getInternships,
  createInternship,
  createInternshipEntity,
  deleteInternship,
  removeInternship,
  editInternship,
} from 'app/features/internships';
import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'app/features/ui/uiSlice';

function* handleGetInternships() {
  yield put(loadingUi());
  try {
    const res = yield call(requestInternships);
    const { data } = res;
    yield put(setInternships(data));
    yield put(stopLoadingUi());
  } catch (error) {
    console.log(error);
    yield put(setInternships([]));
    yield put(setErrors(error.response.data));
  }
}

function* handleCreateInternship(formData, header) {
  yield put(loadingUi());
  try {
    const res = yield call(requestCreateInternship, formData, header);
    const { data } = res;
    yield put(createInternship(data));
    yield put(clearErrors());
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* handleDeleteInternship(id) {
  yield put(loadingUi());
  try {
    yield call(requestDeleteInternship, id);
    yield put(removeInternship(id));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response));
  }
}

function* handleEditInternship(internData) {
  yield put(loadingUi());
  try {
    yield call(requestEditInternship, internData);
    const res = yield call(requestInternships);
    const { data } = res;
    yield put(setInternships(data));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* internshipSagas() {
  yield takeLatest(getInternships.type, handleGetInternships);
  yield takeLatest(createInternshipEntity.type, handleCreateInternship);
  yield takeLatest(deleteInternship.type, handleDeleteInternship);
  yield takeLatest(editInternship.type, handleEditInternship);
}
export default internshipSagas;
