import { call, put, takeLatest } from 'redux-saga/effects';

import {
  requestCreateApprenticeship,
  requestApprenticeships,
  requestEditApprenticeship,
  requestDeleteApprenticeship,
} from '../requests/request.apprentice';

import {
  setApprenticeships,
  getApprenticeships,
  createApprenticeship,
  createApprenticeshipEntity,
  deleteApprenticeship,
  removeApprenticeship,
  editApprenticeship,
} from 'app/features/apprenticeships';
import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'app/features/ui/uiSlice';

function* handleGetApprenticeships() {
  yield put(loadingUi());
  try {
    const res = yield call(requestApprenticeships);
    const { data } = res;
    yield put(setApprenticeships(data));
    yield put(stopLoadingUi());
  } catch (error) {
    console.log(error);
    yield put(setApprenticeships([]));
    yield put(setErrors(error.response.data));
  }
}

function* handleCreateApprenticeship(formData) {
  yield put(loadingUi());
  try {
    const res = yield call(requestCreateApprenticeship, formData);
    const { data } = res;
    yield put(createApprenticeship(data));
    yield put(clearErrors());
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* handleDeleteApprenticeship(id) {
  yield put(loadingUi());
  try {
    yield call(requestDeleteApprenticeship, id);
    yield put(removeApprenticeship(id));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response));
  }
}

function* handleEditApprenticeship(appData) {
  yield put(loadingUi());
  try {
    yield call(requestEditApprenticeship, appData);
    const res = yield call(requestApprenticeships);
    const { data } = res;
    yield put(setApprenticeships(data));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* apprenticeshipSagas() {
  yield takeLatest(getApprenticeships.type, handleGetApprenticeships);
  yield takeLatest(createApprenticeshipEntity.type, handleCreateApprenticeship);
  yield takeLatest(deleteApprenticeship.type, handleDeleteApprenticeship);
  yield takeLatest(editApprenticeship.type, handleEditApprenticeship);
}
export default apprenticeshipSagas;
