import { POST_EVENT, GET_EVENTS, FETCH_EVENTS_ERROR, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_PENDING } from "./actionTypes";

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
