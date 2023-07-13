import React from "react";

const initialState = {
  value: false,
};

export default function booleanReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH-SUCCESS":
      return {
        ...state,
        value: action.value,
      };

    default:
      return state;
  }
}
