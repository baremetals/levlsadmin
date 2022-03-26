// import { call, put, takeLatest } from "redux-saga/effects";

// import { 
//     requestGetUserEventsData,
//     requestCreateAnEvent,
//     requestGetEvent,
//     requestGetEvents,
//     requestLikeEvent,
//     requestUnLikeEvent,
//     requestEventComment,
//     requestDeleteEvent,
//     requestEditEventDetails, 
// } from "../requests/request.eventData";

// import { 
//     setEvents,
//     getEvents,
//     getEvent,
//     createAnEvent,
//     likeEvent,
//     unLikeEvent,
//     eventComment,
//     deleteEvent,
//     loadingData,
//     editEventDetails,
//  } from "features/events/eventSlice";
// import { getUserEventsData } from 'features/users/userSlice'
// import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'features/ui/uiSlice'


// function* handleGetEvents() {
//     yield put(loadingUi());
//       try {
//         const res = yield call(requestGetEvents);
//         const { data } = res;
//         yield put(setEvents({ ...data }));
//         yield put(stopLoadingUi());
//       } catch (error) {
//         console.log(error);
//         yield put(setEvents([]));
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleGetEvent(eventId) {
//     yield put(loadingUi());
//       try {
//         const res = yield call(requestGetEvent, eventId);
//         const { data } = res;
//         yield put(setEvents({ ...data }));
//         yield put(stopLoadingUi());
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleCreateAnEvent(formData) {
//     yield put(loadingUi());
//       try {
//         const event = yield call(requestCreateAnEvent, formData);
//         const { data } = event;
//         yield put(createAnEvent({ ...data }));
//         yield put(clearErrors());
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleLikeEvent(eventId) {
//       try {
//         const res = yield call(requestLikeEvent, eventId);
//         const { data } = res;
//         yield put(likeEvent({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleUnLikeEvent(eventId) {
//       try {
//         const res = yield call(requestUnLikeEvent, eventId);
//         const { data } = res;
//         yield put(unLikeEvent({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleEventComment(eventId) {
//       try {
//         const res = yield call(requestEventComment, eventId);
//         const { data } = res;
//         yield put(eventComment({ ...data }));
//         yield put(clearErrors());
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleDeleteEvent(eventId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestDeleteEvent, eventId);
//         const { data } = res;
//         yield put(deleteEvent({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleEditEventDetails(eventId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestEditEventDetails, eventId);
//         const { data } = res;
//         yield put(setEvents({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }


// function* handleGetUserEventsData(userId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestGetUserEventsData, userId);
//         const { data } = res;
//         yield put(setEvents({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setEvents(null));
//       }
// }

// function* eventSagas() {
//   yield takeLatest(getUserEventsData.type, handleGetUserEventsData);
//   yield takeLatest(createAnEvent.type, handleCreateAnEvent);
//   yield takeLatest(getEvent.type, handleGetEvent);
//   yield takeLatest(getEvents.type, handleGetEvents);
//   yield takeLatest(likeEvent.type, handleLikeEvent);
//   yield takeLatest(unLikeEvent.type, handleUnLikeEvent);
//   yield takeLatest(eventComment.type, handleEventComment);
//   yield takeLatest(deleteEvent.type, handleDeleteEvent);
//   yield takeLatest(editEventDetails.type, handleEditEventDetails);
// }
// export default eventSagas 