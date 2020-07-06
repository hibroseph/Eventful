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
  fetch: {
    pending: false,
    error: false,
  },
  post: {
    pending: false,
    error: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_PENDING:
      return {
        ...state,
        fetch: { pending: true },
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        fetch: {
          pending: false,
          error: false,
        },
        events: action.events,
      };
    case FETCH_EVENTS_ERROR:
      console.log("there was an error");
      return {
        ...state,
        fetch: {
          pending: false,
          error: true,
        },
      };
    case POST_EVENT_SUCCESS:
      console.log(action.newEvent);
      return {
        ...state,
        post: {
          pending: false,
          error: false,
        },
        events: [...state.events, action.newEvent],
      };
    case POST_EVENT_PENDING:
      return {
        ...state,
        post: {
          pending: true,
        },
      };
    case POST_EVENT_ERROR:
      return {
        ...state,
        post: {
          pending: false,
          error: true,
        },
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
export const getEventFetchStatus = (state) => state.events.fetch;
