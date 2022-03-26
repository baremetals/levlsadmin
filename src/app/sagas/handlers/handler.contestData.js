// import { call, put, takeLatest } from "redux-saga/effects";

// import { 
//     requestGetUserContestsData,
//     requestHostAContest,
//     requestGetContest,
//     requestGetContests,
//     requestLikeContest,
//     requestUnLikeContest,
//     requestContestComment,
//     requestDeleteContest,
//     requestEditContest, 
// } from "../requests/request.contestData";

// import { 
//     setContests,
//     getContests,
//     getContest,
//     hostAContest,
//     likeContest,
//     unLikeContest,
//     contestComment,
//     deleteContest,
//     loadingData,
//     editContest,
//  } from "features/contests/contestSlice";
// import { getUserContestsData } from 'features/users/userSlice'
// import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'features/ui/uiSlice'


// function* handleGetContests() {
//     yield put(loadingUi());
//       try {
//         const res = yield call(requestGetContests);
//         const { data } = res;
//         yield put(setContests({ ...data }));
//         yield put(stopLoadingUi());
//       } catch (error) {
//         console.log(error);
//         yield put(setContests([]));
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleGetContest(contestId) {
//     yield put(loadingUi());
//       try {
//         const res = yield call(requestGetContest, contestId);
//         const { data } = res;
//         yield put(setContests({ ...data }));
//         yield put(stopLoadingUi());
//       } catch (error) {
//         console.log(error);
//         yield put(setContests(null));
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleHostAContest(formData) {
//     yield put(loadingUi());
//       try {
//         const contest = yield call(requestHostAContest, formData);
//         const { data } = contest;
//         yield put(hostAContest({ ...data }));
//         yield put(clearErrors());
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleLikeContest(contestId) {
//       try {
//         const res = yield call(requestLikeContest, contestId);
//         const { data } = res;
//         yield put(likeContest({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleUnLikeContest(contestId) {
//       try {
//         const res = yield call(requestUnLikeContest, contestId);
//         const { data } = res;
//         yield put(unLikeContest({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleContestComment(contestId) {
//       try {
//         const res = yield call(requestContestComment, contestId);
//         const { data } = res;
//         yield put(contestComment({ ...data }));
//         yield put(clearErrors());
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleDeleteContest(contestId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestDeleteContest, contestId);
//         const { data } = res;
//         yield put(deleteContest({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleEditContest(contestId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestEditContest, contestId);
//         const { data } = res;
//         yield put(setContests({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }


// function* handleGetUserContestsData(userId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestGetUserContestsData, userId);
//         const { data } = res;
//         yield put(setContests({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* contestSagas() {
//     yield takeLatest(getContests.type, handleGetContests);
//     yield takeLatest(hostAContest.type, handleHostAContest);
//     yield takeLatest(getContest.type, handleGetContest);
//     yield takeLatest(getUserContestsData.type, handleGetUserContestsData);
//     yield takeLatest(likeContest.type, handleLikeContest);
//     yield takeLatest(unLikeContest.type, handleUnLikeContest);
//     yield takeLatest(contestComment.type, handleContestComment);
//     yield takeLatest(deleteContest.type, handleDeleteContest);
//     yield takeLatest(editContest.type, handleEditContest);
// }
// export default contestSagas 