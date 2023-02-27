// listening action, pure function, somente altera state da app
// ligada diretamente a feat da app

import {GET_PACK} from './actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_PACK_LIST":
      return { ...state, loading: true };
    case "SUCCESS_PACK_LIST":
      return { data: action.payload.data, loading: false, error: false };
    case 'FAILURE_PACK_LIST':
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}

export default Reducer;