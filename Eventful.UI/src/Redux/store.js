import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./Reducers/index";

const middlewares = [thunk];

export default createStore(reducer, applyMiddleware(...middlewares));
