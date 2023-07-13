import requests from "../../Request";
import axios from "axios";

// export const fetchArray = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(requests.requestPopular);
//       return dispatch({ type: "FETCH_ARRAY_SUCCESS", payload: response.data });
//     } catch (error) {
//       return dispatch({ type: "FETCH_ARRAY_ERROR", payload: error.message });
//     }
//   };
// };

export const fetchArray = () => {
  return (dispatch) => {
    return axios
      .get(requests.requestPopular)
      .then((response) =>
        dispatch({ type: "FETCH_ARRAY_SUCCESS", payload: response.data })
      )
      .catch((error) =>
        dispatch({ type: "FETCH_ARRAY_ERROR", payload: error.message })
      );
  };
};
