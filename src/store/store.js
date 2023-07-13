import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import arrayReducer from "./reducers/arrayReducer";
import stringReducer from "./reducers/stringReducer";
import booleanReducer from "./reducers/booleanReducer";

// const rootReducer = combineReducers({
//   array: arrayReducer,
//   string: stringReducer,
//   boolean: booleanReducer,
// });
const store = createStore(arrayReducer, applyMiddleware(thunk));

export default store;
