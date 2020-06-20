import { GET_EVENTS, POST_EVENT, FETCH_EVENTS_ERROR, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_PENDING } from "../Events/actionTypes";

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EVENTS_SUCCESS:
      console.log(action);
      var state = {
        ...state,
        pending: false,
        events: action.events,
      };
      console.log("state in reducer");
      console.log(state);
      return state;
    case FETCH_EVENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_EVENTS:
      return state;
    case POST_EVENT:
      return { ...state, events: [...state.events, action.payload] };
    default:
      return state;
  }
}

export const getEvents = (state) => state.events;
