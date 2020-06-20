import eventsReducer from "./eventsReducer";
import { combineReducers } from "redux";

export default combineReducers({ events: eventsReducer });
