import { call, put, takeLatest } from 'redux-saga/effects';

import {
  requestCreateAnEvent,
  requestGetEvents,
  requestDeleteEvent,
  requestEditEventDetails,
} from '../requests/request.event';

import {
  setEvents,
  getEvents,
  createAnEvent,
  deleteEvent,
  editEventDetails,
  createEventEntity,
  removeEvent,
} from 'app/features/events';


import { stopLoadingUi, setErrors, loadingUi, setSuccess } from 'app/features/ui/uiSlice';

function* handleGetEvents() {
    yield put(loadingUi());
      try {
        const res = yield call(requestGetEvents);
        const { data } = res;
        yield put(setEvents(data));
        yield put(stopLoadingUi());
      } catch (error) {
        console.log(error);
        yield put(setEvents([]));
        yield put(setErrors(error.response.data));
      }
}


function* handleCreateAnEvent(formData, header) {
    yield put(loadingUi());
      try {
        const event = yield call(requestCreateAnEvent, formData, header);
        const { data } = event;
        yield put(createAnEvent(data));
        yield put(setSuccess({message: 'Event created successfully'}));
        yield put(stopLoadingUi());
        // yield put(clearErrors());
      } catch (error) {
        console.log(error);
        yield put(setErrors(error.response.data));
      }
}


function* handleDeleteEvent(id) {
    yield put(loadingUi());
      try {
        const res = yield call(requestDeleteEvent, id);
        const { data } = res;
        yield put(removeEvent(id));
        yield put(setSuccess(data));
      } catch (error) {
        console.log(error);
        yield put(setErrors(error.response.data));
      }
}


function* handleEditEventDetails(eventData) {
    yield put(loadingUi());
      try {
        const res = yield call(requestEditEventDetails, eventData);
        const { data } = res;
        yield put(setEvents(data));
        yield put(setSuccess({ message: "Event updated successfully" }));
      } catch (error) {
        console.log(error);
        yield put(setErrors(error.response.data));
      }
}


function* eventSagas() {
  yield takeLatest(createEventEntity.type, handleCreateAnEvent);
  yield takeLatest(getEvents.type, handleGetEvents);
  yield takeLatest(deleteEvent.type, handleDeleteEvent);
  yield takeLatest(editEventDetails.type, handleEditEventDetails);
}
export default eventSagas
