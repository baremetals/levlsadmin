import { call, put, takeLatest } from 'redux-saga/effects';

import {
  requestCreateFunding,
  requestFundingEntities,
  requestEditFunding,
  requestDeleteFunding,
} from '../requests/request.funding';

import {
  setFundingEntities,
  getFundingEntities,
  createFunding,
  createFundingEntity,
  deleteFunding,
  removeFunding,
  editFunding,
} from 'app/features/grants';
import { clearErrors, stopLoadingUi, setErrors, loadingUi, setSuccess } from 'app/features/ui/uiSlice';

function* handleGetFundingEntities() {
  yield put(loadingUi());
  try {
    const res = yield call(requestFundingEntities);
    const { data } = res;
    yield put(setFundingEntities(data));
    yield put(stopLoadingUi());
  } catch (error) {
    console.log(error);
    yield put(setFundingEntities([]));
    yield put(setErrors(error.response.data));
  }
}

function* handleCreateFunding(formData, header) {
  yield put(loadingUi());
  try {
    const res = yield call(requestCreateFunding, formData, header);
    const { data } = res;
    yield put(createFunding(data));
    yield put(setSuccess({message: 'Funding created successfully'}));
    yield put(clearErrors());
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* handleDeleteFunding(id) {
  yield put(loadingUi());
  try {
    yield call(requestDeleteFunding, id);
    yield put(removeFunding(id));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response));
  }
}

function* handleEditFunding(internData) {
  yield put(loadingUi());
  try {
    yield call(requestEditFunding, internData);
    const res = yield call(requestFundingEntities);
    const { data } = res;
    yield put(setFundingEntities(data));
    yield put(setSuccess({message: 'Funding updated successfully'}));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* fundingSagas() {
  yield takeLatest(getFundingEntities.type, handleGetFundingEntities);
  yield takeLatest(createFundingEntity.type, handleCreateFunding);
  yield takeLatest(deleteFunding.type, handleDeleteFunding);
  yield takeLatest(editFunding.type, handleEditFunding);
}
export default fundingSagas;
