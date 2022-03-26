import { call, put, takeLatest } from "redux-saga/effects";
// import { requestSignUpUser } from "../requests/request.user";
// import { requestUploadImage } from "../requests/request.user";
import {
  requestLogin,
  requestGetAdminData,
  requestSetAuthorizationHeader,
  requestLogOut,
} from '../requests/request.admin';
// import { requestEditUserDetails } from "../requests/request.user";
// import { requestMarkNotificationsRead } from "../requests/request.user";
// import { requestResetPassword } from "../requests/request.user";
// import { requestUpdateEmailAddress } from "../requests/request.user";
// import { requestUpdatePassword } from "../requests/request.user"
// import { requestUpdateUsername } from "../requests/request.user"
// import { requestGetUsernames } from "../requests/request.user";

import {
//   signUpUser, 
  login,        
  logOut, 
//   uploadImage,
//   resetPassword,
//   editUserDetails,
//   markNotificationsRead,
  setUser,
  setUnAuthenticated,
//   notificationsRead,
  getAdminData,
  loading,
  setAuthorizationHeader,
//   updateEmailAddress,
//   updatePassword,
//   updateUsername,
//   getUsernames,
//   setUsernames,
//   getUser,
//   loadingData
} from 'app/features/adminSlice'

import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'app/features/ui/uiSlice'
import history from 'config/history'
// import axios from "axios";


// // Sign Up
// function* handlesignUpUser(newUserData) {
//   yield put(loadingUi());
//     try {
//       yield call(requestSignUpUser, newUserData);
//       const user = yield call(requestGetUserData);
//       const { data } = user;
//       yield put(setUser({ ...data }));
//       yield put(clearErrors());
//       history.push('/signin');
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }

// // Sign In
function* handleLogin(userData) {
  yield put(loadingUi());
    try {
      yield call(requestLogin, userData);
      const user = yield call(requestGetAdminData);
      const { data } = user;
      yield put(setUser({ ...data }));
      yield put(clearErrors());
      history.push('/admin');
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}  

// logOut
function* handleLogOut() {
    try {
      yield call(requestLogOut);
      yield put(setUnAuthenticated());
    } catch (error) {
      console.log(error);
    }
}


// function* handleResetPassword(email) {
//   yield put(loadingUi());
//   try {
//     yield call(requestResetPassword, email);
//     yield put(stopLoadingUi());
//     history.push('/signin');
//   } catch (error) {
//     console.log(error);
//     yield put(stopLoadingUi());
//     yield put(setErrors(error.response.data));
//   }
// }


// // Upload Image
// function* handleUploadImage(formData) {
//   yield put(loadingUser());
//     try {
//       yield call(requestUploadImage, formData);
//       const user = yield call(requestGetUserData);
//       const { data } = user;
//       yield put(setUser({ ...data }));
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }


// // Get User Data
function* handleGetAdminData() {
  yield put(loading());
  try {
    const user = yield call(requestGetAdminData);
    const { data } = user;
    yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

// // Edit User User Details
// function* handleEditUserDetails(userDetails) {
//   yield put(loadingUser());
//     try {
//       yield call(requestEditUserDetails, userDetails);
//       const user = yield call(requestGetUserData);
//       const { data } = user;
//       yield put(setUser({ ...data }));
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }

// // Update Username
// function* handleUpdateUsername(newUsername) {
//   yield put(loadingUser());
//     try {
//       yield call(requestUpdateUsername, newUsername);
//       const user = yield call(requestGetUserData);
//       const { data } = user;
//       yield put(setUser({ ...data }));
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }

// //Update Firebase Email
// function* handleUpdateEmailAddress(email) {
//   yield put(loadingUser());
//     try {
//       yield call(requestUpdateEmailAddress, email);
//       const user = yield call(requestGetUserData);
//       const { data } = user;
//       yield put(setUser({ ...data }));
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }

// // Update Firebase Password
// function* handleUpdatePassword(password) {
//   yield put(loadingUser());
//     try {
//       yield call(requestUpdatePassword, password);
//       const user = yield call(requestGetUserData);
//       const { data } = user;
//       yield put(setUser({ ...data }));
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }


// // Notifications
// export function* handleMarkNotificationsRead(notificationIds) {
//     try {
//       const response = yield call(requestMarkNotificationsRead);
//       const { data } = response;
//       yield put(notificationsRead({ ...data }));
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }  


// Authorisation
function* handleSetAuthorizationHeader() {
    try {
      yield call(requestSetAuthorizationHeader);
    } catch (error) {
      console.log(error);
      yield put(setErrors(error.response.data));
    }
}


function* adminSagas() {
  yield takeLatest(login.type, handleLogin);
//   yield takeLatest(resetPassword.type, handleResetPassword);
//   yield takeLatest(signUpUser.type, handlesignUpUser);
//   yield takeLatest(uploadImage.type, handleUploadImage);
//   yield takeLatest(updateEmailAddress.type, handleUpdateEmailAddress);
//   yield takeLatest(updatePassword.type, handleUpdatePassword);
//   yield takeLatest(updateUsername.type, handleUpdateUsername);
//   yield takeLatest(editUserDetails.type, handleEditUserDetails);
  yield takeLatest(logOut.type, handleLogOut);
//   yield takeLatest(markNotificationsRead.type, handleMarkNotificationsRead);
  yield takeLatest(getAdminData.type, handleGetAdminData);
  yield takeLatest(setAuthorizationHeader.type, handleSetAuthorizationHeader);
//   yield takeLatest(getUsernames.type, handleGetUsernames);
}
export default adminSagas