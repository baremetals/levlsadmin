import { call, put, takeLatest } from 'redux-saga/effects';

import {
  requestCreateResource,
  requestResources,
  requestEditResource,
  requestDeleteResource,
} from '../requests/request.resource';

import {
  setResources,
  getResources,
  createResource,
  createResourceEntity,
  deleteResource,
  removeResource,
  editResource,
} from 'app/features/resources';
import { clearErrors, stopLoadingUi, setErrors, loadingUi, setSuccess } from 'app/features/ui/uiSlice';

function* handleGetResources() {
  yield put(loadingUi());
  try {
    const res = yield call(requestResources);
    const { data } = res;
    yield put(setResources(data));
    yield put(stopLoadingUi());
  } catch (error) {
    console.log(error);
    yield put(setResources([]));
    yield put(setErrors(error.response.data));
  }
}

function* handleCreateResource(formData, header) {
  yield put(loadingUi());
  try {
    const res = yield call(requestCreateResource, formData, header);
    const { data } = res;
    yield put(createResource(data));
    yield put(setSuccess({message: 'Resource created successfully'}));
    yield put(clearErrors());
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* handleDeleteResource(id) {
  yield put(loadingUi());
  try {
    yield call(requestDeleteResource, id);
    yield put(removeResource(id));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response));
  }
}

function* handleEditResource(resouceData) {
  yield put(loadingUi());
  try {
    yield call(requestEditResource, resouceData);
    const res = yield call(requestResources);
    const { data } = res;
    yield put(setResources(data));
    yield put(setSuccess({message: 'Resource updated successfully'}));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}


function* resourceSagas() {
  yield takeLatest(getResources.type, handleGetResources);
  yield takeLatest(createResourceEntity.type, handleCreateResource);
  yield takeLatest(deleteResource.type, handleDeleteResource);
  yield takeLatest(editResource.type, handleEditResource);
}
export default resourceSagas;
