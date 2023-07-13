import React from "react";

const initialState = {
  data: "",
  error: null,
};

export default function stringReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH-SUCCESS":
      return {
        ...state,
        data: action.data,
        error: null,
      };
    case "FETCH-ERROR":
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
}
