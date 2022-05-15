import { call, put, takeLatest } from "redux-saga/effects";
import {
  requestGetUsers,
  requestGetOrganisations,
  requestCreateUserEntity,
  requestDeleteUser,
  requestEditUserDetails,
  requestEditOrgDetails,
} from '../requests/request.users';

import {
  getUsers,
  getOrganisations,
  setUsers,
  createUserEntity,
  deleteUser,
  editUserDetails,
  editOrgDetails,
} from 'app/features/users';

import { clearErrors, stopLoadingUi, setErrors, loadingUi, setSuccess } from 'app/features/ui/uiSlice';


function* handleGetUsers(id) {
    yield put(loadingUi());
      try {
        const res = yield call(requestGetUsers, id);
        const { data } = res;
        yield put(setUsers(data));
        yield put(stopLoadingUi());
      } catch (error) {
        console.log(error);
        yield put(setUsers([]));
      }
}
function* handleGetOrganisations(id) {
  yield put(loadingUi());
  try {
    const res = yield call(requestGetOrganisations, id);
    const { data } = res;
    yield put(setUsers(data));
    yield put(stopLoadingUi());
  } catch (error) {
    console.log(error);
    yield put(setUsers([]));
  }
}

// function* handleCreateResource(formData, header) {
//   yield put(loadingUi());
//   try {
//     const res = yield call(requestCreateResource, formData, header);
//     const { data } = res;
//     yield put(createResource(data));
//     yield put(setSuccess({ message: 'Resource created successfully' }));
//     yield put(clearErrors());
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response.data));
//   }
// }

// function* handleDeleteResource(id) {
//   yield put(loadingUi());
//   try {
//     yield call(requestDeleteResource, id);
//     yield put(removeResource(id));
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response));
//   }
// }

function* handleEditUserDetails(userData) {
  yield put(loadingUi());
  try {
    yield call(requestEditUserDetails, userData);
    const res = yield call(requestGetUsers);
    const { data } = res;
    yield put(setUsers(data));
    yield put(setSuccess({ message: 'User details updated successfully' }));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* handleEditOrgDetails(userData) {
  yield put(loadingUi());
  try {
    yield call(requestEditOrgDetails, userData)
    const res = yield call(requestGetOrganisations);
    const { data } = res;
    yield put(setUsers(data));
    yield put(setSuccess({ message: 'Organisation details updated successfully' }));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}


function* userSagas() {
  yield takeLatest(getUsers.type, handleGetUsers);
  yield takeLatest(getOrganisations.type, handleGetOrganisations);
  yield takeLatest(editUserDetails.type, handleEditUserDetails);
  yield takeLatest(editOrgDetails.type, handleEditOrgDetails);

}
export default userSagas