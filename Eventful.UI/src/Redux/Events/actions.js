import {
  POST_EVENT,
  GET_EVENTS,
  POST_EVENT_ERROR,
  POST_EVENT_PENDING,
  POST_EVENT_SUCCESS,
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_PENDING,
} from "./actionTypes";

let nextEventId = 6;

export const postEvent = (content) => ({
  type: POST_EVENT,
  payload: {
    id: nextEventId++,
    title: content.title,
    description: content.description,
  },
});

export const getEvents = () => ({
  type: GET_EVENTS,
});

export const fetchEventsPending = () => ({
  type: FETCH_EVENTS_PENDING,
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  events: events,
});

export const fetchEventsError = (error) => ({
  type: FETCH_EVENTS_ERROR,
  error: error,
});

// This will take an event to send to the database
export const postEventPending = () => ({
  type: POST_EVENT_PENDING,
});

export const postEventSuccess = (event) => ({
  type: POST_EVENT_SUCCESS,
  newEvent: event,
});

export const postEventError = (error) => ({
  type: POST_EVENT_ERROR,
  error: error,
});
