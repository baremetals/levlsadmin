import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [],
    event: {},
    loading: false
}

const eventSlice = createSlice({
    name: 'event',
  initialState,
  reducers: {
    loadingData(state, action) {
        return {
          ...state,
          loading: true
        };
      },
      setEvents(state, action) {
        return {
          ...state,
          events: action.payload,
          loading: false
        };
      },
      setEvent(state, action) {
        return {
          ...state,
          event: action.payload
        };
      },
      likeEvent(state, action) {
        let index = state.events.findIndex(
          (event) => event.eventId === action.payload.eventId
        );
        state.events[index] = action.payload;
        if (state.event.eventId === action.payload.eventId) {
          state.event = action.payload;
        }
        return {
          ...state
        };
      },
      unLikeEvent(state, action) {
        let index = state.events.findIndex(
          (event) => event.eventId === action.payload.eventId
        );
        state.events[index] = action.payload;
        if (state.event.eventId === action.payload.eventId) {
          state.event = action.payload;
        }
        return {
          ...state
        };
      },
      deleteEvent(state, action) {
        let index = state.events.findIndex(
          (event) => event.eventId === action.payload
        );
        state.events.splice(index, 1);
        return {
          ...state
        };
      },
      createAnEvent(state, action) {
        return {
          ...state,
          events: [action.payload, ...state.events]
        };
      },
      eventComment(state, action) {
        return {
          ...state,
          event: {
            ...state.event,
            comments: [action.payload, ...state.event.eventComments]
          }
        };
      },
      editEventDetails(eventData) {},
  }
})

export const { 
    loadingData,
    editEventDetails,
    eventComment,
    createAnEvent,
    deleteEvent,
    unLikeEvent,
    likeEvent,
    setEvent,
    setEvents,
    getEvents,
    getEvent
} = eventSlice.actions;

export default eventSlice.reducer;