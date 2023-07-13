const initialState = {
  array: [],
  error: null,
};

export default function arrayReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ARRAY_SUCCESS":
      return {
        ...state,
        array: action.payload,
        error: null,
      };
    case "FETCH_ARRAY_ERROR":
      return {
        ...state,
        array: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
