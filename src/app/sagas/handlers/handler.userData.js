// import { call, put, takeLatest } from "redux-saga/effects";
// import { 
//   requestGetUserEntriesData,
//   requestAvote,
//   requestFollowUser,
//   requestUnFollowUser,
//   requestGetContestEntry,
//   requestGetContestEntries,
//   requestUnLikeEntry,
//   requestLikeEntry,
//   requestEnterContest,
//   requestEntryComment, 
// } from "../requests/request.userData";

//  import { getUserEntriesData } from 'features/users/userSlice'
// import { 
//   setEntries, 
//   loadingData,
//   entryComment,
//   enterContest,
//   unLikeEntry,
//   likeEntry,
//   voting,
//   followUser,
//   unFollowUser,
//   getContestEntry,
//   getContestEntries
//  } from "features/contests/entrySlice";
//  import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'features/ui/uiSlice'


// function* handleGetUserEntriesData(userId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestGetUserEntriesData, userId);
//         const { data } = res;
//         yield put(setEntries({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setEntries(null));
//       }
// }

// function* handleFollowUser(userId) {
//   try {
//     const res = yield call(requestFollowUser, userId);
//     const { data } = res;
//     yield put(followUser({ ...data }));
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response.data));
//   }
// }

// function* handleUnFollowUser(userId) {
//   try {
//     const res = yield call(requestUnFollowUser, userId);
//     const { data } = res;
//     yield put(unFollowUser({ ...data }));
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response.data));
//   }
// }

// function* handleGetContestEntries(contestId) {
//   yield put(loadingUi());
//     try {
//       const res = yield call(requestGetContestEntries, contestId);
//       const { data } = res;
//       yield put(setEntries({ ...data }));
//       yield put(stopLoadingUi());
//     } catch (error) {
//       console.log(error);
//       yield put(setEntries([]));
//       yield put(setErrors(error.response.data));
//     }
// }

// function* handleGetContestEntry(entryId) {
//   yield put(loadingUi());
//     try {
//       const res = yield call(requestGetContestEntry, entryId);
//       const { data } = res;
//       yield put(setEntries({ ...data }));
//       yield put(stopLoadingUi());
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }

// function* handleEnterContest(formData) {
//   yield put(loadingUi());
//     try {
//       const entry = yield call(requestEnterContest, formData);
//       const { data } = entry;
//       yield put(enterContest({ ...data }));
//       yield put(clearErrors());
//     } catch (error) {
//       console.log(error);
//       yield put(setErrors(error.response.data));
//     }
// }

// function* handleVoting(entryId) {
//   try {
//     const res = yield call(requestAvote, entryId);
//     const { data } = res;
//     yield put(voting({ ...data }));
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response.data));
//   }
// }

// function* handleLikeEntry(entryId) {
//   try {
//     const res = yield call(requestLikeEntry, entryId);
//     const { data } = res;
//     yield put(likeEntry({ ...data }));
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response.data));
//   }
// }

// function* handleUnLikeEntry(entryId) {
//   try {
//     const res = yield call(requestUnLikeEntry, entryId);
//     const { data } = res;
//     yield put(unLikeEntry({ ...data }));
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response.data));
//   }
// }

// function* handleEntryComment(entryId) {
//   try {
//     const res = yield call(requestEntryComment, entryId);
//     const { data } = res;
//     yield put(entryComment({ ...data }));
//     yield put(clearErrors());
//   } catch (error) {
//     console.log(error);
//     yield put(setErrors(error.response.data));
//   }
// }

// function* userDataSagas() {
//   yield takeLatest(getUserEntriesData.type, handleGetUserEntriesData);
//   yield takeLatest(getContestEntries.type, handleGetContestEntries);
//   yield takeLatest(getContestEntry.type, handleGetContestEntry);
//   yield takeLatest(voting.type, handleVoting);
//   yield takeLatest(likeEntry.type, handleLikeEntry);
//   yield takeLatest(unLikeEntry.type, handleUnLikeEntry);
//   yield takeLatest(entryComment.type, handleEntryComment);
//   yield takeLatest(enterContest.type, handleEnterContest);
//   yield takeLatest(followUser.type, handleFollowUser);
//   yield takeLatest(unFollowUser.type, handleUnFollowUser);  
// }
// export default userDataSagas