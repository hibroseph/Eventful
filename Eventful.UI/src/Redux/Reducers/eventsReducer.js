import {
  GET_EVENTS,
  POST_EVENT,
  FETCH_EVENTS_ERROR,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_PENDING,
  POST_EVENT_ERROR,
  POST_EVENT_PENDING,
  POST_EVENT_SUCCESS,
} from "../Events/actionTypes";

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_PENDING:
      return {
        ...state,
        fetchPending: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        fetchPending: false,
        events: action.events,
      };
    case FETCH_EVENTS_ERROR:
      return {
        ...state,
        fetchPending: false,
        fetchError: action.error,
      };
    case POST_EVENT_SUCCESS:
      return {
        ...state,
        postPending: false,
        events: {
          ...state,
          events: [action.event],
        },
      };
    case POST_EVENT_PENDING:
      return {
        ...state,
        postPending: true,
      };
    case POST_EVENT_ERROR:
      return {
        ...state,
        postPending: false,
        postError: action.error,
      };
    case GET_EVENTS:
      return state;
    case POST_EVENT:
      return { ...state, events: [action.payload] };
    default:
      return state;
  }
}

export const getEvents = (state) => state.events;
export const getFetchLoading = (state) => state.fetchPending;
export const getPostLoading = (state) => state.postPending;
