import axios from 'axios';

// Define action types
// obj with type and payload
// actions call by view

export const REQUEST_PACK_LIST = 'FETCH_PACK';

// Construct a BASE URL for API endpoint
const API_URL = 'http://localhost:3000';

export const requestPackList = (paramseg) => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);

      if (res.data) {
        dispatch({
          type: REQUEST_PACK_LIST,
          payload: res.data.results,
        });
      } else {
        console.log('Error on fetch data');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
