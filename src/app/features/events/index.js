import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  event: {},
  loading: false,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    loadingData(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setEvents(state, action) {
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    },
    setEvent(state, action) {
      return {
        ...state,
        event: action.payload,
      };
    },
    likeAndUnLikeEvent(state, action) {
      let index = state.events.findIndex(event => event.eventId === action.payload.eventId);
      state.events[index] = action.payload;
      if (state.event.eventId === action.payload.eventId) {
        state.event = action.payload;
      }
      return {
        ...state,
      };
    },

    removeEvent(state, action) {
      let index = state.events.findIndex(event => event.eventId === action.payload);
      state.events.splice(index, 1);
    },
    createAnEvent(state, action) {
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    },
    eventComment(state, action) {
      return {
        ...state,
        event: {
          ...state.event,
          comments: [action.payload, ...state.event.eventComments],
        },
      };
    },
    editEventDetails(_eventData) {},
    getEvents() {},
    getEvent() {},
    deleteEvent(_id) {},
    createEventEntity(
      _formData,
      _header = {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ) {},
  },
});

export const {
  loadingData,
  editEventDetails,
  eventComment,
  createAnEvent,
  createEventEntity,
  deleteEvent,
  removeEvent,
  likeAndUnLikeEvent,
  setEvent,
  setEvents,
  getEvents,
  getEvent,
} = eventSlice.actions;

export default eventSlice.reducer;
